import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Triple C Collective',
    description:
        'Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.',
};

export default function PrivacyPolicyPage() {
    return (
        <section className='max-w-4xl mx-auto sm:py-12 py-6 px-2'>
            <h1 className='text-4xl py-4 font-semibold'>Privacy Policy</h1>
            <span className='text-center text-gray-700 mx-auto py-2'>Last Updated: 12/31/2023</span>
            <hr className='pb-4' />
            <article className='pb-6'>
                <p>
                    Thank you for visiting the website of YCNIUQ Inc. dba Triple C Collective. At Triple C Collective,
                    we are committed to protecting your privacy and ensuring the security of your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, and protect the information we gather
                    through our website.
                </p>
                <br />
                <p>
                    By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not
                    agree with the terms outlined here, please do not use our website.
                </p>
                <br />
                <h2 className='text-3xl py-2'>Information We Collect</h2>
                <ol className='list-decimal px-4'>
                    <li>
                        <span className='font-semibold text-lg'>Personal Information:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may collect personal information, such as your name, email address, phone number, and
                                other relevant details when you voluntarily provide it to us through forms, surveys, or
                                other means.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-semibold text-lg'>Automatically Collected Information:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may automatically collect certain information about your device, including your IP
                                address, browser type, and operating system, through cookies and similar technologies.
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3 className='text-3xl py-2'>How We Use Your Information</h3>
                <ol className='list-decimal px-4'>
                    <li>
                        <span className='font-semibold text-lg'>Providing Services:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We use the information you provide to deliver the services you request, such as
                                responding to inquiries, processing orders, or providing updates.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span className='font-semibold text-lg'>Improving User Experience:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may use the information to enhance and personalize your experience on our website,
                                including tailoring content and recommendations.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-semibold text-lg'>Communication:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may use your contact information to communicate with you about our products,
                                services, promotions, and important updates. You can opt-out of these communications at
                                any time.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-semibold text-lg'>Analytics and Research:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may use aggregated and anonymized data for analytics and research purposes to improve
                                our website, products, and services.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-semibold text-lg'>Legal Compliance:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                We may disclose your information if required by law or in response to a valid legal
                                request.
                            </li>
                        </ul>
                    </li>
                </ol>
                <h4 className='text-3xl py-2'>Your Choices</h4>
                <ol className='list-decimal px-4'>
                    <li>
                        <span className='font-semibold text-lg'>Opt Out:</span>
                        <ul className='list-disc px-4'>
                            <li>
                                {' '}
                                You can opt-out of receiving promotional communications from us by following the
                                instructions provided in the communication.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-semibold text-lg'>Cookies:</span>
                        <ul className='list-disc px-4'>
                            <li> You can manage your cookie preferences through your browser settings.</li>
                        </ul>
                    </li>
                </ol>
                <h5 className='text-3xl py-2'>Security</h5>
                <p>
                    We implement reasonable security measures to protect your information. However, no method of
                    transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee
                    absolute security.
                </p>
                <h6 className='text-3xl py-2'>Changes to This Privacy Policy</h6>
                <p>
                    We may update this Privacy Policy to reflect changes in our practices. Please review this page
                    periodically for any updates. Contact Us If you have any questions or concerns about this Privacy
                    Policy, please contact us at clearlakecompassioncenter@yahoo.com. Thank you for trusting YCNIUQ Inc.
                    dba Triple C Collective with your information.
                </p>
            </article>
        </section>
    );
}
