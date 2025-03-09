import React from "react";
import Image from "next/image";

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
    <div className="flex flex-wrap justify-center p-4 gap-4">
      {posts.map((post) => (
        <div className="bg-blue-500 basis-1/4 rounded-lg p-4" key={post.slug}>
          <div>
            <Image
              src={post.cover}
              alt={post.title}
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1>{post.title}</h1>
            <h4>{post.description}</h4>
            <h2>{post.date}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
