import React from "react";
import Banner from "./Banner";
import HighestRatedGames from "./HighestRatedGames";
import TrendingGames from "./TrendingGames";
import LatestReviews from "./LatestReviews";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Chill Gamer</title>
      </Helmet>
      <Banner />
      <HighestRatedGames />
      <TrendingGames />
      <LatestReviews />
    </div>
  );
}

export default Home;
