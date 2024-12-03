import React from "react";

const HighestRatedGames = () => {
  const games = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      coverImage: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
      genre: "Adventure",
      rating: 9.8,
      year: 2017,
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      coverImage: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_UE_V01-2560x1440-c539ce6125af9d99a0a225e024121f48.jpg?resize=1&w=480&h=270&quality=medium",
      genre: "Action-Adventure",
      rating: 9.7,
      year: 2018,
    },
    {
      id: 3,
      title: "The Witcher 3: Wild Hunt",
      coverImage: "https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png",
      genre: "RPG",
      rating: 9.6,
      year: 2015,
    },
    {
      id: 4,
      title: "God of War",
      coverImage: "https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg?w=1024",
      genre: "Action",
      rating: 9.5,
      year: 2018,
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      coverImage: "https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg",
      genre: "RPG",
      rating: 8.7,
      year: 2020,
    },
    {
      id: 6,
      title: "Elden Ring",
      coverImage: "https://i.ytimg.com/vi/E3Huy2cdih0/sddefault.jpg",
      genre: "Action RPG",
      rating: 9.9,
      year: 2022,
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Highest Rated Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games?.map((game) => (
            <div
              key={game?.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Game Cover Image */}
              <div className="h-48 w-full bg-gray-200">
                <img
                  src={game?.coverImage}
                  alt={game?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Game Information */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {game?.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{game?.genre}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-300 text-yellow-800 text-sm font-semibold px-2 py-1 rounded">
                    ⭐ {game?.rating}
                  </span>
                  <span className="text-gray-500 text-sm">{game?.year}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighestRatedGames;
