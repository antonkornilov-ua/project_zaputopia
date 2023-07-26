'use client';
/**
 * Wallpaper Component:
 *
 * This component represents a wallpaper with a gradient effect. It uses the `useTheme` hook from the `next-themes`
 * library to dynamically switch between light and dark themes. The component renders a gradient effect that changes
 * based on the current theme. When the theme is set to 'light', the gradient is displayed with light colors, and when
 * the theme is set to 'dark', the gradient is displayed with dark colors.
 *
 * The component fetches the current theme using the `useTheme` hook and assigns the appropriate CSS class to the
 * `div` element based on the theme. This allows the gradient to change dynamically when the user toggles the theme.
 *
 * Note: The component assumes that the parent application has wrapped it with the `ThemeProvider` from the
 * `next-themes` library to enable theme switching.
 */

import { useTheme } from 'next-themes';

const Wallpaper = () => {
    const { theme } = useTheme();
    //   console.log(theme);

    return (
        <div className={theme === 'light' ? 'main' : 'dark_main'}>
            <div className='gradient' />
        </div>
    );
};

export default Wallpaper;
