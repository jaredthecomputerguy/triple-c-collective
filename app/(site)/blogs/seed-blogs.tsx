import { blogPostsToSeed } from '@/app/lib/seed-data';
import { seedBlogs } from '@/app/lib/utils';

export const SeedBlogs = () => {
    seedBlogs(blogPostsToSeed);

    return <button></button>;
};
