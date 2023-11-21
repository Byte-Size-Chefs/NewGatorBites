import React, { useState, useEffect } from "react";
import { Category } from "../types/Category";
import { Link } from "react-router-dom";

const SortByCuisine: React.FC = () => {
  const [prompt, setPrompt] = useState({
    title: "Sort By Cuisine",
    imageUrl: "path-to-spaghetti-image.jpg",
    altText: "Spaghetti",
  });


// // in the process of getting buttons to sort the feed  
// const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Sample posts data
//   const posts: Category[] = [
//     { title: "Italian Post", category: "Italian" },
//     { title: "Mexican Post", category: "Mexican" },
//     { title: "Indian Post", category: "Indian" },
//     { title: "American Post", category: "American" },
//     { title: "Asian Post", category: "Asian" },
//     // Add more posts as needed
//   ];

//   const filteredPosts = selectedCategory
//     ? posts.filter((post) => post.category === selectedCategory)
//     : posts;

//   const handleSort = (category: string) => {
//     setSelectedCategory(category);
//   };

return (
  <div className="bg-white-900 p-4 rounded-md shadow flex flex-col justify-between w-full h-full">
    <div className="bg-white p-6 w-full max-w-md rounded-md shadow mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {prompt.title}
      </h3>
      <ul className="space-y-4">
        <Link to="/italian">
          <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">Italian</button>
        </Link>
        <Link to="/mexican">
          <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">Mexican</button>
        </Link>
        <Link to="/indian">
          <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">Indian</button>
        </Link>
        <Link to="/american">
          <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">American</button>
        </Link>
        <Link to="/asian">
          <button className="bg-orange-400 text-black px-4 py-2 rounded w-full hover:scale-105 duration-500 mb-2">Asian</button>
        </Link>
      </ul>
    </div>
  </div>
);

};

export default SortByCuisine;
