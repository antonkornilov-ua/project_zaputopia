import Nav from '@Components/Nav';
import Provider from '@Components/Provider';
import '@styles/globals.css';
import ThemeAppProvider from '@Components/ThemeProvider';
import Wallpaper from '@Components/Wallpaper';

export const metadata = {
    title: 'Zaputopia',
    description: 'Discover ai prompts',
};


const RootLayout = ({ children }) => {
    
    return (
        <html lang='en' suppressHydrationWarning>
            <Provider>
                <body>
                    <ThemeAppProvider>
                        <Wallpaper/>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                    </ThemeAppProvider>
                </body>
            </Provider>
        </html>
    );
};

export default RootLayout;
