// import { Metadata } from "next";

// import getPayloadClient from "../../../payload/payloadClient";

// import { PostButtons } from "./post-buttons";
// import { BlogCard } from "./blog-card";

// export const metadata: Metadata = {
//   title: "All Blogs | Triple C Collective",
//   description:
//     "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
// };

// interface BlogsPageProps {
//   searchParams: {
//     page: string;
//   };
// }

// const BLOG_POST_LIMIT = 12;

// export default async function BlogsPage({ searchParams }: BlogsPageProps) {
//   const page = +searchParams.page ?? 1;
//   const payload = await getPayloadClient();

//   const blogs = await payload.find({
//     collection: "blogs",
//     limit: BLOG_POST_LIMIT,
//     sort: "-createdAt",
//     page: page,
//   });

//   return (
//     <div className="max-w-4xl px-4 py-6 mx-auto sm:py-12 bg-[#fefefe]">
//       <h1 className="py-4 text-4xl font-semibold">All Blogs</h1>
//       <hr className="pb-4" />
//       <div className="flex flex-col gap-4">
//         <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.docs.map((blog) => (
//             <BlogCard blog={blog} key={blog.id} />
//           ))}
//         </div>
//         <PostButtons totalPages={blogs.totalPages} hasNextPage={blogs.hasNextPage} hasPrevPage={blogs.hasPrevPage} />
//       </div>
//     </div>
//   );
// }

// TODO: Maybe remove this page

import { notFound } from "next/navigation";

export default function BlogsPage() {
  return notFound();
}
