import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-lg">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-green-600 font-bold flex items-center space-x-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/controller.png"
            alt="Logo"
            className="h-6"
          />
          <span>CHILL GAMER</span>
        </Link>
        <h1>Hello world</h1>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black font-medium space-x-6">
          <li>
            <Link to="/" className="text-orange-500">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/reviews">ALL REVIEWS</Link>
          </li>
          <li>
            <Link to="/addReview">ADD REVIEW</Link>
          </li>
          <li>
            <Link to="/myReviews">MY REVIEWS</Link>
          </li>
          <li>
            <Link to="/myWatchlist">WATCHLIST</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 11V9a4 4 0 0111.09-1.68M17 11v2m0 6a9 9 0 01-9 9 9 9 0 110-18 9 9 0 019 9z"
            />
          </svg>
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src="https://via.placeholder.com/50" alt="User Avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
