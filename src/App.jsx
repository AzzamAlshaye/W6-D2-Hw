import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Zones from "./components/Zones";
import Recap from "./components/Recap";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Zones />
      <Recap />
      <About />
      <Sponsors />
      <Footer />
    </>
  );
}
