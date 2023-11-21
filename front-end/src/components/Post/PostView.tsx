import React, { useState, useEffect } from "react";
import { Post } from "../types/Post";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import authService from '../../services/auth.service';
import axios from 'axios';
import { User } from "../types/User";

export default function PostView() {

    const [post, setPost] = useState<Post>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch('http://localhost:8080/posts/' + id)
            .then((res) => res.json())
            .then((json) => {
                let post_data: Post = json.data;
                setPost(post_data);
                console.log("Post Data:", post_data);
                console.log("Post Data:", post?.body);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
    }, [id]);

    useEffect(() => {
        console.log("Image URL:", post?.imageUrl);
    }, [post?.imageUrl]);

    if (post === undefined) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    else {
        return (
            <div className="pt-20 flex flex-col items-center justify-center mt-1">
                <div className="relative min-w-96 w-2/3 rounded overflow-hidden shadow-lg border-2 border-sky-500">
                    <div className="m-3">
                        {/* Display the image */}
                        {/*
                        <div className='my-3' style={{ width: '100%', maxHeight: '300px', overflow: 'hidden' }}>
                        <img
                            src={post.imageUrl}
                            className='rounded-md object-cover w-full h-full'
                            alt={post.title}
                        />
                        </div>
                        */}
                        <div className="text-xl font-sans font-bold m-1">
                            {post.title}
                        </div>
                        <div className="text-lg font-sans italic inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Posted By: {typeof post.user === 'string' ? post.user : post.user.username}
                        </div>
                        <div className="text-lg font-sans italic inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {post.category}
                        </div>
                    </div>
                    <div className='my-3 flex items-center justify-center'>
                    <img
                        src={post.imageUrl}
                        className='rounded-md object-cover w-1/2 h-auto'
                        alt={post.title}
                    />
                    </div>
                    <div className="text-lg font-sans ml-3">{post.body}</div>
                    <br />
                </div>
                <br />
                <div className="relative min-w-96 w-2/3 rounded overflow-hidden shadow-lg border-2 border-sky-500">
                    <div className="min-w-96 rounded overflow-hidden shadow-lg border-gray-200">
                        <div>
                            <CommentSection postID={post.id} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}
