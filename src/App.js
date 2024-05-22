import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Designs from "./Components/Pages/Designs";
import Theory from "./Components/Pages/Theory";
import Art from "./Components/Pages/Art";
import API from "./Components/Pages/API";
import MusicCard from "./Components/MusicCard";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/art" element={<Art />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/api" element={<API />} />
          </Routes>
        </main>

        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
