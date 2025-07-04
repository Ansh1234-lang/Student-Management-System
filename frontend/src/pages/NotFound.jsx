import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-700 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
