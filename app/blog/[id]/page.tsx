import getPayloadClient from "../../../payload/payloadClient";
import { serialize } from "@/app/utils/serializeHtml";

export default async function BlogTestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const payload = await getPayloadClient();

  const blogs = await payload.find({
    collection: "blogs",
    where: {
      id: {
        equals: id,
      },
    },
  });

  const blog = blogs.docs[0];

  if (!blog) return <div>Blog with id: {id} does not exist</div>;

  const elements = serialize(blog.content!);
  return (
    <main>
      <article>{elements}</article>
    </main>
  );
}
