'use client';

import { useTheme } from "next-themes";


const Wallpaper = () => {
    const {theme} = useTheme()
      console.log(theme);



    return (
        <div className={theme === 'light' ? 'main' : 'dark_main' }>
            <div className='gradient' />
        </div>
    );
};

export default Wallpaper;
