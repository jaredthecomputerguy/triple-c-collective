import getPayloadClient from '../../../../payload/payloadClient';
import { BlogContent } from './_components/BlogContent';
import { notFound } from 'next/navigation';

export default async function BlogPage({ params: { id } }: { params: { id: string } }) {
    // TODO: Implement this
    const payload = await getPayloadClient();

    const blogs = await payload.find({
        collection: 'blogs',
        where: {
            id: {
                equals: id,
            },
        },
    });

    const blog = blogs.docs[0];

    if (!blog || !blog.content) return notFound();

    return (
        <main>
            <BlogContent blogContent={blog.content as any} />
        </main>
    );
}
