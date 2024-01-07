import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Triple C Collective',
        short_name: 'Triple C Collective',
        description:
            'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
        start_url: '/',
        display: 'standalone',
        background_color: '#2b074d',
        theme_color: '#2b074d',
        icons: [
            {
                src: '/icon16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/icon32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/icon144.png',
                sizes: '144x144',
                type: 'image/png',
            },
        ],
    };
}
