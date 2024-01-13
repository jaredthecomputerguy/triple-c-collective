import { Metadata } from 'next';
import getPayloadClient from '../../../payload/payloadClient';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'All Blogs | Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

interface BlogsPageProps {
    searchParams: {
        page: string;
    };
}

const BLOG_POST_LIMIT = 5;

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
    const page = +searchParams.page ?? 1;
    const payload = await getPayloadClient();

    const blogs = await payload.find({
        collection: 'blogs',
        limit: BLOG_POST_LIMIT,
        sort: 'createdAt',
        page: page,
    });

    function getPagesArray(length: number) {
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(i + 1);
        }

        return arr;
    }

    const pages = getPagesArray(blogs.totalPages);
    console.log('pages', pages);

    return (
        <section className='max-w-4xl mx-auto sm:py-12 py-6 px-2'>
            <h1 className='text-4xl py-4 font-semibold'>All Blogs</h1>
            <hr className='pb-4' />
            <div className='flex flex-col gap-4'>
                <ul>
                    {blogs.docs.map((blog) => (
                        // TODO: Add blog cards
                        <li className='hover:text-blue-600 text-blue-500' key={blog.id}>
                            <a href={`/blogs/${blog.id}`}>{blog.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 items-center'>
                    <button
                        className='px-6 py-2 rounded bg-primary-purple transition-all text-white font-semibold hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 outline-none focus:outline-primary-purple active:outline-primary-purple disabled:pointer-events-none disabled:bg-primary-purple/50'
                        disabled={!blogs.hasPrevPage}>
                        <Link href={`/blogs?page=${blogs.prevPage}`}>Previous Page</Link>
                    </button>
                    <ul className='flex gap-1 hover:text-blue-600 text-blue-500'>
                        {pages.map((page) => (
                            <li key={page}>
                                <Link href={`/blogs?page=${page}`}>{page}</Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        className='px-6 py-2 rounded bg-primary-purple transition-all text-white font-semibold hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 outline-none focus:outline-primary-purple active:outline-primary-purple disabled:pointer-events-none disabled:bg-primary-purple/50'
                        disabled={!blogs.hasNextPage}>
                        <Link href={`/blogs?page=${blogs.nextPage}`}>Next Page</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
