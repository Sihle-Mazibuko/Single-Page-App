// Home.jsx

import React from "react";
import ArtistProfile from "../ArtistProfile";
import MusicCard from "../MusicCard";
import "./Page Components/Home.css"; // Adjust the path as per your project structure

const Home = () => {
  return (
    <section className="home-container">
      <div className="background-notes">
        <div className="note note1">♭</div>
        <div className="note note2">♫</div>
        <div className="note note3">♪</div>
        <div className="note note4">♬</div>
        <div className="note note5">♩</div>
      </div>
      <MusicCard />
      <ArtistProfile />
    </section>
  );
};

export default Home;
