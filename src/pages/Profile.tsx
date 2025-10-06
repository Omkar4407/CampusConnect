import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, Mail, Phone, BookOpen, Award, FileText, CreditCard as Edit2, Save } from 'lucide-react';

export function Profile() {
  const { profile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    email: profile?.email || '',
    phone: '+91-9876543210',
    branch: 'Computer Science',
    year: '4th Year',
    gpa: '3.8',
    skills: 'Java, Python, JavaScript, React, Node.js',
  });

  const handleSave = () => {
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your personal information</p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          {isEditing ? (
            <>
              <Save size={18} />
              Save Changes
            </>
          ) : (
            <>
              <Edit2 size={18} />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="card">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {profile?.full_name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{profile?.full_name}</h2>
            <p className="text-gray-600">{profile?.user_type === 'student' ? 'Student' : 'Company'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User size={18} className="mr-2 text-blue-600" />
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="input"
              />
            ) : (
              <p className="text-gray-900">{formData.full_name}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail size={18} className="mr-2 text-blue-600" />
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input"
              />
            ) : (
              <p className="text-gray-900">{formData.email}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone size={18} className="mr-2 text-blue-600" />
              Phone
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input"
              />
            ) : (
              <p className="text-gray-900">{formData.phone}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <BookOpen size={18} className="mr-2 text-blue-600" />
              Branch
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="input"
              />
            ) : (
              <p className="text-gray-900">{formData.branch}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Award size={18} className="mr-2 text-blue-600" />
              Year
            </label>
            {isEditing ? (
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="input"
              >
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            ) : (
              <p className="text-gray-900">{formData.year}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Award size={18} className="mr-2 text-blue-600" />
              GPA
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.gpa}
                onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                className="input"
              />
            ) : (
              <p className="text-gray-900">{formData.gpa}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <FileText size={18} className="mr-2 text-blue-600" />
            Skills
          </label>
          {isEditing ? (
            <textarea
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              rows={3}
              className="input"
            />
          ) : (
            <p className="text-gray-900">{formData.skills}</p>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <FileText size={18} className="mr-2 text-blue-600" />
            Resume
          </label>
          <div className="flex items-center space-x-4">
            <button className="btn btn-secondary">Upload Resume</button>
            <span className="text-sm text-gray-600">resume.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}
