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
    <div className="pt-20 p-4 rounded-md flex flex-col w-1/5">
      <div className="sticky top-20  p-6  max-w-md rounded-md shadow mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold text-white mb-2 border-b border-amber-500 pb-2 text-center">
          {prompt.title}
        </h3>
        <div className="flex flex-col w-36 ">
          <Link to="/italian">
            <button className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Italian
            </button>
          </Link>
          <Link to="/mexican">
            <button className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Mexican
            </button>
          </Link>
          <Link to="/indian">
            <button className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Indian
            </button>
          </Link>
          <Link to="/american">
            <button className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              American
            </button>
          </Link>
          <Link to="/asian">
            <button className="bg-sky-600 text-white px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">
              Asian
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SortByCuisine;
