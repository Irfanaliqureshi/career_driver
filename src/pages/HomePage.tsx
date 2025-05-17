import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar isLoggedIn={false} /> {/* Use the Navbar component */}

      {/* Hero Section */}
      <header className="w-full bg-blue-600 text-white text-center py-20 px-6 md:px-12 mt-16"> {/* Added mt-16 for spacing below fixed navbar */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Engineering Career Path</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Our Smart Digital Assistant helps you explore career options based on your skills, interests, and education.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200">
          Get Started
        </button>
      </header>

      {/* Welcome Section */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Smart Digital Assistant for Career Guidance</h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Choosing a career path in engineering can be overwhelming. With so many specializations and opportunities, it's hard to know where to start. This platform is designed to simplify that process. By understanding your unique profile – your skills, educational background, and personal interests – we provide tailored career recommendations to guide you towards a fulfilling professional journey.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our goal is to empower you with the information and insights you need to make confident decisions about your future. Explore potential roles, understand the required skills, and discover the growth prospects for various engineering careers.
        </p>
      </section>

      {/* Footer Placeholder */}
      <footer className="w-full bg-gray-800 text-white text-center py-8 mt-auto">
        <p>&copy; 2025 Smart Digital Assistant for Career Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

