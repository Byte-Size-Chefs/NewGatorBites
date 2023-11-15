import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";

import CreatePost from "../Post/CreatePost";
import PostView from "../Post/PostView";
import Login from "../profile/Login";
import Homebar from "./Homebar";
import Search from "../routes/Search";
import authService from "../../services/auth.service";
import ProfileView from "../profile/ProfileView";
import Register from "../profile/Register";
import CategoriesPage from "../routes/CategoriesPage";

import WeeklyPrompt from "../Home/WeeklyPrompt";
import SortByCuisine from "../Home/SortByCuisine";
import Comp from "../routes/Comp";

export default function Authenticator() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    console.log("Authenticator useEffect");
    (async () => {
      setLoggedIn(await authService.isLoggedIn());
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col h-screen">
      <BrowserRouter>
        <Homebar loggedIn={loggedIn} />

        <div className="flex flex-grow">
          <div className="w-80">
            {" "}
            <SortByCuisine />
          </div>

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home loggedIn={loggedIn} />} />
              <Route path="/competition" element={<Comp loggedIn={loggedIn}/>} />
              <Route
                path="/posts/create"
                element={<CreatePost loggedIn={loggedIn} />}
              />
              <Route path="/posts/:id" element={<PostView />} />
              <Route
                path="/profile"
                element={
                  <ProfileView loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />
              <Route
                path="/profile/login"
                element={
                  <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />
              <Route
                path="/profile/register"
                element={
                  <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                }
              />
              <Route
                path="/posts/search"
                element={<Search loggedIn={loggedIn} />}
              />
              <Route
                path="/categories/:category"
                element={<CategoriesPage />}
              />
            </Routes>
          </div>

          {/* Side area for the WeeklyPrompt */}
          <div className="w-80">
            {" "}
            {/* you can adjust the width to fit your design */}
            <WeeklyPrompt />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
