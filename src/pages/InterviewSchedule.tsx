import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Video } from 'lucide-react';
import { mockInterviews } from '../utils/mockData';
import type { Interview } from '../types';

export function InterviewSchedule() {
  const [interviews, setInterviews] = useState<Interview[]>([]);

  useEffect(() => {
    setInterviews(mockInterviews);
  }, []);

  const handleJoinInterview = () => {
    alert('Joining interview...');
  };

  const handleReschedule = () => {
    alert('Reschedule request sent to company');
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'badge-info';
      case 'completed':
        return 'badge-success';
      case 'cancelled':
        return 'badge-error';
      default:
        return 'badge-warning';
    }
  };

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'technical':
        return 'badge-info';
      case 'hr':
        return 'badge-success';
      case 'managerial':
        return 'badge-warning';
      default:
        return 'badge-info';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Interview Schedule</h1>
        <p className="text-gray-600 mt-2">
          Manage your upcoming and past interviews
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {interviews.length > 0 ? (
          interviews.map((interview) => (
            <div key={interview.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {interview.company?.company_name}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Position: <span className="font-medium">{interview.application?.job?.position || 'Software Engineer'}</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`badge ${getStatusBadgeClass(interview.status)}`}>
                        {interview.status}
                      </span>
                      <span className={`badge ${getTypeBadgeClass(interview.type)}`}>
                        {interview.type}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={20} className="mr-3 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">
                          {new Date(interview.scheduled_date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Clock size={20} className="mr-3 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{interview.scheduled_time} ({interview.duration} mins)</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <MapPin size={20} className="mr-3 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{interview.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <User size={20} className="mr-3 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Interviewer</p>
                        <p className="font-medium">{interview.interviewer}</p>
                      </div>
                    </div>
                  </div>

                  {interview.notes && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                      <p className="text-gray-600 text-sm">{interview.notes}</p>
                    </div>
                  )}
                </div>

                {interview.status === 'scheduled' && (
                  <div className="flex lg:flex-col gap-2">
                    <button
                      onClick={handleJoinInterview}
                      className="btn btn-primary flex items-center justify-center gap-2 flex-1 lg:flex-none"
                    >
                      <Video size={18} />
                      Join Interview
                    </button>
                    <button
                      onClick={handleReschedule}
                      className="btn btn-secondary flex items-center justify-center gap-2 flex-1 lg:flex-none"
                    >
                      <Calendar size={18} />
                      Reschedule
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="card text-center py-12">
            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Interviews Scheduled</h3>
            <p className="text-gray-600">
              Your upcoming interviews will appear here once companies schedule them
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
