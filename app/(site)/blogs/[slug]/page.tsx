import type { Metadata, ResolvingMetadata } from "next";
import getPayloadClient from "~/payloadClient";
import { BlogContent } from "./BlogContent";
import { notFound } from "next/navigation";
import { TextNode } from "@payloadcms/richtext-slate";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = params;

  const payload = await getPayloadClient();

  // fetch data
  const blog = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!blog.docs[0]) {
    return {
      title: "Not Found | Triple C Collective",
    };
  }

  return {
    title: blog.docs[0].title,
  };
}

async function getBlogBySlug(slug: string) {
  try {
    const payload = await getPayloadClient();

    const blogs = await payload.find({
      collection: "blogs",
      where: {
        slug: {
          equals: slug,
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

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || !blog.content) return notFound();

  return (
    <article className="max-w-4xl px-2 py-6 mx-auto sm:py-12">
      <BlogContent blogContent={blog.content} createdAt={blog.createdAt} />
    </article>
  );
}