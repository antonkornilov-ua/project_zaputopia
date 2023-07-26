'use client';
/**
 * ThemeAppProvider Component:
 *
 * This component is a wrapper that provides theme configuration for the application using the `ThemeProvider`
 * from the `next-themes` library. It allows you to set a default theme, storage key, and attribute for the application.
 * The `defaultTheme` prop defines the default theme, which can be 'light', 'dark', or 'system' (based on user's OS settings).
 * The `storageKey` prop is used to persist the user's theme preference in the browser's local storage, so it remains
 * consistent across page reloads. The `attribute` prop specifies how the theme will be applied to the application,
 * which can be 'class' to apply the theme as a class name to the root element, or 'data-theme' to use a data attribute.
 * By wrapping the entire application with `ThemeAppProvider`, you enable theme support for all its child components.
 */

import { ThemeProvider } from 'next-themes';

const ThemeAppProvider = ({ children }) => {
    return (
        <ThemeProvider defaultTheme='system' storageKey='theme' attribute='class'>
            {children}
        </ThemeProvider>
    );
};
export default ThemeAppProvider;
