import { render, screen,  } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ThemeButton from '@/Components/ThemeButton';



test('should render the theme icon', () => {
    render(<ThemeButton />);

    const themeIcon = screen.getByLabelText('Toggle Dark Mode');
    expect(themeIcon).toBeInTheDocument();
});

