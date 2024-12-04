import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../hook/useAuth";

const UpdateModal = ({ review, reviews, setReviews }) => {
  const [formData, setFormData] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    setFormData({
      title: review?.title,
      description: review?.description,
      rating: review?.rating,
      year: review?.year,
      genre: review?.genre,
    });
  }, [review]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onUpdate(formData);

    fetch(`http://localhost:3000/update-review/${review?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.result?.modifiedCount === 1) {
          document.getElementById("update-modal").checked = false;

          const filtered = reviews?.filter((rev) => rev._id !== review?._id);

          setReviews([data?.updatedData[0], ...filtered]);
          Swal.fire({
            title: "Updated!",
            text: "Review updated successfully",
            icon: "success",
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4">Update Your Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Game Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Rating (1-10)</span>
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                min="1"
                max="10"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Publishing Year</span>
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                className="select select-bordered w-full"
                required
              >
                <option disabled>Select Genre</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Horror">Horror</option>
                <option value="Shooter">Shooter</option>
              </select>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn bg-green-500 text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
