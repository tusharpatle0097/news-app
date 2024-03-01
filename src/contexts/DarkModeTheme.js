import React, { createContext, useState,useEffect } from 'react';

export const EDDarkMode = createContext(null)

const DarkModeTheme = (prop) => {

    const [DarkModeEB, setDarkModeEB] = useState(() => {
        const storedValue = localStorage.getItem('darkMode');
        return storedValue === 'true';
      })

    const darkModeButton = () => {
        const newMode = !DarkModeEB;
        setDarkModeEB(newMode);
        localStorage.setItem('darkMode', newMode);
    }

    useEffect(() => {
        if (DarkModeEB) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [DarkModeEB]);

    const products = {
        DarkModeEB,
        darkModeButton
    }

    return (
        <>
            <EDDarkMode.Provider value={products}>
                {prop.children}
            </EDDarkMode.Provider>
        </>
    )
}

export default DarkModeTheme