import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Catches from "./components/Catches";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <Work />
      <Contact />
      <Catches />
    </div>
  );
}

export default App;
