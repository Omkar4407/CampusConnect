import { useState, useEffect } from 'react';
import { Search, MapPin, DollarSign, Calendar, Bookmark, Send } from 'lucide-react';
import { mockJobs } from '../utils/mockData';
import type { Job } from '../types';

export function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

  useEffect(() => {
    setJobs(mockJobs);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company?.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase());
    const matchesCompany = !filterCompany || job.company?.company_name === filterCompany;
    return matchesSearch && matchesLocation && matchesCompany;
  });

  const companies = Array.from(new Set(jobs.map(j => j.company?.company_name).filter(Boolean)));

  const handleApply = () => {
    alert('Application submitted successfully!');
  };

  const handleSave = () => {
    alert('Job saved to your bookmarks!');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
        <p className="text-gray-600 mt-2">
          Explore {filteredJobs.length} available job opportunities
        </p>
      </div>

      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Location"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={filterCompany}
            onChange={(e) => setFilterCompany(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{job.position}</h2>
                    <p className="text-lg text-gray-600 mt-1">{job.company?.company_name}</p>
                  </div>
                  <span className="badge badge-success">{job.status}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </div>
                  {job.salary_min && job.salary_max && (
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      ${job.salary_min} - ${job.salary_max}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{job.description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Requirements</h3>
                  <p className="text-gray-600 text-sm">{job.requirements}</p>
                </div>
              </div>

              <div className="flex md:flex-col gap-2">
                <button
                  onClick={handleApply}
                  className="btn btn-primary flex items-center justify-center gap-2 flex-1 md:flex-none"
                >
                  <Send size={18} />
                  Apply Now
                </button>
                <button
                  onClick={handleSave}
                  className="btn btn-secondary flex items-center justify-center gap-2 flex-1 md:flex-none"
                >
                  <Bookmark size={18} />
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
