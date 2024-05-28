import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing routing components from react-router-dom
import NavBar from "./Components/NavBar"; // Importing the navigation bar component
import Home from "./Components/Pages/Home"; // Importing the Home page component
import Designs from "./Components/Pages/Designs"; // Importing the Designs page component
import Theory from "./Components/Pages/Theory"; // Importing the Theory page component
import Art from "./Components/Pages/Art"; // Importing the Art page component
import NotFound from "./Components/Pages/NotFound"; // Importing the NotFound page component
import "./App.css"; // Importing CSS styles
import Essay from "./Components/Pages/Essay"; // Importing the Essay page component

function App() {
  return (
    // Router component to manage navigation
    <Router basename="">
      {/* Main App container */}
      <div className="App">
        {/* Header section containing the navigation bar */}
        <header>
          <NavBar />
        </header>
        {/* Main content section */}
        <main>
          {/* Routes component to define different routes */}
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the Designs page */}
            <Route path="/designs" element={<Designs />} />
            {/* Route for the Art page */}
            <Route path="/art" element={<Art />} />
            {/* Route for the Theory page */}
            <Route path="/theory" element={<Theory />} />
            {/* Route for the Essay page */}
            <Route path="/essay" element={<Essay />} />
            {/* Route for any unknown paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Footer section (if any) */}
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
