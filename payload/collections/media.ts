import { type CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    disableLocalStorage: true,
  },

  fields: [
    {
      name: "url",
      type: "text",
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://triple-c-collective.s3.us-west-1.amazonaws.com/${doc!.filename}`,
        ],
      },
    },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
