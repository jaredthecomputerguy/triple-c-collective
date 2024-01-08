'use client';

import { useSearchParams } from 'next/navigation';
import { ageConsentAction } from './actions';
import { CloseIcon } from '../_components/icons/close-icon';
import { useState } from 'react';

export const AgeConsentForm = () => {
    const searchParams = useSearchParams();
    const redirect_uri = searchParams?.get('redirect_uri') ?? '/';
    const [checked, setChecked] = useState(false);

    return (
        <section className='bg-[#fefefe]/75 text-black mx-6 py-6 px-4 md:px-6 md:py-8 text-center rounded'>
            <h1 className='text-primary-purple text-3xl md:text-5xl uppercase font-bold font-logo pb-4'>
                Triple C Collective
            </h1>
            <span className='text-2xl md:text-4xl font-semibold'>Verify Your Age</span>
            <form className='flex flex-col items-center space-y-6' action={ageConsentAction}>
                <input type='hidden' name='redirectUri' value={redirect_uri} />
                <div className='flex gap-2 text-sm md:text-base items-center relative'>
                    <input
                        className='text-primary-purple bg-transparent rounded border-2 border-gray-800 appearance-none w-4 h-4 checked:bg-primary-purple/80'
                        type='checkbox'
                        name='rememberMe'
                        id='rememberMe'
                        value={checked ? 'checked' : ''}
                        onClick={() => setChecked((prevState) => !prevState)}
                    />

                    {checked && (
                        <CloseIcon
                            className='absolute top-[2px] text-white w-4 h-4 left-0 pointer-events-none'
                            strokeWidth={3}
                        />
                    )}
                    <label htmlFor='rememberMe'>Remember Me</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <button
                        className='px-6 py-2 rounded bg-primary-purple md:text-xl text-white font-semibold hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 outline-none focus:outline-primary-purple active:outline-primary-purple'
                        type='submit'>
                        Yes
                    </button>
                    <a
                        className='px-6 py-2 rounded bg-primary-purple md:text-xl text-white font-semibold hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 outline-none focus:outline-primary-purple active:outline-primary-purple'
                        href='https://www.google.com'>
                        No
                    </a>
                </div>
            </form>
        </section>
    );
};
