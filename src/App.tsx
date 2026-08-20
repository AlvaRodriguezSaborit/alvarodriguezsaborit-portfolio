//import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Carrer from "./sections/Carrer";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Stack from "./sections/Stack";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Hero />
      <div className="max-w-[75%] w-full mx-auto flex flex-col divide-y divide-gray-300 border-t border-gray-300 *:pb-36 *:pt-6">
        <Carrer />
        <Education />
        <Stack />
      </div>
    </div>
  );
}

export default App;
