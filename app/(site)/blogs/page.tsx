import getPayloadClient from '../../../payload/payloadClient';
import { notFound } from 'next/navigation';

export default async function BlogsPage() {
    const payload = await getPayloadClient();

    const blogs = await payload.find({
        collection: 'blogs',
        limit: 10,
        sort: 'createdAt',
    });

    console.log('blogs', blogs.docs);

    return <main>Blogs Page</main>;
}
