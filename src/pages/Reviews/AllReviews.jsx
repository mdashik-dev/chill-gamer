import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const loaderData = useLoaderData();

  useEffect(() => {
    const data = JSON.parse(loaderData);

    if (data?.length > 0) {
      setLoading(false);
      setReviews(data);
      setFilteredReviews(data);
    }
  }, [loaderData]);

  const handleSort = (option) => {
    let sortedReviews = [...filteredReviews];

    if (option === "rating-asc") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
    } else if (option === "rating-desc") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (option === "year-asc") {
      sortedReviews.sort((a, b) => a.year - b.year);
    } else if (option === "year-desc") {
      sortedReviews.sort((a, b) => b.year - a.year);
    }

    setFilteredReviews(sortedReviews);
  };

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);

    if (genre === "All") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.genre === genre);
      setFilteredReviews(filtered);
    }
  };

  const genres = [
    "All",
    "RPG",
    "Racing",
    "Horror",
    "Fantasy",
    "Action",
    "Adventure",
    "Shooter",
    "Puzzle",
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

      <div className="flex justify-between items-center mb-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-green-500 text-white m-1">
            {selectedGenre ? selectedGenre : "Filter by Genre"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-gray-200 dark:bg-gray-700 rounded-box w-52 z-30"
          >
            {genres.map((genre) => (
              <li key={genre}>
                <button onClick={() => handleGenreFilter(genre)}>
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn bg-green-500 text-white m-1">
            Sort By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-gray-200 dark:bg-gray-700 rounded-box w-52 z-30"
          >
            <li>
              <button onClick={() => handleSort("rating-asc")}>
                Rating (Low to High)
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("rating-desc")}>
                Rating (High to Low)
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("year-asc")}>
                Year (Oldest First)
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("year-desc")}>
                Year (Newest First)
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredReviews?.map((review) => (
          <div
            key={review._id}
            className="card bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Rating:</strong> {review.rating}/10
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Genre:</strong> {review.genre}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Year:</strong> {review.year}
              </p>
            </div>

            <div className="card-actions justify-center p-4">
              <Link
                to={`/review/${review._id}`}
                className="w-full py-2 text-center rounded-lg bg-green-500 text-white"
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
