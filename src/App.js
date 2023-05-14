import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Youtube from "./components/Youtube";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Youtube />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
