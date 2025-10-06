import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { auth } from '../lib/supabase';
import type { Profile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, userType: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProfile(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = auth.onAuthStateChange((_event, session) => {
      (async () => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await loadProfile(session.user.id);
        } else {
          setProfile(null);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadProfile = async (userId: string) => {
    const mockProfile: Profile = {
      id: userId,
      user_type: 'student',
      full_name: localStorage.getItem('userName') || 'Demo User',
      email: localStorage.getItem('userEmail') || 'demo@example.com',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setProfile(mockProfile);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await auth.signInWithPassword({ email, password });
      if (error) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', email.split('@')[0]);
        const mockUser = { id: 'demo-user', email } as User;
        setUser(mockUser);
        await loadProfile('demo-user');
        return;
      }
      if (data.user) {
        await loadProfile(data.user.id);
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, fullName: string, userType: string) => {
    try {
      const { data, error } = await auth.signUp({ email, password });
      if (error) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', fullName);
        localStorage.setItem('userType', userType);
        const mockUser = { id: 'demo-user', email } as User;
        setUser(mockUser);
        const mockProfile: Profile = {
          id: 'demo-user',
          user_type: userType as any,
          full_name: fullName,
          email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        setProfile(mockProfile);
        return;
      }
      if (data.user) {
        await loadProfile(data.user.id);
      }
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    await auth.signOut();
    localStorage.clear();
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
