'use server';

import { renderAsync } from '@react-email/render';
import nodemailer from 'nodemailer';
import { ContactEmail } from '../(site)/contact/contact-email';
import { type EmailInfo } from '../(site)/contact/contact-form';
import { type MailOptions } from 'nodemailer/lib/sendmail-transport';

export const sendEmail = async ({ from, message, subject, name }: EmailInfo) => {
    const email = process.env.NODEMAILER_USER;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: email,
                pass: process.env.NODEMAILER_PASSWORD,
            },
        });

        const emailHtml = await renderAsync(ContactEmail({ message, from, subject, name }));

        const options: MailOptions = {
            from: email,
            to: email,
            subject,
            html: emailHtml,
        };

        await transporter.sendMail(options);
    } catch (err) {
        if (err instanceof Error) {
            console.error('Nodemailer Error: ', err.message);
        } else {
            console.error('Error: ', err);
        }
    }
};
