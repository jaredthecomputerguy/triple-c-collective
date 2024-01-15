import getPayloadClient from '~/payloadClient';
import { BlogContent } from './_components/BlogContent';
import { notFound } from 'next/navigation';

async function getBlogById(id: string) {
    try {
        const payload = await getPayloadClient();

        const blogs = await payload.find({
            collection: 'blogs',
            where: {
                id: {
                    equals: id,
                },
            },
        });

        return blogs.docs[0];
    } catch (err) {
        console.error('Error: ', err);
    }
}

export default async function BlogPage({ params }: { params: { id: string } }) {
    // TODO: Implement this

    const blog = await getBlogById(params.id);

    return (
        <main>
            <BlogContent blogContent={blog.content as any} />
        </main>
    );
}
