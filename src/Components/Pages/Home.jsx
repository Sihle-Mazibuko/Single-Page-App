import React from "react";
import ArtistProfile from "../ArtistProfile";
import MusicCard from "../MusicCard";
import "./Page Components/Home.css";

const Home = () => {
  return (
    <section>
      <MusicCard />
      <ArtistProfile />
    </section>
  );
};

export default Home;
