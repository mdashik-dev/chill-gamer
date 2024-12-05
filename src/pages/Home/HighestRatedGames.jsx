import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HighestRatedGames = () => {
  const [games, setgames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://chill-gamer.vercel.app/reviews");
    const jsonData = await response.json();
    const data = JSON.parse(jsonData);

    if (data?.length > 0) {
      const sortedByRating = data
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 6);

      setgames(sortedByRating);
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          <Typewriter
            words={[
              "Highest Rated Games",
              "Highest Rated Games",
              "Highest Rated Games",
              "Highest Rated Games",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
          />
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-pulse"
                >
                  <div className="h-48 w-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded mb-2"></div>
                    <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                    <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games?.map((game) => (
              <div
                key={game?.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
                  <img
                    src={game?.gameCover}
                    alt={game?.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {game?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {game?.genre}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-300 text-yellow-800 dark:text-yellow-300 text-sm font-semibold px-2 py-1 rounded">
                      ⭐ {game?.rating}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {game?.year}
                    </span>
                  </div>
                  <Link to={`/review/${game._id}`}>
                    <button className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded hover:bg-green-700 dark:hover:bg-green-800 transition">
                      Explore Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HighestRatedGames;
