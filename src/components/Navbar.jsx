import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import {
  FaBars,
  FaHome,
  FaGamepad,
  FaMoon,
  FaSun,
  FaUser,
  FaRegEdit,
  FaRegEye,
  FaRegBookmark,
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
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
    <div
      className={`sticky top-0 z-40 shadow-lg transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div className="navbar w-full container mx-auto px-4 lg:px-0">
        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-green-600 dark:text-green-400 font-bold flex items-center space-x-1"
          >
            <FaGamepad className="h-6 w-6" />
            <span>CHILL GAMER</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-none items-center space-x-4">
          <ul className="menu menu-horizontal px-1 text-black dark:text-white font-medium space-x-4">
            {[
              { path: "/", icon: <FaHome />, label: "HOME" },
              { path: "/reviews", icon: <FaRegEye />, label: "ALL REVIEWS" },
              { path: "/about-us", icon: <FaInfoCircle />, label: "ABOUT US" },
              {
                path: "/contact-us",
                icon: <FaPhoneAlt />,
                label: "CONTACT US",
              },
              {
                path: "/support",
                icon: <FaQuestionCircle />,
                label: "SUPPORT",
              },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "bg-green-500 text-white"
                      : ""
                  } flex items-center space-x-1 hover:bg-green-600 hover:text-white`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-4 px-2 lg:px-4 text-green-600 dark:text-green-400 text-xl"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile Menu */}
        <div className="lg:hidden flex-none z-50">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBars className="h-5 w-5" />
            </label>

            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content z-50 mt-3 p-2 shadow ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              } rounded-box w-56 space-y-2 `}
            >
              {[
                { path: "/", icon: <FaHome />, label: "HOME" },
                { path: "/reviews", icon: <FaRegEye />, label: "ALL REVIEWS" },
                {
                  path: "/about-us",
                  icon: <FaInfoCircle />,
                  label: "ABOUT US",
                },
                {
                  path: "/contact-us",
                  icon: <FaPhoneAlt />,
                  label: "CONTACT US",
                },
                {
                  path: "/support",
                  icon: <FaQuestionCircle />,
                  label: "SUPPORT",
                },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogOut}
                  className="flex items-center space-x-1 w-full text-left"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* User Dropdown */}
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              role="button"
            >
              <div className="w-8 lg:w-10 rounded-full">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt={user?.displayName || "User Avatar"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content z-50 mt-3 p-2 shadow ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              } rounded-box w-52`}
            >
              {[
                {
                  path: "/add-review",
                  icon: <FaRegEdit />,
                  label: "Add Review",
                },
                {
                  path: "/my-reviews",
                  icon: <FaRegEye />,
                  label: "My Reviews",
                },
                {
                  path: "/my-watchlist",
                  icon: <FaRegBookmark />,
                  label: "Watchlist",
                },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogOut}
                  className="flex items-center space-x-1 w-full text-left"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-ghost normal-case text-lg flex items-center space-x-1"
          >
            <FaUser />
            <span>Login</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
