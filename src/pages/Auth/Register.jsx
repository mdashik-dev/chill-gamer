import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
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

  const { registerUserWithEmailAndPass, loginWithGoogle, user } =
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
      Swal.fire(
        "Error",
        "Please fix the password error before submitting.",
        "error"
      );
      return;
    }

    try {
      await registerUserWithEmailAndPass(
        formData.email,
        formData.password,
        formData.name,
        formData.photoURL
      );
      e.target.reset();
      setFormData({
        name: "",
        email: "",
        photoURL: "",
        password: "",
      });
    } catch (error) {}
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Success", "Successfully registered with Google!", "success");
    } catch (error) {
      Swal.fire(
        "Error",
        error.message || "Google registration failed. Please try again.",
        "error"
      );
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.uid) {
      if (location?.state?.to) {
        navigate(location.state.to);
      } else {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 shadow-sm bg-white dark:bg-gray-800 rounded-lg">
        <Helmet>
          <title>Register || Discount Pro</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-900 dark:text-white">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
              required
            />
          </div>

          <div className="form-control mt-4">
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
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-900"
            />
          </div>

          <div className="form-control mt-4 relative">
            <label className="label">
              <span className="label-text text-gray-900 dark:text-white">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`input input-bordered w-full bg-gray-100 dark:bg-gray-900 ${
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
                <IoEyeOffSharp className="text-2xl mt-8 text-gray-900 dark:text-white" />
              ) : (
                <FaEye className="text-2xl mt-8 text-gray-900 dark:text-white" />
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

        <div className="divider text-gray-900 dark:text-white">OR</div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full"
          >
            <FaGoogle className="mr-24 text-gray-900 dark:text-white" />{" "}
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm mt-4 text-gray-900 dark:text-white">
          Already have an account?{" "}
          <Link to="/login" className="link text-green-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
