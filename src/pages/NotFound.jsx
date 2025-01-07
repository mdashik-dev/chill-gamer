import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaExclamationTriangle } from "react-icons/fa"; // Icon for 404

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center text-center py-12 px-4">
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>

      <div className="space-y-6">
        <div className="text-red-600 text-6xl">
          <FaExclamationTriangle className="inline-block mr-2" />
          <span className="font-extrabold">404</span>
        </div>
        <p className="text-2xl text-gray-800 dark:text-white font-semibold">
          Page Not Found
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Oops! We couldn't find the page you were looking for. <br />
          The page might have been removed, or you may have typed the URL incorrectly.
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleGoHome}
          className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
