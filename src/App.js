import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import MusicCard from "./Components/MusicCard";
import ArtistProfile from "./Components/ArtistProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ArtistProfile />
      <MusicCard image="https://via.placeholder.com/150" title="Album title" />
    </div>
  );
}

export default App;
