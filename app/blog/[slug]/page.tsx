import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export const runtime = "nodejs";
export const dynamic = "force-static";


export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join("posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <div className="container mx-auto mt-3 p-4 min-h-[calc(100vh-8rem)]">
      <div>
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          width={1000}
          height={250}
        />
        <h1 className="text-4xl font-bold text-gray-900">
          {frontmatter.title}
        </h1>
        <p className="text-gray-600">
          {frontmatter.date
            ? new Date(frontmatter.date).toISOString().split("T")[0]
            : "No Date"}
        </p>
      </div>

      <div
        className="prose prose-xl max-w-none mt-4 markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
