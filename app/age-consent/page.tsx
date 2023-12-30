import { Metadata } from 'next';
import { AgeConsentForm } from './age-consent-form';

export const metadata: Metadata = {
    title: 'Age Consent | Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

export default function AgeConsentPage() {
    return (
        <main className="bg-[url('/lake-county.webp')] bg-cover min-h-screen w-screen flex flex-col items-center justify-center">
            <AgeConsentForm />
        </main>
    );
}
