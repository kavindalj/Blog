import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { marked } from "marked";

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

  const { slug } = await params;

  const filePath = path.join('posts', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const markdownWithMetadata = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMetadata);

  // date formatting
  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toISOString().split("T")[0]
    : "No Date";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      <p className="text-gray-600">{formattedDate}</p>
      <div className="markdown-content mt-4" dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
