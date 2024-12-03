import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerUserWithEmailAndPass, loginWithGoogle } =
    useContext(AuthContext);

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      const error = validatePassword(value);
      setPasswordError(error);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError) {
      toast.error("Please fix the password error before submitting.");
      return;
    }

    try {
      await registerUserWithEmailAndPass(
        formData.email,
        formData.password,
        formData.name,
        formData.photoURL
      );
      toast.success("Account created successfully!");
      e.target.reset();
      setFormData({
        name: "",
        email: "",
        photoURL: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      toast.success("Successfully registered with Google!");
    } catch (error) {
      toast.error(
        error.message || "Google registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white rounded-lg">
        <Helmet>
          <title>Register || Discount Pro</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`input input-bordered w-full ${
                passwordError ? "border-red-500" : ""
              }`}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOffSharp className="text-2xl mt-8" />
              ) : (
                <FaEye className="text-2xl mt-8" />
              )}
            </button>
          </div>

          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 text-white w-full"
              disabled={!!passwordError}
            >
              Register
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full"
          >
            <FaGoogle className="mr-24" /> Continue with Google
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login here
          </Link>
        </p>
      </div>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Register;
