import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);

  const loaderData = useLoaderData();

  useEffect(() => {
    const data = JSON.parse(loaderData);

    if (data?.length > 0) {
      setReview(data[0]);
    }
  }, []);

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
      gameId: review?._id,
      title: review?.title,
      coverImage: review?.gameCover,
      genre: review?.genre,
      rating: review?.rating,
      addedBy: user.email,
      username: user.displayName,
      addedOn: new Date(),
    };

    try {
      fetch(`https://chill-gamer.vercel.app/add-watchlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watchlistData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.acknowledged) {
            Swal.fire(
              "Added!",
              "The game has been added to your watchlist.",
              "success"
            );
          }
        });
    } catch (error) {
      Swal.fire(
        "Error",
        "Failed to add to the watchlist. Please try again.",
        "error"
      );
    }
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
              <strong>Rating:</strong> {review?.rating}/10
            </p>
            <p>
              <strong>Genre:</strong> {review?.genre}
            </p>
            <p>
              <strong>Reviewer:</strong> {review?.name}
            </p>
            <p>
              <strong>Email:</strong> {review?.email}
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
