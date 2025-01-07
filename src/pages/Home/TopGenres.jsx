import { FaGamepad, FaDragon, FaCar, FaPuzzlePiece, FaUserNinja } from "react-icons/fa";

const TopGenres = () => {
  const genres = [
    {
      id: 1,
      name: "Role-Playing Games (RPG)",
      icon: <FaDragon className="text-4xl text-purple-600 dark:text-purple-400" />,
      description: "Embark on epic quests and explore immersive worlds.",
    },
    {
      id: 2,
      name: "Action",
      icon: <FaUserNinja className="text-4xl text-red-600 dark:text-red-400" />,
      description: "Fast-paced gameplay with intense combat.",
    },
    {
      id: 3,
      name: "Racing",
      icon: <FaCar className="text-4xl text-blue-600 dark:text-blue-400" />,
      description: "High-speed thrills and adrenaline-pumping races.",
    },
    {
      id: 4,
      name: "Puzzle",
      icon: <FaPuzzlePiece className="text-4xl text-green-600 dark:text-green-400" />,
      description: "Challenge your mind with creative and logical puzzles.",
    },
    {
      id: 5,
      name: "Casual",
      icon: <FaGamepad className="text-4xl text-yellow-600 dark:text-yellow-400" />,
      description: "Relaxing and fun games for everyone.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Explore Top Genres
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Find games from your favorite genres and dive into a world of adventure, action, and fun.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {genre.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
                {genre.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                {genre.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenres;
