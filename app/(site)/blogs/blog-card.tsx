import { Blog } from '@/payload-types';

interface BlogCardProps {
    blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <div className=''>
            <span>{blog.title}</span>
            <p>{blog.description}</p>
        </div>
    );
};
