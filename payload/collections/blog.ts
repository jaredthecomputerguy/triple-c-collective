import { slateEditor } from "@payloadcms/richtext-slate";
import { CollectionConfig } from "payload/types";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      validate: (value: string) => {
        const slugRegex = /^[a-zA-Z0-9_-]+$/;

        if (slugRegex.test(value)) {
          return true;
        } else {
          return "Please provide a valid slug. Valid slugs can only contain letters (both uppercase and lowercase), numbers, underscores, and hyphens";
        }
      },
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
