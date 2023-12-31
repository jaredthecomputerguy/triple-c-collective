'use client';

import { useState } from 'react';

import { BarsIcon } from './icons/BarsIcon';
import { CartIcon } from './icons/CartIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { CloseIcon } from './icons/CloseIcon';
import Image from 'next/image';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
];

export const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

    return (
        <>
            <header className='min-w-screen group sticky top-0'>
                <div className='bg-primary-purple px-4 py-2 flex justify-between text-sm text-[#fefefe]'>
                    <a
                        className='flex gap-2 items-center p-2 justify-center font-semibold rounded outline-none transition-all active:outline-white focus:outline-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10'
                        href='tel:707-701-4160'>
                        <PhoneIcon className='w-4 h-4' />
                        <span>(707) 701-4160</span>
                    </a>
                    <a
                        className='flex gap-2 items-center p-2 px-4 justify-center font-semibold rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white'
                        href='https://triplec.treez.io/onlinemenu/?customerType=ADULT'
                        target='_blank'>
                        <CartIcon className='w-4 h-4' />
                        <span>Shop now</span>
                    </a>
                </div>
                <div className='p-4 flex justify-between items-center relative bg-[#fefefe]'>
                    <a
                        className='font-logo text-primary-purple rounded font-bold text-xl sm:text-3xl uppercase p-2  transition-all outline-none focus:outline-primary-purple active:outline-primary-purple'
                        href='/'>
                        Triple C Collective
                    </a>
                    <button
                        className='md:hidden p-1 rounded hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200 transition-all outline-none focus:outline-primary-purple active:outline-primary-purple'
                        onClick={toggleMobileMenu}>
                        {showMobileMenu ? (
                            <CloseIcon className='w-8 h-8 text-primary-purple' />
                        ) : (
                            <BarsIcon className='w-8 h-8 text-primary-purple' />
                        )}
                    </button>
                    {showMobileMenu && (
                        <nav className='absolute top-16 text-center py-[6px] right-0 w-full bg-primary-purple text-white'>
                            <ul className='flex flex-col w-full bg-primary-purple'>
                                {LINKS.map((link) => (
                                    <NavLink href={link.href} label={link.label} key={link.href} />
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
    return (
        <li>
            <a
                className='outline-none focus:outline-white active:outline-white py-4 w-full block uppercase font-semibold hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10'
                href={href}>
                {label}
            </a>
        </li>
    );
};
