import getPayloadClient from "../../../payload/payloadClient";

export default async function BlogTestPage({
	params: { id }
}: 
	{params: { id: string }
}) {
	const payload = await getPayloadClient()

	const blogs = await payload.find({
		collection: "blogs",
		where: {
			id: {
				equals: id
			}
		}
	}) 

	const blog = blogs.docs[0]

	if (!blog) return <div>Blog with id: {id} does not exist</div>

	return (<div>
		<h1>{blog.title}</h1>
		<p>{blog.id}</p>
	</div>)
}