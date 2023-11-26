import React, { useEffect, useState } from "react";
import { Post } from "../types/Post";
import { Category } from "../types/Category";
import PostCard from "../Post/PostCard";
import { Link } from "react-router-dom";

export default function Comp(props: { loggedIn: boolean }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        let post_data: Post[] = json.data;
        post_data.sort((a, b) => b.netRating - a.netRating);
        setPosts(post_data);
      });
    fetch("/api/categories")
      .then((res) => res.json())
      .then((json) => {
        let category_data: Category[] = json.data;
        setCategories(category_data);
      });
    fetch("/api/competition-view")
    .catch(error => {
      console.error('Error logging visit to competition page:', error);
    });
  }, []);

  // Filter posts to include only those in the "Events" category
  const eventsPosts = posts.filter((post) => post.category === "Events");

  // Create HTML for events posts
  const html_events = eventsPosts.map((post, i) => {
    let outline_color = i % 2 === 0 ? "border-sky-500" : "border-orange-500";
    return <PostCard post={post} color={outline_color} />;
  });

  return (
    <div className="pt-20 flex flex-col overflow-hidden h-full p-2">
      <div className="max-w-7xl mx-auto gap-2 h-full overflow-hidden grid grid-cols-12">
        <div className="col-start-7 col-span-6 h-full overflow-y-auto -ml-28">
          <div
            data-cy="events-tab"
            className="text-center text-xl font-bold text-white"
          >
            Events
          </div>
          <div className="w-[600px] gap-y-1 flex flex-col">{html_events}</div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-1/4 mr-[-90px] bg-amber-500 text-slate-900 rounded-full hover:scale-105 duration-500 flex items-center justify-center"
          style={{ width: "40px", height: "40px", padding: "5px" }}
        >
          ↑
        </button>
      </div>
      <br />
    </div>
  );
}
