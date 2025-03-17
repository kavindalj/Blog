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
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <h4 className="text-lg">{post.description}</h4>
            <h2 className="text-sm">{post.date}</h2>
            <Link className="font-bold" href={`/blog/${post.slug}`}>Read more&gt;&gt;</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
