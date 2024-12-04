import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../hook/useAuth";
import UpdateModal from "./UpdateModal";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/reviews?email=${user.email}`
        );
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user.email) {
      fetchUserReviews();
    }
  }, [user.email]);

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
          const response = await fetch(`http://localhost:8000/reviews/${id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            setReviews((prev) => prev.filter((review) => review._id !== id));
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Failed to delete the review.", "error");
          }
        } catch (error) {
          console.error("Error deleting review:", error);
        }
      }
    });
  };

  const fakeReviews = [
    {
      _id: "1",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+1",
      title: "Epic Quest",
      reviewDescription:
        "A thrilling RPG with breathtaking visuals and an engaging storyline.",
      rating: 9.5,
      year: 2023,
      genre: "RPG",
      userEmail: "testuser1@example.com",
      userName: "Test User 1",
    },
    {
      _id: "2",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+2",
      title: "Racing Legends",
      reviewDescription:
        "An adrenaline-pumping racing game with stunning graphics and smooth controls.",
      rating: 8.7,
      year: 2022,
      genre: "Racing",
      userEmail: "testuser2@example.com",
      userName: "Test User 2",
    },
  ];

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
      ) : fakeReviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white">
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
              {fakeReviews.map((review, index) => (
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
          onUpdate={(updatedReview) => {
            onUpdate(selectedReview.id, updatedReview);
            setSelectedReview(null);
          }}
        />
      )}
    </div>
  );
};

export default MyReviews;
