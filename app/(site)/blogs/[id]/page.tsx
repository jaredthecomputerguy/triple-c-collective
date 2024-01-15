import getPayloadClient from "~/payloadClient";
import { BlogContent } from ".//BlogContent";
import { notFound } from "next/navigation";
import { TextNode } from "@payloadcms/richtext-slate";

async function getBlogById(id: string) {
  try {
    const payload = await getPayloadClient();

    const blogs = await payload.find({
      collection: "blogs",
      where: {
        id: {
          equals: id,
        },
      },
    });

    return {
      ...blogs.docs[0],
      content: blogs.docs[0].content as TextNode[],
    };
  } catch (err) {
    console.error("Error: ", err);
  }
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);

  if (!blog || !blog.content) return notFound();

  return (
    <main>
      <BlogContent blogContent={blog.content} />
    </main>
  );
}
