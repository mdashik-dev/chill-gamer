import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../hook/useAuth";
import UpdateModal from "./UpdateModal";
import { useLoaderData } from "react-router-dom";
const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);
  const loaderData = useLoaderData();

  useEffect(() => {
    const data = JSON.parse(loaderData);
    if (data?.length > 0) {
      setLoading(false);
      setReviews(data);
    }
  }, [loaderData]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          fetch(`https://chill-gamer.vercel.app/reviews/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((response) => {
              if (response?.deletedCount === 1) {
                setReviews((prev) =>
                  prev.filter((review) => review._id !== id)
                );
                Swal.fire(
                  "Deleted!",
                  "Your review has been deleted.",
                  "success"
                );
              }
            })
            .catch(() => {
              Swal.fire("Error!", "Failed to delete the review.", "error");
            });
        } catch (error) {
          console.error("Error deleting review:", error);
        }
      }
    });
  };

  const handleUpdateClick = (review) => {
    setSelectedReview(review);
  };

  useEffect(() => {
    if (selectedReview?._id) {
      document.getElementById("update-modal").checked = true;
    }
  }, [selectedReview]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">My Reviews</h1>
      {loading ? (
        <div className="flex justify-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
        </div>
      ) : reviews?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white dark:bg-gray-800">
            <thead>
              <tr>
                <th>SN</th>
                <th>Game Title</th>
                <th>Rating</th>
                <th>Genre</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews?.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.title}</td>
                  <td>{review.rating}</td>
                  <td>{review.genre}</td>
                  <td className="flex justify-center">
                    <button
                      className="btn btn-sm btn-warning mr-2"
                      onClick={() => handleUpdateClick(review)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No reviews found.</p>
      )}

      {selectedReview && (
        <UpdateModal
          review={selectedReview}
          reviews={reviews}
          setReviews={setReviews}
        />
      )}
    </div>
  );
};

export default MyReviews;
