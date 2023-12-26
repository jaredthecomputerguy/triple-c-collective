import { CollectionConfig } from "payload/types"

export const Blogs: CollectionConfig = {
	slug: "blogs",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text"
		}
	]
}