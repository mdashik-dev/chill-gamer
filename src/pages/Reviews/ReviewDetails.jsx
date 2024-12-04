import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  // const [review, setReview] = useState(null);

  useEffect(() => {
    fetchReviewDetails(id);
  }, [id]);

  const fetchReviewDetails = async (id) => {};

  const handleAddToWatchlist = async () => {
    if (!user) {
      Swal.fire(
        "Error",
        "You need to be logged in to add to the watchlist.",
        "error"
      );
      return;
    }

    const watchlistData = {
      gameId: review?.id,
      title: review?.title,
      coverImage: review?.coverImage,
      genre: review?.genre,
      rating: review?.rating,
      addedBy: user.email,
      username: user.displayName,
    };

    try {
      Swal.fire(
        "Added!",
        "The game has been added to your watchlist.",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Error",
        "Failed to add to the watchlist. Please try again.",
        "error"
      );
    }
  };

  const review = {
    _id: "1",
    gameCover:
      "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
    title: "Epic Quest",
    reviewDescription:
      "A thrilling RPG with breathtaking visuals and an engaging storyline.",
    rating: 9.5,
    year: 2023,
    genre: "RPG",
    userEmail: "testuser1@example.com",
    userName: "Test User 1",
  };

  if (!review) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">{review?.title}</h2>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <img
            src={review?.gameCover}
            alt={review?.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-2/3 lg:ml-6">
          <h3 className="text-2xl font-semibold mb-2">Review Description</h3>
          <p className="text-gray-700 mb-4">{review?.reviewDescription}</p>

          <div className="mb-4">
            <p>
              <strong>Rating:</strong> {review?.rating}/5
            </p>
            <p>
              <strong>Genre:</strong> {review?.genre}
            </p>
            <p>
              <strong>Reviewer:</strong> {review?.reviewerName}
            </p>
            <p>
              <strong>Email:</strong> {review?.reviewerEmail}
            </p>
          </div>

          <button
            onClick={handleAddToWatchlist}
            className="btn bg-green-500 text-white w-full lg:w-auto"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
