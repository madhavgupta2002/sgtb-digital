import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from './icons';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { isDark, toggle } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/src/components/icons/logo.png"
              alt="SGTB Khalsa College"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Digital Empowerment VAC
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                S.G.T.B. Khalsa College
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/upload" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Upload
            </Link>
            <Link to="/credits" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Credits
            </Link>
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? <SunIcon className="w-5 h-5 text-gray-300" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}