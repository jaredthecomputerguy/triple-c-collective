import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { blogPostsToSeed } from './seed-data';
import { type Payload } from 'payload';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    });
}

function generateSlug(title: String) {
    return title.trim().toLocaleLowerCase().replace(/\s+/g, '-');
}

export async function seedBlogs(payloadClient: Payload) {
    function generateContent(title: string, description: string) {
        return [
            {
                children: [{ text: title }],
                type: 'h1',
            },
            {
                children: [{ text: description }],
            },
        ];
    }

    await Promise.all(
        blogPostsToSeed.map((blog) => {
            console.log('Creating post: ', blog.title, '/n');

            const generatedContent = generateContent(blog.title, blog.description);

            const generatedSlug = generateSlug(blog.title);

            return payloadClient.create({
                collection: 'blogs',
                data: {
                    title: blog.title,
                    description: blog.description,
                    createdAt: blog.createdAt,
                    content: generatedContent,
                    slug: generatedSlug,
                },
            });
        })
    );

    console.log('Done seeding blogs...\n');
}
