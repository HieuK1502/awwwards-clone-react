import React from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Nominees from "./components/Nominees/Nominees";
import Courses from "./components/Courses/Courses";
import Collection from "./components/Collection/Collection";
import Directory from "./components/Directory/Directory";
import Market from "./components/Market/Market";
import VisitSotd from "./components/VisitSotd/VisitSotd";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      <Nominees />
      <Courses />
      <Collection />
      <Directory />
      <Market />
      <VisitSotd />
      <Footer />
    </div>
  );
}

export default App;
