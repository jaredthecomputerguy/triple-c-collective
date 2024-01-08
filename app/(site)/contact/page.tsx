import { Metadata } from 'next';
import { GoogleMapEmbed } from './google-map-embed';

export const metadata: Metadata = {
    title: 'Contact Us | Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

export default function ContactPage() {
    // TODO: Add links to FB and Instagram
    return (
        <section className='max-w-4xl mx-auto sm:py-12 py-6 px-2'>
            <h1 className='text-4xl py-4 font-semibold'>Contact us</h1>
            <GoogleMapEmbed />
        </section>
    );
}
