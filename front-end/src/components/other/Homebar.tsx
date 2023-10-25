import { Link } from "react-router-dom";
import React from "react";

export default function Homebar(props: { loggedIn: boolean }) {
  const loginButton = () => {
    if (props.loggedIn === false) {
      return (
        <Link data-cy="login-button" to="/profile/login" data-testid="LogInBtn">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white">
            Login
          </div>
        </Link>
      );
    } else {
      console.log("token: " + localStorage.getItem("token"));
      return (
        <Link data-cy="profile-button" to="/profile">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white">
            Profile
          </div>
        </Link>
      );
    }
  };

  const createPostButton = () => {
    if (props.loggedIn === true) {
      return (
        <Link
          data-cy="create-post-button"
          to="/posts/create"
          className="block mt-4 ml-auto lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-4"
        >
          Create Post
        </Link>
      );
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-row justify-between bg-sky-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">GatorBites</span>
      </div>
      <div className="flex justify-center flex-grow">
        {/* Search bar */}
        <div className="flex justify-center w-full px-2 lg:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 px-4 py-2 border rounded-md text-gray-700" // Adjust width here
          />
        </div>
      </div>
      <div className="flex flex-row justify-end text-sm space-x-4">
        {" "}
        {/* Added space-x-4 for spacing */}
        <Link
          data-cy="home-button"
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white"
          data-testid="HomeBtn"
        >
          Home
        </Link>
        <Link
          data-cy="search_button"
          to="/posts/search"
          className="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white"
          data-testid="SearchBtn"
        >
          Search
        </Link>
        {loginButton()}
        {createPostButton()}
      </div>
    </div>
  );
}
