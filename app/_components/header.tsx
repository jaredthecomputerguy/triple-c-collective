'use client';

import { useState } from 'react';

import { BarsIcon } from './icons/BarsIcon';
import { CartIcon } from './icons/CartIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { CloseIcon } from './icons/CloseIcon';
import { ClockIcon } from './icons/ClockIcon';
import { LocationIcon } from './icons/LocationIcon';
import { link } from 'fs';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
];

export const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

    return (
        <header className='sticky top-0 shadow'>
            <div className='min-w-screen group sticky top-0 bg-primary-purple'>
                {/* Information Bar */}
                {/* Mobile View */}
                <div className='bg-primary-purple px-4 py-2 flex justify-between text-sm md:hidden text-[#fefefe]'>
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
                {/* Desktop View */}
                <div className='bg-primary-purple px-4 py-2 justify-between text-sm max-w-7xl mx-auto hidden md:flex text-[#fefefe]'>
                    <div className='flex gap-2 items-center p-2 justify-center font-semibold rounded'>
                        <ClockIcon className='w-4 h-4' />
                        <span>10am - 9:30pm</span>
                    </div>
                    <a
                        className='flex gap-2 items-center p-2 px-4 justify-center font-semibold rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white'
                        href='http://maps.google.com/?q=14196%20Lakeshore%20Dr%2C%20Clearlake%2C%20CA%2095422'
                        target='_blank'>
                        <LocationIcon className='w-4 h-4' />
                        <span>14196 Lakeshore Dr. Clearlake, CA 95422</span>
                    </a>
                    <a
                        className='flex gap-2 items-center p-2 px-4 justify-center font-semibold rounded hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10 outline-none active:outline-white focus:outline-white'
                        href='https://triplec.treez.io/onlinemenu/?customerType=ADULT'
                        target='tel:707-701-4160'>
                        <PhoneIcon className='w-4 h-4' />
                        <span>(707) 701-4160</span>
                    </a>
                </div>
                {/* Header */}
            </div>
            <div className='p-4 max-w-7xl mx-auto flex justify-between items-center relative bg-[#fefefe]'>
                <a
                    className='font-logo text-primary-purple rounded font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase p-2 transition-all outline-none focus:outline-primary-purple active:outline-primary-purple'
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
                    <nav className='absolute md:hidden top-16 text-center py-[6px] right-0 w-full bg-primary-purple text-white'>
                        <ul className='flex flex-col w-full bg-primary-purple'>
                            {LINKS.map((link) => (
                                <MobileNavLink href={link.href} label={link.label} key={link.href} />
                            ))}
                        </ul>
                    </nav>
                )}
                <nav className='hidden md:block'>
                    <ul className='flex md:gap-2 lg:gap-4'>
                        {LINKS.filter((link) => link.label !== 'Home').map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
    return (
        <li>
            <a
                className='text-primary-purple font-semibold lg:text-xl hover:underline py-2 px-4 active:underline focus:underline outline-none focus:outline-primary-purple active:outline-primary-purple rounded'
                href={href}>
                {label}
            </a>
        </li>
    );
};

const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    return (
        <li className=''>
            <a
                className='outline-none focus:outline-white active:outline-white py-4 w-full block uppercase font-semibold hover:bg-white/10 transition-all focus:bg-white/10 active:bg-white/10'
                href={href}>
                {label}
            </a>
        </li>
    );
};