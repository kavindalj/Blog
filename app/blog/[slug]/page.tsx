import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import React from "react";

export default async function PostPage({ params }: { params: Record<string, string> }) {
  if (!params?.slug) {
    notFound();
  }

  const slug = params.slug;
  const filePath = path.join("posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdownWithMetadata = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMetadata);
  const htmlContent = marked(content);

  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toISOString().split("T")[0]
    : "No Date";

  return (
    <div className="container mx-auto mt-3 p-4 min-h-[calc(100vh-8rem)]">
      <div>
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          width={1000}
          height={250}
        />
        <h1 className="text-3xl text-gray-800 font-bold">{frontmatter.title}</h1>
        <p className="text-gray-600">{formattedDate}</p>
      </div>
      <div
        className="prose prose-xl max-w-none markdown-content mt-4"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
