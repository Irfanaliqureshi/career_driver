import React from 'react';
import Navbar from '../components/Navbar'; // Assuming Navbar is in components

// Mock data for careers - in a real app, this would come from a backend
const mockCareers = [
  { id: 'c1', title: 'Software Developer', description: 'Creates software applications.' },
  { id: 'c2', title: 'Data Scientist', description: 'Analyzes complex data sets.' },
  { id: 'c3', title: 'Cybersecurity Analyst', description: 'Protects computer systems.' },
  { id: 'c4', title: 'Cloud Engineer', description: 'Manages cloud infrastructure.' },
  { id: 'c5', title: 'AI/ML Engineer', description: 'Develops AI and Machine Learning models.' },
];

const AdminPage: React.FC = () => {
  // Placeholder functions for CRUD operations
  const handleAddCareer = () => {
    alert('Add new career functionality to be implemented.');
  };

  const handleEditCareer = (careerId: string) => {
    alert(`Edit career ${careerId} functionality to be implemented.`);
  };

  const handleDeleteCareer = (careerId: string) => {
    alert(`Delete career ${careerId} functionality to be implemented.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar isLoggedIn={true} pageTitle="Admin Panel" /> {/* Assuming admin is logged in */}

      <main className="w-full max-w-4xl mx-auto py-12 px-6 md:px-12 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Manage Careers</h2>
          <button 
            onClick={handleAddCareer}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-150"
          >
            Add New Career
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          {mockCareers.length > 0 ? (
            <ul className="space-y-4">
              {mockCareers.map(career => (
                <li key={career.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{career.title}</h3>
                    <p className="text-sm text-gray-600">{career.description}</p>
                  </div>
                  <div className="space-x-2">
                    <button 
                      onClick={() => handleEditCareer(career.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg text-sm transition-colors duration-150"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteCareer(career.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-lg text-sm transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600">No careers found. Add some!</p>
          )}
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-8 mt-auto">
        <p>&copy; 2025 Smart Digital Assistant for Career Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;

