'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'


const ThemeButton = () => {
    const [ mounted, setMounted ] = useState(false);
    const {resolvedTheme, setTheme} = useTheme()

    useEffect(() => setMounted(true), []);

    if(!mounted) return null

    return (
        <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='rounded-full p-2 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-700 '
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? (
                <SunIcon className='h-7 w-7 text-primary-orange ' />
            ) : (
                <MoonIcon className='h-7 w-7 text-gray-900 hover:text-gray-50' />
            )}
        </button>
    );
}

export default ThemeButton