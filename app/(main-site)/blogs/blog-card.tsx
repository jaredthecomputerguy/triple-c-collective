import { formatDate } from "@/lib/utils";
import { Blog } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const blogImageSrc =
    typeof blog.image === "object"
      ? (blog.image.url as string)
      : "/images/blog-placeholder.png";

  return (
    <>
      <Link
        href={`/blogs/${blog.slug}`}
        className="flex flex-col gap-1 overflow-hidden rounded-lg bg-slate-100 p-1 outline-none transition-transform ease-in-out hover:scale-105 hover:outline-primary-purple focus:scale-105 focus:outline-primary-purple"
      >
        <Image src={blogImageSrc} width={600} height={400} alt="Blog image" />
        <div className="flex flex-col gap-1 p-4">
          <span className="font-logo text-xl font-semibold">{blog.title}</span>
          <span className="text-gray-600">{formatDate(blog.createdAt)}</span>
          <p className="line-clamp-3 text-gray-800">{blog.description}</p>
        </div>
      </Link>
    </>
  );
};
