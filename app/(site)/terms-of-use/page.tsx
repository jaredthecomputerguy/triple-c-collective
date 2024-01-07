import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Use | Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

export default function TermsOfUsePage() {
    return (
        <section className='max-w-4xl mx-auto sm:py-12 py-6 mb-8 px-2'>
            <h1 className='text-4xl py-4 font-semibold'>Terms of Use</h1>
            <span className='text-center text-gray-700 mx-auto py-2'>Last Updated: 12/31/2023</span>
            <hr className='pb-4' />
            <p>
                By using this website, you agree to comply with and be bound by the following terms and conditions of
                use. Please read these Terms of Use carefully before accessing or using our website.
            </p>{' '}
            <br />
            <h2 className='text-3xl py-2'>1. Acceptance of Terms</h2>
            <p>
                By accessing or using the Triple C Collective website, you agree to be bound by these Terms of Use and
                all applicable laws and regulations. If you do not agree with any part of these terms, please do not use
                our website.
            </p>{' '}
            <br />
            <h3 className='text-3xl py-2'>2. Age Restriction</h3>{' '}
            <p>
                You must be at least 21 years old, or 18 years old with a valid medical recommendation, to use this
                website. By accessing and using this site, you confirm that you are of legal age to purchase cannabis
                products.
            </p>{' '}
            <br />
            <h4 className='text-3xl py-2'>3. Compliance with Laws</h4>{' '}
            <p>
                You agree to comply with all applicable federal, state, and local laws and regulations regarding the use
                of cannabis and related products. Triple C Collective reserves the right to refuse service to anyone for
                any reason at any time.
            </p>{' '}
            <br />
            <h5 className='text-3xl py-2'>4. Product Information</h5>{' '}
            <p>
                Information about our cannabis products on the website is for informational purposes only. It does not
                constitute medical advice, and you should consult a healthcare professional for medical advice.{' '}
            </p>
            <br />
            <h6 className='text-3xl'>5. User Account</h6>
            <p>
                If you create an account on our website, you are responsible for maintaining the confidentiality of your
                account information and password. You agree to accept responsibility for all activities that occur under
                your account.
            </p>{' '}
            <br />
            <h6 className='text-3xl py-2'>6. Prohibited Activities</h6>{' '}
            <p>
                You agree not to engage in any activities that may be deemed illegal, including but not limited to:
                <ul className='list-disc pl-4'>
                    <li>Unauthorized access to our systems or data.</li>
                    <li>Interference with the proper working of the website.</li>
                    <li>Distribution of malicious code.</li>
                    <li>Any activity that violates the rights of others.</li>
                </ul>
            </p>
            <br />
            <h6 className='text-3xl py-2'>7. Intellectual Property</h6>{' '}
            <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Triple C Collective and is protected by copyright and other intellectual property laws. You may not
                reproduce, modify, distribute, or republish any content without our written consent.
            </p>{' '}
            <br />
            <h6 className='text-3xl py-2'>8. Limitation of Liability</h6>
            <p>
                Triple C Collective is not liable for any damages, including direct or indirect, arising from the use or
                inability to use our website or services.
            </p>{' '}
            <br />
            <h6 className='text-3xl py-2'>9. Amendments</h6>{' '}
            <p>
                Triple C Collective reserves the right to modify or replace these Terms of Use at any time. It is your
                responsibility to check for updates periodically. Your continued use of the website after changes
                constitutes acceptance of the revised terms.
            </p>{' '}
            <br />
            <h6 className='text-3xl py-2'>10. Contact Information</h6>{' '}
            <p>
                If you have any questions about these Terms of Use, please contact us using our{' '}
                <Link className='text-blue-500' href='/contact'>
                    contact page
                </Link>
                .
            </p>
        </section>
    );
}
