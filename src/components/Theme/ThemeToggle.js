import {createContext, useEffect, useState} from "react";

const ThemeContext = createContext();
/*
Gets the current theme, if there is not any theme, will check preferred scheme, if not dark, will set to light (as default)
 */
const getTheme = () => {
    const theme = localStorage.getItem('theme');
    //No theme - first time
    if (!theme) {
        //If user prefers dark scheme
        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            localStorage.setItem('theme', 'dark');
            return 'dark';
        } // white as a default
        else {
            localStorage.setItem('theme', 'light');
            return 'light';
        }
    } //Has theme
    else {
        return theme;
    }
}
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getTheme);

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        }
    };
    useEffect(() => {
        console.log('ThemeProvider mounted: '+theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};
