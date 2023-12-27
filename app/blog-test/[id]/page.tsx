import { Blog } from "@/payload-types";
import getPayloadClient from "../../../payload/payloadClient";

const convertToHTML = (blog: Blog) => {
  return blog.content?.map((content, i) => {
    const { children, type } = content;

    switch (type) {
      case "h1":
        return <h1 key={i}>{children[0].text}</h1>;
      case "p":
        return <p key={i}>{children[0].text}</p>;
      default:
        return null;
    }
  });
};

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

  const htmlElements = convertToHTML(blog);

  return (
    <div>
      <h1>Title: {blog.title}</h1>
      <div>{htmlElements}</div>
    </div>
  );
}
