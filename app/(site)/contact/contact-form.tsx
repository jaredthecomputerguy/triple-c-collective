'use client';

import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { sendEmail } from '@/app/lib/send-email';
import { useToast } from '@/app/lib/use-toast';

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
    const [emailIsSending, setEmailIsSending] = useState(false);

    const { toast } = useToast();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;

        setEmailInfo((prevState) => {
            return { ...prevState, [e.target.name]: value };
        });
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setEmailIsSending(true);

        const { from, message, subject, name } = emailInfo;

        if (!from || !message || !subject) {
            return;
        }

        try {
            await sendEmail({ from, message, subject, name });
            toast({
                title: 'Your message was sent.',
                duration: 2000,
            });
            setEmailIsSending(false);
            setEmailInfo({
                from: '',
                message: '',
                subject: '',
                name: '',
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log('Error: ', error.message);
                toast({ title: 'Something went wrong...', duration: 2000, variant: 'destructive' });
                setEmailIsSending(false);
            } else {
                console.log('Unknown Error: ', error);
            }
        }
    };

    return (
        <form className='flex flex-col gap-2 py-4' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-1'>
                <label className='text-primary-purple font-semibold' htmlFor='name'>
                    Name
                </label>
                <input
                    className='p-2 rounded border-2 border-gray-500 outline-none focus:outline-primary-purple placeholder:text-gray-600'
                    onChange={handleInputChange}
                    type='text'
                    id='name'
                    autoComplete='name'
                    defaultValue={emailInfo.name}
                    name='name'
                    placeholder='Jane Doe'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-primary-purple font-semibold' htmlFor='from'>
                    Email
                </label>
                <input
                    className='p-2 rounded border-2 border-gray-500 outline-none focus:outline-primary-purple placeholder:text-gray-600'
                    required
                    min='1'
                    max='100'
                    defaultValue={emailInfo.from}
                    onChange={handleInputChange}
                    type='email'
                    id='from'
                    name='from'
                    placeholder='janedoe@example.com'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-primary-purple font-semibold' htmlFor='subject'>
                    Subject
                </label>
                <input
                    className='p-2 rounded border-2 border-gray-500 outline-none focus:outline-primary-purple placeholder:text-gray-600'
                    required
                    min='1'
                    max='100'
                    defaultValue={emailInfo.subject}
                    onChange={handleInputChange}
                    type='text'
                    id='subject'
                    name='subject'
                    placeholder='Questions, Comments, Concerns...'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-primary-purple font-semibold' htmlFor='message'>
                    Message
                </label>
                <textarea
                    className='p-2 rounded border-2 border-gray-500 outline-none focus:outline-primary-purple placeholder:text-gray-600 mb-2'
                    required
                    onChange={handleInputChange}
                    defaultValue={emailInfo.message}
                    rows={5}
                    id='message'
                    name='message'
                    placeholder='Enter your message here...'
                />
            </div>
            <button
                className='px-6 py-2 rounded bg-primary-purple md:text-xl transition-all text-white font-semibold hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 outline-none focus:outline-primary-purple active:outline-primary-purple disabled:bg-primary-purple/50'
                disabled={emailIsSending}>
                {emailIsSending ? 'Sending...' : 'Send message'}
            </button>
        </form>
    );
};