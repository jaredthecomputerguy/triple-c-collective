import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { WithAgeConsent } from '../_components/with-age-consent';

export const metadata: Metadata = {
    title: 'Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-logo',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const ageConsent = cookieStore.get('age-consent');

    return (
        <html lang='en' className={montserrat.variable}>
            <body>
                <header>
                    <div>Triple C Collective</div>
                </header>
                <WithAgeConsent ageConsent={ageConsent}>{children}</WithAgeConsent>
            </body>
        </html>
    );
}