import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Users, TrendingUp } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">CampusConnect</span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/signin"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Connecting Students and Companies
              <br />
              <span className="text-blue-600">for a Better Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              CampusConnect is the premier platform that bridges the gap between talented students
              and leading companies, streamlining the campus placement process.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg transition-colors"
              >
                Start Applying
              </Link>
              <Link
                to="/signin"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 font-medium text-lg transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Briefcase size={32} />}
              title="Job Opportunities"
              description="Access hundreds of internship and placement opportunities from top companies"
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Easy Applications"
              description="Apply to multiple positions with a single profile and track your progress"
            />
            <FeatureCard
              icon={<GraduationCap size={32} />}
              title="Interview Scheduling"
              description="Manage all your interviews in one place with automated reminders"
            />
            <FeatureCard
              icon={<TrendingUp size={32} />}
              title="Career Growth"
              description="Get insights and analytics to improve your placement success rate"
            />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  For Students
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Create your profile, upload your resume, and start applying to your dream companies.
                  Track your applications, schedule interviews, and get placed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Build a comprehensive profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Apply to multiple companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Schedule and manage interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Get real-time notifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  For Companies
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Post job openings, review applications, and connect with the brightest students.
                  Streamline your campus recruitment process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Post unlimited job openings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Review student applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Schedule interviews efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Access qualified talent pool</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap size={28} />
              <span className="text-xl font-bold">CampusConnect</span>
            </div>
            <p className="text-gray-400">&copy; 2025 CampusConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
