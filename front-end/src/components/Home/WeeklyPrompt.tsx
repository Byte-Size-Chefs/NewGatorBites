import React, { useState, useEffect } from "react";
import spaguettiPicture from "../Image/spaguetti.jpg";
import { Link } from "react-router-dom";

const WeeklyPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState({
    title: "This Week's Prompt!",
    imageUrl: spaguettiPicture,
    altText: "Spaghetti",
  });

  return (
    <div className="bg-white-900 p-4 rounded-md shadow flex flex-col justify-between w-full h-full">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b border-gray-400 pb-2">
          {prompt.title}
        </h3>
        <div className="flex justify-center mt-4">
          <img
            className="rounded-md"
            src={prompt.imageUrl}
            alt={prompt.altText}
          />
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/competition">
            <button className="bg-orange-400 text-black px-4 py-2 rounded hover:scale-105 duration-500">
              Check out the competition
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPrompt;
