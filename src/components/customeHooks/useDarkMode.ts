import { useEffect, useState } from "react";

const useDarkMode = (): [boolean, () => void] => {
    const [darkMode, setDarkMode] = useState<boolean>(() : boolean => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true' ? true : false;
    });

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    return [darkMode, handleDarkMode];
}

export default useDarkMode;