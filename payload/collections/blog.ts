import { slateEditor } from "@payloadcms/richtext-slate";
import { CollectionConfig } from "payload/types";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "title",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: slateEditor({
        admin: {
          elements: [
            "h1",
            "h2",
            "h3",
            "link",
            "ol",
            "ul",
            "textAlign",
            "upload",
          ],
        },
      }),
    },
  ],
};
