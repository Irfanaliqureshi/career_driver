import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CareerRecommendationsPage from './pages/CareerRecommendationsPage';
import AdminPage from './pages/AdminPage';
import UserProfilePage from './pages/UserProfilePage';
import './App.css'; // General app styles
import './index.css'; // Tailwind styles

// Mock authentication state - replace with actual auth logic
const isAuthenticated = () => {
  // For now, let's assume the user is logged in if a mock token exists
  // In a real app, this would involve checking a valid token or session
  return localStorage.getItem('mockAuthToken') === 'true';
};

const App: React.FC = () => {
  // Simple login function for mock auth
  const login = () => {
    localStorage.setItem('mockAuthToken', 'true');
    window.location.href = '/dashboard'; // Redirect after login
  };

  // Simple logout function for mock auth
  const logout = () => {
    localStorage.removeItem('mockAuthToken');
    window.location.href = '/login'; // Redirect after logout
  };

  // This is a placeholder for routing logic. 
  // In a real app, you'd use React Router's <Route> components with proper elements.
  // For now, we'll just set up the ThemeProvider and a basic structure.

  return (
    <ThemeProvider>
      <Router>
        {/* The Navbar will be rendered by each page component itself to pass props like isLoggedIn and pageTitle */}
        {/* This global Navbar here is just for structure, actual Navbar is in pages */}
        {/* <Navbar isLoggedIn={isAuthenticated()} /> */}
        <div className="app-container bg-gray-50 dark:bg-slate-900 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} /> {/* We'd pass login function here */}
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Protected Routes - simplistic check for now */}
            <Route path="/dashboard" element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />} />
            <Route path="/recommendations" element={isAuthenticated() ? <CareerRecommendationsPage /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated() ? <UserProfilePage /> : <Navigate to="/login" />} />
            <Route path="/admin" element={isAuthenticated() ? <AdminPage /> : <Navigate to="/login" />} /> {/* Assuming admin is also a logged-in user */}

            {/* Fallback for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

