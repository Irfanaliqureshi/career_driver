import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
// import Navbar from './components/Navbar'; // Commented out since it's unused
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CareerRecommendationsPage from './pages/CareerRecommendationsPage';
import AdminPage from './pages/AdminPage';
import UserProfilePage from './pages/UserProfilePage';
import './App.css'; // General app styles
import './index.css'; // Tailwind styles

// Mock authentication state
const isAuthenticated = () => {
return localStorage.getItem('mockAuthToken') === 'true';
};

const App: React.FC = () => {
// Removed unused login/logout functions

return (
<ThemeProvider>
<Router>
<div className="app-container bg-gray-50 dark:bg-slate-900 min-h-screen">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route
path="/dashboard"
element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />}
/>
<Route
path="/recommendations"
element={isAuthenticated() ? <CareerRecommendationsPage /> : <Navigate to="/login" />}
/>
<Route
path="/profile"
element={isAuthenticated() ? <UserProfilePage /> : <Navigate to="/login" />}
/>
<Route
path="/admin"
element={isAuthenticated() ? <AdminPage /> : <Navigate to="/login" />}
/>
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</div>
</Router>
</ThemeProvider>
);
};
