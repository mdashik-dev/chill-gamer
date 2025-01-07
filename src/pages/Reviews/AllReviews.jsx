import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
    } else if (option === "title-asc") {
      sortedReviews.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "title-desc") {
      sortedReviews.sort((a, b) => b.title.localeCompare(a.title));
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

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = reviews.filter((review) =>
      review.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredReviews(filtered);
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

  // Loading Skeleton
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Loading Reviews...
        </h1>
        {/* Skeleton Content */}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>All Reviews || Chill Gamer</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-10">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          Explore Game Reviews
        </h1>
        <p className="text-lg text-center text-white mb-6">
          Discover the latest trending games and explore the genres you love.
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for a game..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full py-3 pl-5 pr-10 rounded-lg shadow-lg text-gray-700 bg-white border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
            <FiSearch
              className="absolute right-3 top-3 text-gray-500 dark:text-gray-400"
              size={24}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex overflow-x-auto gap-3 py-4 px-6 ">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreFilter(genre)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedGenre === genre
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        {/* Sort Dropdown */}
        <div className="flex justify-end p-4">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn bg-green-500 text-white flex items-center"
            >
              Sort By
              <FiChevronDown className="ml-2" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 z-30"
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
              <li>
                <button onClick={() => handleSort("title-asc")}>
                  Title (A-Z)
                </button>
              </li>
              <li>
                <button onClick={() => handleSort("title-desc")}>
                  Title (Z-A)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {filteredReviews.length === 0 && (
          <div className="flex items-center justify-center min-h-44">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              No reviews found for your search or filter. Please try again.
            </h2>
          </div>
        )}
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
          {filteredReviews?.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={review.gameCover}
                  alt={review.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                  {review.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Rating:</strong> {review.rating}/10
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Genre:</strong> {review.genre}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Year:</strong> {review.year}
                </p>
              </div>

              <div className="p-4">
                <Link
                  to={`/review/${review._id}`}
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
