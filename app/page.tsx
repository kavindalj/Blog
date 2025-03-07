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
      author: frontmatter.author || "Unknown",
      date: frontmatter.date ? new Date(frontmatter.date).toISOString().split("T")[0] : "No Date",
    };
  });
  return { posts };
}

export default async function Home() {
  const { posts } = await getPosts();

  console.log(posts);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

