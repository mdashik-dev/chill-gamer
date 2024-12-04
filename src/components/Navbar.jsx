import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      title: "Logged Out!",
      text: "Successfully logged out",
      icon: "success",
    });
  };
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
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black font-medium space-x-6">
          <li>
            <Link
              className={`${location.pathname === "/" && "bg-green-500 text-white"}`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/reviews" && "bg-green-500 text-white"
              }`}
              to="/reviews"
            >
              ALL REVIEWS
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/add-review" && "bg-green-500 text-white"
              }`}
              to="/add-review"
            >
              ADD REVIEW
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/my-reviews" && "bg-green-500 text-white"
              }`}
              to="/my-reviews"
            >
              MY REVIEWS
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/my-watchlist" && "bg-green-500 text-white"
              }`}
              to="/my-watchlist"
            >
              WATCHLIST
            </Link>
          </li>
          {user?.uid && (
            <>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </>
          )}
          {user?.uid ? (
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img
                className="w-9 rounded-full mt-3 lg:mt-0"
                src={user?.photoURL}
              />
            </div>
          ) : (
            <li>
              <Link
                className={`${location.pathname === "/" && "bg-green-500 text-white"}`}
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
