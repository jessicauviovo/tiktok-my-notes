import React from "react";
import notebookImage from "../assets/home_img.png";

import element2 from "../assets/element2.png";

export default function PageOne({ onStart, language, setLanguage }) {
  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.play();
  };

  return (
    <div className="bg-[#FFF8D9] min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Main Content: left title + right image */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-16 mt-8 sm:mt-12 md:mt-16 gap-4 md:gap-8 flex-col md:flex-row">
        {/* Left Side: Title, language dropdown, button */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <h1 className="text-[#fe5900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-wide text-center">
            TIKTOKIFY<br />MY<br />NOTES
          </h1>

          {/* Language Dropdown */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg font-arial font-bold text-[#555555] border-2 border-[#555555] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#555555] bg-[#FFF8D9]"
          >
            <option value="English">English</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
          </select>

          <button
            onClick={() => { playClickSound(); onStart(); }}
            className="mt-2 sm:mt-4 bg-[#0B5C66] hover:bg-[#094952] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-quicksand font-bold rounded-full px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 shadow-lg hover:scale-105 transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>

        {/* Right Side: Home Image */}
        <img
          src={notebookImage}
          alt="Notebook"
          className="w-[60%] sm:w-[50%] md:w-[35%] lg:w-[45%] object-contain rotate-[12deg] mt-4 md:mt-0"
        />
      </div>

      {/* Top right element */}
      <img
        src={element2}
        alt="Element 2"
        className="absolute top-4 sm:top-8 md:top-14 right-4 sm:right-8 md:right-14 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-contain opacity-80 md:opacity-100"
      />


    </div>
  );
}