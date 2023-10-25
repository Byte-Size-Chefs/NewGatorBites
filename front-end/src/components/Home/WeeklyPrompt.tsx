import React, { useState, useEffect } from "react";
import spaguettiPicture from "../Image/spaguetti.jpg";

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
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Check out the competition
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPrompt;
