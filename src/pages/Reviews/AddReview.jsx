import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

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

  // console.log(import.meta.env.MONGODBURI);

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
      fetch(`http://localhost:3000/add-review`, {
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
    <div className="w-full bg-base-200 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Review</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Game Cover */}
          <div className="form-control">
            <label className="label font-medium">Game Cover Image URL</label>
            <input
              type="url"
              name="gameCover"
              value={formData.gameCover}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Enter game cover image URL"
              required
            />
          </div>

          {/* Game Title */}
          <div className="form-control">
            <label className="label font-medium">Game Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Enter game title"
              required
            />
          </div>

          {/* Review Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-medium">Review Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered"
              rows="4"
              placeholder="Write your review here"
              required
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="input input-bordered"
              min="1"
              max="10"
              placeholder="Enter rating (1-10)"
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="form-control">
            <label className="label font-medium">Publishing Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Enter publishing year"
              required
            />
          </div>

          {/* Genre */}
          <div className="form-control">
            <label className="label font-medium">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="select select-bordered"
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

          {/* User Name */}
          <div className="form-control">
            <label className="label font-medium">User Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="input input-bordered bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* User Email */}
          <div className="form-control md:col-span-2">
            <label className="label font-medium">User Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="input input-bordered bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="btn bg-green-500 text-white w-full"
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
