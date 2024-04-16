import React, { useState } from 'react';
import './App.css'; // Ensure this file exists and contains the necessary Tailwind CSS setup

function LoginForm() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`transition duration-500 p-28 ease-in-out ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="flex justify-end p-4">
          <button
            type="button"
            id="mode-toggle"
            className="focus:outline-none"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg
                id="theme-toggle-dark-icon"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m8-10h2m-2 4h2M4 8H2m2 4H2m16.362-12.362a9 9 0 0 1 0 12.724m0 0a9 9 0 0 1-12.724 0m0 0a9 9 0 0 1 0-12.724"
                />
              </svg>
            ) : (
              <svg
                id="theme-toggle-light-icon"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`max-w-md mx-auto mt-10 shadow-lg rounded-lg p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <form>
            <h2 className="text-2xl font-semibold mb-6">Log in</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-bold mb-2">
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`}
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log in
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center mb-6">
              <span className="text-gray-700">OR</span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
