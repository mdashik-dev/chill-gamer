import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    gameCover: "",
    title: "",
    description: "",
    rating: "",
    year: "",
    genre: "",
    email: user?.email || "",
    name: user?.displayName || "",
  });

  const genres = ["Action", "RPG", "Adventure", "Shooter", "Puzzle", "Sports"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.gameCover || !formData.title || !formData.description) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Form",
        text: "Please fill in all required fields.",
      });
      return;
    }

    try {
      fetch(`https://chill-gamer.vercel.app/add-review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.acknowledged) {
            Swal.fire({
              icon: "success",
              title: "Review Added",
              text: "Your review has been successfully added.",
            });
            setFormData({
              gameCover: "",
              title: "",
              description: "",
              rating: "",
              year: "",
              genre: "",
              email: user?.email,
              name: user?.displayName,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Failed to add review. Please try again.",
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while submitting the review.",
      });
    }
  };

  return (
    <div className="w-full py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-md shadow-md transition-colors duration-300">
        <Helmet>
          <title>Add Review || Chill Gamer</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Add New Review
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Game Cover Image URL
            </label>
            <input
              type="url"
              name="gameCover"
              value={formData.gameCover}
              onChange={handleChange}
              className="input input-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="Enter game cover image URL"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Game Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="Enter game title"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Review Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              rows="4"
              placeholder="Write your review here"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="input input-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              min="1"
              max="10"
              placeholder="Enter rating (1-10)"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Publishing Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="input input-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="Enter publishing year"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              Genre
            </label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="select select-bordered bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              required
            >
              <option value="" disabled>
                Select genre
              </option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="input input-bordered bg-gray-200 dark:bg-gray-700 cursor-not-allowed text-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-medium text-gray-800 dark:text-gray-300">
              User Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="input input-bordered bg-gray-200 dark:bg-gray-700 cursor-not-allowed text-gray-800 dark:text-gray-100"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="btn bg-green-500 dark:bg-green-600 text-white w-full hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
