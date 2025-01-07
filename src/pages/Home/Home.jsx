import React from "react";
import Banner from "./Banner";
import HighestRatedGames from "./HighestRatedGames";
import TrendingGames from "./TrendingGames";
import LatestReviews from "./LatestReviews";
import { Helmet } from "react-helmet-async";
import TopGenres from "./TopGenres";
import GamingNews from "./GamingNews";
import ExclusiveOffers from "./ExclusiveOffers";
import UpcomingGames from "./UpcomingGames";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Chill Gamer</title>
      </Helmet>
      <Banner />
      <HighestRatedGames />
      <TrendingGames />
      <TopGenres />
      <ExclusiveOffers />
      <UpcomingGames />
      <GamingNews />
      {/* <LatestReviews /> */}
    </div>
  );
}

export default Home;
