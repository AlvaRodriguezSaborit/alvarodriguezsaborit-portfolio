//import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Carrer from "./sections/Carrer";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div id="aboutMe">
        <Hero />
      </div>
      <div className="max-w-[75%] w-full mx-auto flex flex-col divide-y divide-gray-300 border-t border-gray-300 *:pb-36 *:pt-6">
        <div id="career"><Carrer /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="stack"><Stack /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
}

export default App;
