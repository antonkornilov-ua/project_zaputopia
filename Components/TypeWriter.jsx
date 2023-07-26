'use client';
/**
 * TypeWriter Component:
 *
 * This component displays a typewriter effect that cycles through an array of words. It takes an array of `words` as a prop,
 * and it shows one word at a time in an animated typewriter style. The `words` prop should be an array of objects,
 * each having a `suffix` property that represents the word to be displayed.
 *
 * The component uses the `useState` and `useEffect` hooks to manage the current index of the word being displayed and
 * to automatically cycle through the words at a specified interval (default: 4000ms or 4 seconds).
 */

import { useEffect, useState } from 'react';

const TypeWriter = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const incrementWord = () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        };
        const id = setInterval(incrementWord, 4000);
        return () => clearInterval(id);
    }, [words]);

    return (
        <div
            className=' inline-block animate-typing border-r-4 
                    border-black dark:border-gray-50'>
            {words[currentWordIndex].suffix}
        </div>
    );
};

export default TypeWriter;
