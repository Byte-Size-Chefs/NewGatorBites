import React, { useState, useEffect } from "react";

const SortByCuisine: React.FC = () => {
  const [prompt, setPrompt] = useState({
    title: "Sort By Cuisine",
    imageUrl: "path-to-spaghetti-image.jpg",
    altText: "Spaghetti",
  });

  return (
    <div className="bg-white p-4 w-full min-h-screen border border-gray-300 rounded-md shadow-md">
      <div className="bg-white p-6 w-full max-w-md rounded-md shadow mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {prompt.title}
        </h3>
        <ul className="space-y-4">
          <li className="text-gray-800 font-medium">Italian</li>
          <li className="text-gray-800 font-medium">Mexican</li>
          <li className="text-gray-800 font-medium">Indian</li>
          <li className="text-gray-800 font-medium">American</li>
          <li className="text-gray-800 font-medium">Asian</li>
        </ul>
      </div>
    </div>
  );
};

export default SortByCuisine;
