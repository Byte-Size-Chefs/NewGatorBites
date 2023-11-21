import React, { useState, useEffect } from "react";
import { Category } from "../types/Category";
import { Link, useLocation } from "react-router-dom";

const SortByCuisine: React.FC = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState({
    title: "Sort By Cuisine",
    imageUrl: "path-to-spaghetti-image.jpg",
    altText: "Spaghetti",
  });

  // Check if the current route is "/competition"
  const isCompetitionRoute = location.pathname === "/competition";

  // Render the component only if it's not the competition route
  if (isCompetitionRoute) {
    return null; // or return a different component, message, etc.
  }

  return (
    <div className="pt-20 bg-white-900 p-4 rounded-md shadow flex flex-col justify-between w-full h-full">
      <div className="sticky top-20 bg-white p-6 w-full max-w-md rounded-md shadow mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b border-gray-400 pb-2 text-center">
          {prompt.title}
        </h3>
        <ul className="space-y-4">
          <Link to="/italian">
            <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Italian
            </button>
          </Link>
          <Link to="/mexican">
            <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Mexican
            </button>
          </Link>
          <Link to="/indian">
            <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Indian
            </button>
          </Link>
          <Link to="/american">
            <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              American
            </button>
          </Link>
          <Link to="/asian">
            <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Asian
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SortByCuisine;