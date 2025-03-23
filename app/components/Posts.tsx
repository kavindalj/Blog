import React from "react";
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
  return (
    <div className="container mx-auto flex justify-center mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              className="bg-white backdrop-blur-md shadow-lg shadow-gray-200 border border-white rounded-lg p-6 w-full max-w-[500px] min-h-auto transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
                <h4 className="text-xl text-gray-600">{post.description}</h4>
                <h2 className="text-md text-gray-400">{post.date}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
