import "./App.css";
import NavBar from "./Components/NavBar";
import ArtistProfile from "./Components/ArtistProfile";
import MusicCard from "./Components/MusicCard";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <ArtistProfile />
        <MusicCard />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
