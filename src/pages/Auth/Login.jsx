import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { user, loginWithGoogle, loginWithEmailAndPass } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user?.uid) {
      if (location?.state?.to) {
        navigate(location.state.to);
      } else {
        navigate("/");
      }
    }
  }, [user, navigate, location?.state?.to]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmailAndPass(formData.email, formData.password);
      Swal.fire("Success", "You have logged in successfully!", "success");
      e.target.reset();
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      Swal.fire(
        "Error",
        error.message || "Login failed. Please try again.",
        "error"
      );
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Swal.fire(
        "Success",
        "You have logged in with Google successfully!",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Error",
        error.message || "Google login failed. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white dark:bg-gray-800 rounded-lg">
        <Helmet>
          <title>Login || Chill Gamer</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 dark:text-white">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-gray-900 dark:text-white">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
              required
            />
          </div>

          <div className="text-right mt-2">
            <Link to="/reset-password" className="link link-hover text-sm">
              Forgot your password?
            </Link>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white w-full"
            >
              Login
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FaGoogle className="mr-24" /> Continue with Google
          </button>
        </div>

        <p className="text-center text-sm mt-4 text-gray-900 dark:text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="link text-green-600">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
