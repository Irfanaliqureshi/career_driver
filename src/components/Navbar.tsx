import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using lucide-react icons (pre-installed)

interface NavbarProps {
  isLoggedIn?: boolean; // To conditionally render buttons
  pageTitle?: string; // To show current page or context
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false, pageTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const appName = "CareerGuidance";
  const titleToShow = pageTitle ? `${appName} - ${pageTitle}` : appName;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              {appName}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isLoggedIn ? (
                <>
                  <a href="/dashboard" className="text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a href="/recommendations" className="text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recommendations</a>
                  <a href="/profile" className="text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</a>
                  {/* Admin link can be conditional based on user role */}
                  <a href="/admin" className="text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin</a>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm">
                    Login
                  </a>
                  <a href="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-sm ml-2">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <a href="/dashboard" className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                <a href="/recommendations" className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Recommendations</a>
                <a href="/profile" className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</a>
                <a href="/admin" className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Admin</a>
                <button className="w-full text-left bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg text-base mt-1">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white block font-bold py-2 px-3 rounded-lg text-base">
                  Login
                </a>
                <a href="/signup" className="bg-green-500 hover:bg-green-700 text-white block font-bold py-2 px-3 rounded-lg text-base mt-2">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

