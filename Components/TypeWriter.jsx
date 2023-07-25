'use client';


import { useEffect, useState } from 'react';

const TypeWriter = ({ words }) => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const incrementWord = () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1 ) % words.length)
        }
        const id = setInterval(incrementWord, 4000);
        return () => clearInterval(id)
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
