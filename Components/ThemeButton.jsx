'use client';
/**
 * ThemeButton Component:
 *
 * This component represents a button that allows users to toggle between light and dark themes in the application.
 * It utilizes the `useTheme` hook from `next-themes` to access the current resolved theme and set the theme to either
 * 'light' or 'dark' based on the user's preference. The button displays a sun icon for the light theme and a moon icon
 * for the dark theme. When clicked, it will switch the theme accordingly. The component also handles the initial mount
 * state to prevent flickering during theme change by setting a `mounted` state to true after the initial rendering.
 */

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='rounded-full p-2 transition-colors hover:bg-gray-900/50 hover:text-gray-50 dark:hover:bg-gray-700 '
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? (
                <SunIcon className='h-7 w-7 text-primary-orange ' />
            ) : (
                <MoonIcon className='h-7 w-7 text-gray-900 hover:text-gray-50' />
            )}
        </button>
    );
};

export default ThemeButton;
