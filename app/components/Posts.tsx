"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PostType = {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover: string;
};

type PostsProps = {
  posts: PostType[];
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>({});

  const toggleDescription = (slug: string) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div className="container mx-auto flex justify-center mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 items-start">
        {posts.map((post) => {
          const isExpanded = expandedPosts[post.slug];

          return (
            <div
              key={post.slug}
              className={`flex flex-col bg-white backdrop-blur-md shadow-lg shadow-gray-200 border border-white rounded-lg p-6 w-full max-w-[500px] transition-transform duration-300 transform hover:scale-105 self-start ${isExpanded ? "" : "min-h-[380px] md:min-h-[430px] lg:min-h-[500px]"
                }`}
            >
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-contain"
                />

                <h1 className="text-2xl font-bold text-gray-800 mt-4 line-clamp-2">{post.title}</h1>
                <h2 className="text-md text-gray-400">{post.date}</h2>

                <p
                  className={`text-gray-600 mt-2 transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"
                    }`}
                >
                  {post.description}
                </p>
              </Link>
              <div className="align-start">
                <button
                  className="text-blue-500 mt-2 text-sm hover:underline"
                  onClick={() => toggleDescription(post.slug)}
                >
                  {isExpanded ? (
                    <>
                      See less <span className="ml-1">▲</span>
                    </>
                  ) : (
                    <>
                      See more <span className="ml-1">▼</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
