import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { blogPostsToSeed } from "./seed-data";
import { type Payload } from "payload";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}

function generateSlug(title: String) {
  return title.trim().toLocaleLowerCase().replace(":", "").replace(/\s+/g, "-");
}

export async function seedBlogs(payloadClient: Payload) {
  function generateContent(title: string, description: string) {
    return [
      {
        children: [{ text: title }],
        type: "h1",
      },
      {
        children: [{ text: description }],
      },
    ];
  }

  await Promise.all(
    blogPostsToSeed.map((blog) => {
      console.log("Creating post: ", blog.title, "/n");

      const generatedContent = generateContent(blog.title, blog.description);

      const generatedSlug = generateSlug(blog.title);

      return payloadClient.create({
        collection: "blogs",
        data: {
          title: blog.title,
          description: blog.description,
          createdAt: blog.createdAt,
          content: generatedContent,
          slug: generatedSlug,
          image: {
            url: "/images/blog-placeholder.png",
            alt: "Blog placeholder image",
            createdAt: blog.createdAt,
            id: "60f0b1b0c9b7a2001b9f1b1a",
            updatedAt: blog.createdAt,
          },
        },
      });
    })
  );

  console.log("Done seeding blogs...\n");
}
