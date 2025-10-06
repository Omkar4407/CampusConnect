import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Briefcase, Calendar, Bell, TrendingUp } from 'lucide-react';
import { mockJobs, mockInterviews, mockNotifications } from '../utils/mockData';
import type { Job, Interview, Notification } from '../types';

export function Dashboard() {
  const { profile } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setJobs(mockJobs.slice(0, 3));
    setInterviews(mockInterviews);
    setNotifications(mockNotifications.slice(0, 3));
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {profile?.full_name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your placements today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Briefcase className="text-blue-600" size={24} />}
          title="Available Jobs"
          value={mockJobs.length.toString()}
          color="blue"
        />
        <StatCard
          icon={<Calendar className="text-green-600" size={24} />}
          title="Upcoming Interviews"
          value={interviews.length.toString()}
          color="green"
        />
        <StatCard
          icon={<Bell className="text-yellow-600" size={24} />}
          title="Notifications"
          value={notifications.filter(n => !n.read).length.toString()}
          color="yellow"
        />
        <StatCard
          icon={<TrendingUp className="text-purple-600" size={24} />}
          title="Applications"
          value="0"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Job Openings</h2>
            <Link to="/jobs" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.position}</h3>
                    <p className="text-sm text-gray-600">{job.company?.company_name}</p>
                    <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                  </div>
                  <span className="badge badge-success">Open</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Interviews</h2>
            <Link to="/interviews" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {interviews.length > 0 ? (
              interviews.map((interview) => (
                <div
                  key={interview.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{interview.company?.company_name}</h3>
                      <p className="text-sm text-gray-600">{interview.type}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(interview.scheduled_date).toLocaleDateString()} at {interview.scheduled_time}
                      </p>
                    </div>
                    <span className="badge badge-info">{interview.status}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No upcoming interviews</p>
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Recent Notifications</h2>
          <Link to="/notifications" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
                {!notification.read && (
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }: { icon: React.ReactNode; title: string; value: string; color: string }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
