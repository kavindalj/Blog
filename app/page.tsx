import Posts from "./components/Posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getPosts() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMetadata);
    return {
      slug,
      title: frontmatter.title || "Untitled",
      date: frontmatter.date ? new Date(frontmatter.date).toISOString().split("T")[0] : "No Date",
      description: frontmatter.description || "No Description",
      cover: frontmatter.cover,
    };
  });
  return { posts };
}

export default async function Home() {
  const { posts } = await getPosts();

  console.log(posts);

  return (
    <>
      <div className="flex flex-col items-center min-h-[calc(100vh-8rem)] p-6">
        <Posts posts={posts} />
      </div>
    </>
  );
}

