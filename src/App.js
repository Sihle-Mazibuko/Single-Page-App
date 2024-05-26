import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Designs from "./Components/Pages/Designs";
import Theory from "./Components/Pages/Theory";
import Art from "./Components/Pages/Art";
import API from "./Components/Pages/API";
import NotFound from "./Components/Pages/NotFound";
import "./App.css";

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
            {/* this is a purposeful mispelling of the api page so the Catch-404 page can be visualized */}
            <Route path="/apii" element={<API />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
