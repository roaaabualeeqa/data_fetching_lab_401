// 1. create the provider , that will provide the global state to my app

import { createContext, useState, useEffect } from "react";
// 1.1  create the context 
export const ThemeContext = createContext();
// 1.2  create the context wrapper // provider


export default function ThemeWrapper({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);


    function initialThemeHandler() {
        if (!localStorage.getItem("isDarkTheme")) {
            localStorage.setItem("isDarkTheme", `true`);
            document.querySelector("body").classList.add("dark");
            setIsDarkTheme(true);
        } else {
            const isDarkTheme = JSON.parse(
                localStorage.getItem("isDarkTheme")
            );
            isDarkTheme && document.querySelector("body").classList.add("dark");
            setIsDarkTheme(() => {
                return isDarkTheme;
            });
        }
    }

    function toggleThemeHandler() {
        const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
        setIsDarkTheme(!isDarkTheme);
        toggleDarkClassToBody();
        setValueToLocalStorage();
    }

    function toggleDarkClassToBody() {
        document.querySelector("body").classList.toggle("dark");
    }

    function setValueToLocalStorage() {
        localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
    }

    const globalState =
    {
        isDarkTheme: true,
        toggleThemeHandler
    }

useEffect(() => initialThemeHandler());

return (
    <>
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    </>
)
}