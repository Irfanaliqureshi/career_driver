import React from 'react';
import Navbar from '../components/Navbar'; // Assuming Navbar is in components

// Mock data for user profile and saved results - in a real app, this would come from a backend
const mockUserProfile = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  education: "Bachelor's Degree in Engineering/CS",
  skills: ['Programming (Python, Java, C++)', 'Data Analysis & Visualization', 'Project Management'],
  interests: ['Software Development', 'Artificial Intelligence', 'Robotics & Automation'],
};

const mockSavedResults = [
  {
    id: 'res1',
    date: '2025-05-10',
    recommendations: [
      { id: 'cr1', title: 'Software Developer' },
      { id: 'cr2', title: 'Data Scientist' },
    ],
    query: { skills: ['s1', 's2', 's10'], education: 'e3', interests: ['i1', 'i3', 'i4'] }
  },
  {
    id: 'res2',
    date: '2025-04-22',
    recommendations: [
      { id: 'cr4', title: 'Cloud Engineer' },
    ],
    query: { skills: ['s6', 's7'], education: 'e4', interests: ['i1'] }
  },
];

const UserProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar isLoggedIn={true} pageTitle="User Profile" /> {/* Assuming user is logged in */}

      <main className="w-full max-w-4xl mx-auto py-12 px-6 md:px-12 mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Your Profile</h2>

        {/* User Details Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-10">
          <h3 className="text-2xl font-medium text-gray-700 mb-6">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg text-gray-800 font-medium">{mockUserProfile.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-lg text-gray-800 font-medium">{mockUserProfile.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Highest Education</p>
              <p className="text-lg text-gray-800 font-medium">{mockUserProfile.education}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">Skills</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {mockUserProfile.skills.map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Interests</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {mockUserProfile.interests.map(interest => (
                <span key={interest} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>
           <div className="mt-6 text-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm">
                Edit Profile
            </button>
           </div>
        </section>

        {/* Saved Results Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-medium text-gray-700 mb-6">Your Saved Career Recommendations</h3>
          {mockSavedResults.length > 0 ? (
            <ul className="space-y-6">
              {mockSavedResults.map(result => (
                <li key={result.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-md font-semibold text-gray-800">Results from: {result.date}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                        View Details
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Recommended Careers:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        {result.recommendations.map(rec => (
                            <li key={rec.id}>{rec.title}</li>
                        ))}
                    </ul>
                  </div>
                  {/* Optionally display query parameters used for these results */}
                  {/* <p className="text-xs text-gray-400 mt-2">Query: Skills ({result.query.skills.join(', ')}), Education ({result.query.education}), Interests ({result.query.interests.join(', ')})</p> */}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">You have no saved recommendation results yet.</p>
          )}
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-8 mt-auto">
        <p>&copy; 2025 Smart Digital Assistant for Career Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserProfilePage;

