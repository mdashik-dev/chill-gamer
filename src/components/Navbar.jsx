import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import {
  FaBars,
  FaHome,
  FaGamepad,
  FaPlus,
  FaHeart,
  FaSignOutAlt,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      title: "Logged Out!",
      text: "Successfully logged out",
      icon: "success",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300 sticky top-0 z-40">
      <div className="navbar w-full container mx-auto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-green-600 dark:text-green-400 font-bold flex items-center space-x-2"
          >
            <FaGamepad className="h-6 w-6" />
            <span>CHILL GAMER</span>
          </Link>
        </div>

        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 text-black dark:text-white font-medium space-x-6">
            <li>
              <Link
                className={`${
                  location.pathname === "/" && "bg-green-500 text-white"
                } flex items-center space-x-2`}
                to="/"
              >
                <FaHome />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/reviews" && "bg-green-500 text-white"
                } flex items-center space-x-2`}
                to="/reviews"
              >
                <FaGamepad />
                <span>ALL REVIEWS</span>
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/add-review" &&
                  "bg-green-500 text-white"
                } flex items-center space-x-2`}
                to="/add-review"
              >
                <FaPlus />
                <span>ADD REVIEW</span>
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/my-reviews" &&
                  "bg-green-500 text-white"
                } flex items-center space-x-2`}
                to="/my-reviews"
              >
                <FaHeart />
                <span>MY REVIEWS</span>
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/my-watchlist" &&
                  "bg-green-500 text-white"
                } flex items-center space-x-2`}
                to="/my-watchlist"
              >
                <FaHeart />
                <span>WATCHLIST</span>
              </Link>
            </li>
            {user?.uid && (
              <li onClick={handleLogOut} className="space-x-2">
                <div className="flex items-center text-[17px]">
                  <IoLogOut />
                  <a>Logout</a>
                </div>
              </li>
            )}
            {user?.uid ? (
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                  className="w-9 rounded-full mt-3 lg:mt-0"
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              </div>
            ) : (
              <li>
                <Link
                  className={`${
                    location.pathname === "/" && "bg-green-500 text-white"
                  } flex items-center space-x-2`}
                  to="/login"
                >
                  <FaUser />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <button
          onClick={toggleTheme}
          className="p-4 text-green-600 dark:text-green-400 text-xl"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <div className="lg:hidden flex-none z-50">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/" className="flex items-center space-x-2">
                  <FaHome />
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="flex items-center space-x-2">
                  <FaGamepad />
                  <span>ALL REVIEWS</span>
                </Link>
              </li>
              <li>
                <Link to="/add-review" className="flex items-center space-x-2">
                  <FaPlus />
                  <span>ADD REVIEW</span>
                </Link>
              </li>
              <li>
                <Link to="/my-reviews" className="flex items-center space-x-2">
                  <FaHeart />
                  <span>MY REVIEWS</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/my-watchlist"
                  className="flex items-center space-x-2"
                >
                  <FaHeart />
                  <span>WATCHLIST</span>
                </Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center space-x-2"
                    >
                      <FaSignOutAlt />

                      <span>Logout</span>
                    </button>
                  </li>
                  <li>
                    <div className="flex gap-2">
                      <img
                        className="w-9 object-cover rounded-full"
                        src={user?.photoURL}
                        alt="User Avatar"
                      />
                      <p className="text-lg font-extrabold">
                        {user?.displayName}
                      </p>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="flex items-center space-x-2">
                    <FaUser />
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
