import React from "react";

const TrendingGames = () => {
  const trendingGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      coverImage:
        "https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg",
      genre: "RPG",
      players: "1M+ Players",
    },
    {
      id: 2,
      title: "Fortnite",
      coverImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202410/2918/95953c3726f54fba5e6cf53f97b10bcf99e0d43581ae2c55.jpg",
      genre: "Battle Royale",
      players: "10M+ Players",
    },
    {
      id: 3,
      title: "Minecraft",
      coverImage:
        "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70070000016597/0a33bcaba879403460afe2ff2aafaaefeede964e0fc11a430f71077867cc87f1",
      genre: "Sandbox",
      players: "5M+ Players",
    },
  ];

  return (
    <section className="container mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Trending Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingGames.map((game) => (
          <div
            key={game.id}
            className="bg-gray-100 text-black rounded-lg shadow-inner p-4"
          >
            <img
              src={game.coverImage}
              alt={game.title}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl font-bold">{game.title}</h3>
            <p className="text-sm text-gray-400">{game.genre}</p>
            <p className="mt-2 font-medium">{game.players}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;
