import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

// Define an interface for a career recommendation
interface CareerRecommendation {
  id: string;
  title: string;
  jobDescription: string;
  requiredSkills: string[];
  responsibilities: string[];
  futureGrowth: string; // Could be a percentage, text description, or link to more info
}

// Mock data for career recommendations - in a real app, this would come from the backend/ML model
const mockRecommendations: CareerRecommendation[] = [
  {
    id: 'cr1',
    title: 'Software Developer',
    jobDescription: 'Software developers create the computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks. They are responsible for the entire development lifecycle of software, from concept and design to testing and deployment.',
    requiredSkills: ['Programming (e.g., Python, Java, C#)', 'Data Structures & Algorithms', 'Version Control (Git)', 'Problem Solving', 'Debugging'],
    responsibilities: [
      'Designing and developing software applications.',
      'Testing and debugging code.',
      'Collaborating with team members.',
      'Maintaining and updating existing software.',
      'Writing technical documentation.',
    ],
    futureGrowth: 'Projected to grow 22% from 2020 to 2030, much faster than average.',
  },
  {
    id: 'cr2',
    title: 'Data Scientist',
    jobDescription: 'Data scientists use their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.',
    requiredSkills: ['Statistics & Probability', 'Machine Learning', 'Data Visualization', 'Programming (Python, R)', 'Big Data Technologies (Hadoop, Spark)'],
    responsibilities: [
      'Collecting and cleaning large datasets.',
      'Building predictive models and machine-learning algorithms.',
      'Communicating findings to stakeholders.',
      'Developing data visualization dashboards.',
      'Staying updated with the latest data science trends.',
    ],
    futureGrowth: 'Projected to grow 31% from 2020 to 2030, much faster than average.',
  },
  {
    id: 'cr3',
    title: 'Cybersecurity Analyst',
    jobDescription: 'Cybersecurity analysts plan and carry out security measures to protect an organization’s computer networks and systems. Their responsibilities are continually expanding as the number of cyberattacks increases.',
    requiredSkills: ['Network Security', 'Intrusion Detection', 'Risk Assessment', 'Cryptography', 'Security Information and Event Management (SIEM)'],
    responsibilities: [
      'Monitoring networks for security breaches.',
      'Investigating security incidents.',
      'Developing and implementing security policies.',
      'Conducting penetration testing.',
      'Staying updated on cybersecurity threats and vulnerabilities.',
    ],
    futureGrowth: 'Projected to grow 33% from 2020 to 2030, much faster than average.',
  },
  {
    id: 'cr4',
    title: 'Cloud Engineer',
    jobDescription: 'Cloud engineers are IT professionals responsible for any technological duties associated with cloud computing, including design, planning, management, maintenance and support. They work with cloud providers like AWS, Azure, or Google Cloud.',
    requiredSkills: ['Cloud Platforms (AWS, Azure, GCP)', 'Virtualization', 'Networking', 'Automation (e.g., Terraform, Ansible)', 'Operating Systems (Linux, Windows)'],
    responsibilities: [
      'Designing and deploying cloud infrastructure.',
      'Managing and monitoring cloud services.',
      'Ensuring cloud security and compliance.',
      'Automating cloud operations.',
      'Optimizing cloud costs.',
    ],
    futureGrowth: 'High demand with significant growth as more companies move to cloud solutions.',
  },
];

const CareerRecommendationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar isLoggedIn={true} pageTitle="Recommendations" /> {/* Use Navbar */}

      <main className="w-full max-w-5xl mx-auto py-12 px-6 md:px-12 mt-16"> {/* Added mt-16 for spacing */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Your Recommended Career Paths</h2>
        
        {mockRecommendations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockRecommendations.map(career => (
              <div key={career.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{career.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed hyphens-auto">{career.jobDescription}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-700 mb-2">Required Skills:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {career.requiredSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {career.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-700 mb-2">Future Growth:</h4>
                    <p className="text-sm text-gray-600">{career.futureGrowth}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 text-right mt-auto"> {/* Added mt-auto to push button to bottom */}
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-150">
                        Learn More
                    </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No recommendations available at the moment. Please complete your profile on the dashboard.</p>
        )}
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-8 mt-auto">
        <p>&copy; 2025 Smart Digital Assistant for Career Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerRecommendationsPage;

