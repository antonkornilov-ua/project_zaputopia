'use client'
import { ThemeProvider } from "next-themes"

const ThemeAppProvider = ({ children }) => {
    return <ThemeProvider defaultTheme='system' storageKey="theme" attribute='class'>{children}</ThemeProvider>
} 
export default ThemeAppProvider