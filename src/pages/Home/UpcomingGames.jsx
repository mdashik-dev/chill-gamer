import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpcomingGames = () => {
  const games = [
    {
      id: 1,
      title: "Starfield",
      releaseDate: "Feb 20, 2025",
      image:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1727384525",
    },
    {
      id: 2,
      title: "Hogwarts Legacy 2",
      releaseDate: "Mar 15, 2025",
      image: "https://i.ytimg.com/vi/6OYYgA5KmUM/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Final Fantasy XVI",
      releaseDate: "Apr 5, 2025",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*lmWJK9xoLpDusL7CjobnDQ.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? games.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === games.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-white dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Upcoming Games
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Mark your calendar for the most anticipated releases.
        </p>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={`${
                  index === current ? "block" : "hidden"
                } transition-opacity duration-700`}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded">
                  <h3 className="text-2xl font-bold">{game.title}</h3>
                  <p className="text-sm">Release Date: {game.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
