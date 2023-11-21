import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types/Post";
import axios from "axios";
import authService from "../../services/auth.service";

export default function PostCard(props: { post: Post; color: string }) {
  const [upvotes, setUpvotes] = useState<number>(props.post.netRating);

  const clearUpvotes = () => {
    const token = authService.getToken();
    if (token !== null) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .patch(
          `http://localhost:8080/user/clearrating/${props.post.id}`,
          {},
          headers
        )
        .then((res) => {
          if (res.status === 200) {
            console.log("cleared the users upvote");
            setUpvotes(res.data.data.netRating);
          } else {
            console.log("failed to clear the users upvote. Not upvoted");
          }
        });
    } else {
      console.log("Not logged in");
    }
  };

  const handleUpvote = () => {
    const token = authService.getToken();
    if (token !== null) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .patch(
          `http://localhost:8080/user/likepost/${props.post.id}`,
          {},
          headers
        )
        .then((res) => {
          if (res.status === 200) {
            setUpvotes(upvotes + 1);
          } else {
            clearUpvotes();
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            clearUpvotes();
          } else {
            console.log(err.response.status);
          }
        });
    } else {
      console.log("Not logged in");
    }
  };

  const handleDownvote = () => {
    const token = authService.getToken();
    if (token !== null) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .patch(
          `http://localhost:8080/user/dislikepost/${props.post.id}`,
          {},
          headers
        )
        .then((res) => {
          if (res.status === 200) {
            setUpvotes(upvotes - 1);
          } else {
            clearUpvotes();
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            clearUpvotes();
          } else {
            console.log(err.response.status);
          }
        });
    } else {
      console.log("Not logged in");
    }
  };

  console.log(props.post.imageUrl);
  const post_url = "/posts/" + props.post.id;
  return (
    <div
      key={props.post.id}
      className={`rounded shadow-lg m-2 border-2 ${props.color}`}
    >
      <div className="relative m-2">
        {/* Adjusted Profile Picture Placeholder */}
        <img
          src="https://via.placeholder.com/40" // Replace with actual image source later
          className="absolute top-0 left-0 rounded-full h-12 w-12 border-2 border-white -mt-0.5 -ml-1"
          alt="User"
        />
        <Link
          data-cy={`post-${props.post.title}`}
          to={"/posts/" + props.post.id}
        >
          <p className="url_styling text-lg font-semibold w-5/6 ml-12">
            {props.post.title}
          </p>
        </Link>
        <span className="text-sm text-gray-500 ml-12 block">
          {" "}
          made by {props.post.user}
        </span>
        <div
          className="my-3"
          style={{ width: "100%", maxHeight: "300px", overflow: "hidden" }}
        >
          <img
            src={props.post.imageUrl}
            className="rounded-md object-cover w-full h-full"
            alt={props.post.title}
          />
        </div>

        {/* 
        <div>
          <p className='font-light w-5/6'>{props.post.body.slice(0, 50) + '...'}</p>
        </div>
        */}
        <div className="absolute top-0 right-0">
          {upvotes}
          <button onClick={() => handleUpvote()}>⬆</button>
          <button onClick={() => handleDownvote()}>⬇</button>
        </div>

        {/* 
        <div className='absolute bottom-0 right-0 font-thin italic'>{props.post.user}</div>
        */}
      </div>
    </div>
  );
}
