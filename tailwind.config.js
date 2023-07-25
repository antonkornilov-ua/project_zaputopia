/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './Components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                typing: 'typing 2s steps(5), blink 1s infinite',
            },
            keyframes: {
                typing: {
                    from: {
                        width: '0',
                    },
                    to: {
                        width: '5ch',
                    },
                },
                blink: {
                    from: {
                        'border-right-color': 'transparent',
                    }
                },
            },
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'primary-orange': '#FF5722',
            },
        },
    },
    plugins: [],
};
