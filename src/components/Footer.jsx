import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
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
            Available Platforms
          </h3>
          <ul className="space-y-2">
            <li>PlayStation</li>
            <li>XBOX</li>
            <li>PC</li>
            <li>Steam</li>
            <li>Origin</li>
          </ul>
        </div>

        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                All Reviews
              </a>
            </li>
            <li>
              <a
                href="/addReview"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Add Review
              </a>
            </li>
            <li>
              <a
                href="/myReviews"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                My Reviews
              </a>
            </li>
            <li>
              <a
                href="/myWatchlist"
                className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Watchlist
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
