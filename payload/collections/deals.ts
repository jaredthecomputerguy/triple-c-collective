import { CollectionConfig } from "payload/types";
import brands from "../brands.json";

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
      name: "brand",
      type: "select",
      hasMany: true,
      required: true,
      options: brands,
    },
    {
      name: "categories",
      type: "select",
      hasMany: true,
      options: [
        { label: "Beverage", value: "beverage" },
        { label: "Pill", value: "pill" },
        { label: "Tincture", value: "tincture" },
        { label: "Cartridge", value: "cartridge" },
        { label: "Preroll", value: "preroll" },
        { label: "Flower", value: "flower" },
        { label: "Extract", value: "extract" },
        { label: "Edible", value: "edible" },
        { label: "Plant", value: "plant" },
        { label: "Merch", value: "merch" },
      ],
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
