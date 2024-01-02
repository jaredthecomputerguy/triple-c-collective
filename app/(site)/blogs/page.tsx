import { Metadata } from "next";
import getPayloadClient from "../../../payload/payloadClient";

export const metadata: Metadata = {
  title: "Blogs | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default async function BlogsPage() {
  // TODO: Implement this
  const payload = await getPayloadClient();

  const blogs = await payload.find({
    collection: "blogs",
    limit: 10,
    sort: "createdAt",
  });

  console.log("blogs", blogs.docs);

  return <main>Blogs Page</main>;
}
