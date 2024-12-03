import React from "react";
import Banner from "./Banner";
import HighestRatedGames from "./HighestRatedGames";
import TrendingGames from "./TrendingGames";
import LatestReviews from "./LatestReviews";

function Home() {
  return (
    <div>
      <Banner />
      <HighestRatedGames />
      <TrendingGames />
      <LatestReviews />
    </div>
  );
}

export default Home;
