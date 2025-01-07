import { FaClock } from "react-icons/fa";

const GamingNews = () => {
  const news = [
    {
      id: 1,
      title: "Elder Scrolls VI Release Date Confirmed",
      image:
        "https://cdn.mos.cms.futurecdn.net/cDWLNQfZ79PLmzkRetYSKe-1200-80.jpg",
      description:
        "Bethesda has finally confirmed the release date for the much-awaited Elder Scrolls VI. Get ready for an epic adventure!",
      date: "Jan 5, 2025",
    },
    {
      id: 2,
      title: "Cyberpunk 2077: Phantom Liberty Expansion",
      image:
        "https://staticg.sportskeeda.com/editor/2025/01/bb83f-17360217382027-1920.jpg",
      description:
        "CD Projekt Red is set to release a massive expansion for Cyberpunk 2077, bringing new quests, weapons, and locations.",
      date: "Dec 28, 2024",
    },
    {
      id: 3,
      title: "New eSports Tournament Announced",
      image:
        "https://esportsinsider.com/wp-content/uploads/2024/05/EWC_PRImage_Final-large.png",
      description:
        "The biggest eSports event of the year is coming soon, with a $5M prize pool and top teams competing from around the globe.",
      date: "Jan 2, 2025",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900  py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Gaming News & Updates
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Stay up-to-date with the latest news and trends in the gaming world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{item.date}</span>
                  </div>
                  <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingNews;
