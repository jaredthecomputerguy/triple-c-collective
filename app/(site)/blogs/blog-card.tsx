import { formatDate } from '@/app/lib/utils';
import { Blog } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <>
            <Link href={`/blogs/${blog.id}`} className='flex flex-col gap-1 overflow-hidden rounded-lg bg-slate-100'>
                <Image src='/images/generic-blog.jpg' width={600} height={400} alt='Blog image' />
                <div className='flex flex-col gap-1 p-4'>
                    <span className='text-xl font-semibold'>{blog.title}</span>
                    <span className='text-gray-600'>{formatDate(blog.createdAt)}</span>
                    <p className='text-gray-800 line-clamp-3'>{blog.description}</p>
                </div>
            </Link>
        </>
    );
};
