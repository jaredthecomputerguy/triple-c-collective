import { CollectionConfig } from "payload/types";

export const Deals: CollectionConfig = {
  slug: "deals",
  fields: [
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      label: "Active Promotion",
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Deal Title",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Deal Description",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Deal Image",
    },
  ],
};
