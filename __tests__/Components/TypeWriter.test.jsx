import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TypeWriter from '@/Components/TypeWriter';

describe('Test "TypeWriter" component', () => {
    beforeAll(() => {
        jest.useFakeTimers(); // Use fake timers to control time-related behavior in the test
    });

    afterAll(() => {
        jest.useRealTimers(); // Restore real timers after the test
    });

    it('should cycle through the words', () => {
        const words = [
            {
                suffix: 'Ideas',
            },
            {
                suffix: 'Prompts',
            },
            {
                suffix: 'Concepts',
            },
            {
                suffix: 'Inspirations',
            },
            {
                suffix: 'Innovations',
            },
        ];

        render(<TypeWriter words={words} />);

        // Initial word Ideas
        expect(screen.getByText('Ideas')).toBeInTheDocument();

        // Advance to the next word (Prompts) after 4 seconds (4000ms)
        act(() => {
            jest.advanceTimersByTime(4000);
        });
        expect(screen.getByText('Prompts')).toBeInTheDocument();

        // Advance to the next word (Concepts) after 4 seconds (4000ms)
        act(() => {
            jest.advanceTimersByTime(4000);
        });
        expect(screen.getByText('Concepts')).toBeInTheDocument();

        // Advance to the next word (Inspirations) after 4 seconds (4000ms)
        act(() => {
            jest.advanceTimersByTime(4000);
        });
        expect(screen.getByText('Inspirations')).toBeInTheDocument();

        // Advance to the next word (Innovations) after 4 seconds (4000ms)
        act(() => {
            jest.advanceTimersByTime(4000);
        });
        expect(screen.getByText('Innovations')).toBeInTheDocument();

        // After reaching the last word (Innovations), it should cycle back to the first word (Ideas)
        act(() => {
            jest.advanceTimersByTime(4000);
        });
        expect(screen.getByText('Ideas')).toBeInTheDocument();
    });
});
