import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Wallpaper from '@/Components/Wallpaper';

jest.mock('next-themes', () => ({
    useTheme: () => ({ theme: 'light' }),
}));

describe('Wallpaper component', () => {
    test('should render the wallpaper with the correct theme class for light theme', () => {
        render(<Wallpaper />);
        const wallpaperElement = document.querySelector('.main');
        expect(wallpaperElement).toBeInTheDocument();
    });

    test('should render the wallpaper with the correct theme class for dark theme', () => {
        // Change to dark theme
        jest.spyOn(require('next-themes'), 'useTheme').mockReturnValue({ theme: 'dark' });
        render(<Wallpaper />);
        const wallpaperElement = document.querySelector('.dark_main');
        expect(wallpaperElement).toBeInTheDocument();
    });
});
