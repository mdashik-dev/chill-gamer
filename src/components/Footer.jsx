import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/controller.png"
              alt="Chill Gamer Logo"
              className="w-8 h-8 mr-2"
            />
            <h1 className="text-black dark:text-white text-xl font-bold">
              CHILL GAMER
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 Chill Gamer. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                All Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/add-review"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Add Review
              </Link>
            </li>
            <li>
              <Link
                to="/my-reviews"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                My Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/my-watchlist"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Watchlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
