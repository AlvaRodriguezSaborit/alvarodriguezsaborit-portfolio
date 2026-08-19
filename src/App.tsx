//import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Carrer from "./sections/Carrer";
import Education from "./sections/Education";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="max-w-[75%] w-full mx-auto flex flex-col divide-y divide-gray-300 *:pb-36 *:pt-6">
        <Hero />
        <Carrer />
        <Education />
      </div>
    </div>
  );
}

export default App;
