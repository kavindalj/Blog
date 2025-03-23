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
    <div className="container mx-auto flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 
                       rounded-lg p-6 w-full max-w-[500px] min-h-auto"
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
              <h1 className="text-3xl font-bold text-black">{post.title}</h1>
              <h4 className="text-xl text-gray-200">{post.description}</h4>
              <h2 className="text-md text-gray-300">{post.date}</h2>
              <Link className="font-bold text-blue-300 hover:text-blue-100 hover:underline" href={`/blog/${post.slug}`}>
                Read more &gt;&gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
