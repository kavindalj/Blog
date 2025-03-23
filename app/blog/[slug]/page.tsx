import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Image from "next/image";
import { rehype } from "rehype";
import rehypeReact from "rehype-react";

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = params;

  const filePath = path.join("posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const markdownWithMetadata = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMetadata);

  // Create a custom renderer for marked
  const renderer = new marked.Renderer();

  // Convert markdown content to HTML using the custom renderer
  const htmlContent = marked(content, { renderer });

  // Use rehype to replace <img> tags with next/image component
  const renderAst = new rehype().use(rehypeReact, {
    createElement: React.createElement,
    components: {
      img: (props: { src: string; alt: string; }) => {
        const { src, alt, ...rest } = props;
        return (
          <Image
            src={src}
            alt={alt || "Image"}
            {...rest}
          />
        );
      },
    },
  });

  // Use rehypeReact to process the HTML content
  let contentWithImages;
  try {
    contentWithImages = renderAst.processSync(htmlContent).contents;
  } catch (error) {
    console.error("Error during rehype processing:", error);
    contentWithImages = htmlContent; // Fallback to raw HTML content if error occurs
  }

  // Ensure date is a string before rendering
  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toISOString().split("T")[0] // Formats as YYYY-MM-DD
    : "No Date";

  return (
    <div className="container mx-auto p-4">
      <div>
        <div>
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            width={1000}
            height={250}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
          <p className="text-gray-600">{formattedDate}</p>
        </div>
      </div>
      <div
        className="prose prose-xl max-w-none markdown-content mt-4"
        dangerouslySetInnerHTML={{ __html: contentWithImages }}
      />
    </div>
  );
}
