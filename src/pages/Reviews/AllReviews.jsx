import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

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
    {
      _id: "3",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+3",
      title: "Zombie Survival",
      reviewDescription:
        "A survival horror game that keeps you on the edge of your seat.",
      rating: 8.9,
      year: 2021,
      genre: "Horror",
      userEmail: "testuser3@example.com",
      userName: "Test User 3",
    },
    {
      _id: "4",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+4",
      title: "Fantasy Realms",
      reviewDescription:
        "An open-world fantasy game with captivating lore and immersive gameplay.",
      rating: 9.8,
      year: 2024,
      genre: "Fantasy",
      userEmail: "testuser4@example.com",
      userName: "Test User 4",
    },
    {
      _id: "5",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+5",
      title: "Battle Royale X",
      reviewDescription:
        "An action-packed battle royale experience with a diverse arsenal of weapons.",
      rating: 8.5,
      year: 2023,
      genre: "Action",
      userEmail: "testuser5@example.com",
      userName: "Test User 5",
    },
    {
      _id: "6",
      gameCover: "https://via.placeholder.com/300x400?text=Game+Cover+6",
      title: "Adventure Island",
      reviewDescription:
        "A heartwarming adventure game with charming characters and puzzles.",
      rating: 9.2,
      year: 2020,
      genre: "Adventure",
      userEmail: "testuser6@example.com",
      userName: "Test User 6",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">All Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fakeReviews.map((review) => (
          <div
            key={review._id}
            className="card bg-base-200 shadow-md rounded-md overflow-hidden"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={review.gameCover}
                alt={review.title}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-lg font-bold">{review.title}</h2>
              <p className="text-sm text-gray-500">
                <strong>Rating:</strong> {review.rating}/10
              </p>
              <p className="text-sm text-gray-500">
                <strong>Genre:</strong> {review.genre}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Year:</strong> {review.year}
              </p>
            </div>

            <div className="card-actions justify-center p-4">
              <Link
                to={`/review/${review._id}`}
                className="btn bg-green-500 text-white"
              >
                Explore Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
