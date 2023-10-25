import React, { useState, useEffect } from "react";
import spaguettiPicture from "../Image/spaguetti.jpg";

const WeeklyPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState({
    title: "This Week's Prompt!",
    imageUrl: spaguettiPicture,
    altText: "Spaghetti",
  });

  return (
    <div className="bg-white p-4 rounded-md shadow mx-auto my-4 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center pt-16">
        {" "}
        {/* Added padding to move text lower */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b border-gray-400 pb-2">
          {" "}
          {/* Added border bottom */}
          {prompt.title}
        </h3>
        <div className="flex justify-center mt-4">
          <img
            className="rounded-md"
            src={prompt.imageUrl}
            alt={prompt.altText}
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-green-500 text-black px-4 py-2 rounded-md">
          Check out the competition
        </button>
      </div>
    </div>
  );
};

export default WeeklyPrompt;
