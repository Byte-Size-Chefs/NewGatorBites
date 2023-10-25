import React, { useState, useEffect } from "react";

const WeeklyPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState({
    title: "Sort By Cuisine",
    imageUrl: "path-to-spaghetti-image.jpg",
    altText: "Spaghetti",
  });

  return (
    <div className="bg-white p-4 rounded-md shadow max-w-sm mx-auto my-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {prompt.title}
      </h3>

      <div className="flex justify-center">
        <img
          className="rounded-md"
          src={prompt.imageUrl}
          alt={prompt.altText}
        />
      </div>
    </div>
  );
};

export default WeeklyPrompt;
