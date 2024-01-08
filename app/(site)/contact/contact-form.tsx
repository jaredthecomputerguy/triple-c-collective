'use client';

import { sendEmail } from '@/app/lib/send-email';
import { type ChangeEvent, type FormEvent, useState } from 'react';

export interface EmailInfo {
    name?: string;
    from: string;
    subject: string;
    message: string;
}

export const ContactForm = () => {
    const [emailInfo, setEmailInfo] = useState<EmailInfo>({
        from: '',
        message: '',
        subject: '',
        name: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;

        setEmailInfo((prevState) => {
            return { ...prevState, [e.target.name]: value };
        });
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { from, message, subject, name } = emailInfo;

        try {
            await sendEmail({ from, message, subject, name });

            console.log('EMAIL SENT');
        } catch (error) {
            if (error instanceof Error) {
                console.log('Error: ', error.message);
            } else {
                console.log('Unknown Error: ', error);
            }
        }
    };

    return (
        <form className='flex flex-col gap-2' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input onChange={handleInputChange} type='text' id='name' name='name' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='from'>Email</label>
                <input onChange={handleInputChange} type='email' id='from' name='from' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='subject'>Subject</label>
                <input onChange={handleInputChange} type='text' id='subject' name='subject' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='message'>Message</label>
                <input onChange={handleInputChange} type='text' id='message' name='message' />
            </div>
            <button>Submit</button>
        </form>
    );
};
