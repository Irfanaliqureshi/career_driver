import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

// Define interfaces for form data for clarity, can be expanded later
interface Skill {
  id: string;
  name: string;
}

interface EducationLevel {
  id: string;
  name: string;
}

interface Interest {
  id: string;
  name: string;
}

const DashboardPage: React.FC = () => {
  // Mock data for options - in a real app, this might come from an API
  const availableSkills: Skill[] = [
    { id: 's1', name: 'Programming (Python, Java, C++)' },
    { id: 's2', name: 'Data Analysis & Visualization' },
    { id: 's3', name: 'Machine Learning / AI' },
    { id: 's4', name: 'Web Development (React, Angular, Vue)' },
    { id: 's5', name: 'Mobile App Development' },
    { id: 's6', name: 'Cloud Computing (AWS, Azure, GCP)' },
    { id: 's7', name: 'DevOps & CI/CD' },
    { id: 's8', name: 'Cybersecurity' },
    { id: 's9', name: 'CAD/CAM Software' },
    { id: 's10', name: 'Project Management' },
    { id: 's11', name: 'Technical Writing' },
    { id: 's12', name: 'Problem Solving' },
  ];

  const educationLevels: EducationLevel[] = [
    { id: 'e1', name: 'High School Diploma / GED' },
    { id: 'e2', name: 'Associate Degree in Engineering/CS' },
    { id: 'e3', name: "Bachelor's Degree in Engineering/CS" },
    { id: 'e4', name: "Master's Degree in Engineering/CS" },
    { id: 'e5', name: 'PhD in Engineering/CS' },
    { id: 'e6', name: 'Vocational/Technical Training' },
  ];

  const availableInterests: Interest[] = [
    { id: 'i1', name: 'Software Development' },
    { id: 'i2', name: 'Data Science & Analytics' },
    { id: 'i3', name: 'Artificial Intelligence' },
    { id: 'i4', name: 'Robotics & Automation' },
    { id: 'i5', name: 'Aerospace Engineering' },
    { id: 'i6', name: 'Biomedical Engineering' },
    { id: 'i7', name: 'Civil & Structural Engineering' },
    { id: 'i8', name: 'Electrical & Electronics Engineering' },
    { id: 'i9', name: 'Mechanical Engineering' },
    { id: 'i10', name: 'Environmental Engineering' },
    { id: 'i11', name: 'Video Game Development' },
    { id: 'i12', name: 'Research & Development' },
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<string>('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSkillChange = (skillId: string) => {
    setSelectedSkills(prev =>
      prev.includes(skillId) ? prev.filter(s => s !== skillId) : [...prev, skillId]
    );
  };

  const handleInterestChange = (interestId: string) => {
    setSelectedInterests(prev =>
      prev.includes(interestId) ? prev.filter(i => i !== interestId) : [...prev, interestId]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder for submitting data to a backend or ML model
    console.log('Submitted Data:', {
      skills: selectedSkills,
      education: selectedEducation,
      interests: selectedInterests,
    });
    alert('Questionnaire submitted! Recommendations will be generated (placeholder).');
    // Here you would typically navigate to the recommendations page or trigger an API call
    // For now, let's assume navigation to /recommendations
    window.location.href = '/recommendations'; // Simple navigation for now
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar isLoggedIn={true} pageTitle="Dashboard" /> {/* Use Navbar */}

      <main className="w-full max-w-4xl mx-auto py-12 px-6 md:px-12 mt-16"> {/* Added mt-16 for spacing */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Tell Us About Yourself</h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-8">
          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">Your Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {availableSkills.map(skill => (
                <label key={skill.id} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill.id)}
                    onChange={() => handleSkillChange(skill.id)}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{skill.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">Your Education Level</h3>
            <select
              value={selectedEducation}
              onChange={e => setSelectedEducation(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
              <option value="" disabled>Select your highest education level</option>
              {educationLevels.map(level => (
                <option key={level.id} value={level.id}>{level.name}</option>
              ))}
            </select>
          </div>

          {/* Interests Section */}
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">Your Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {availableInterests.map(interest => (
                <label key={interest.id} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedInterests.includes(interest.id)}
                    onChange={() => handleInterestChange(interest.id)}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{interest.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Get Job Role Predictions
            </button>
          </div>
        </form>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-8 mt-auto">
        <p>&copy; 2025 Smart Digital Assistant for Career Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;

