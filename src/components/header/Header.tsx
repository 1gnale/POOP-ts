import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import SwitchButton from '../switchButton/switchButton.tsx';
import SunIcon from '../../assets/icons/sun.tsx';
import MoonIcon from '../../assets/icons/moon.tsx';

const Header: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(() : boolean => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true' ? true : false;
    });

    const darkModeIcon = darkMode ? <SunIcon/> : <MoonIcon />;

    const handleClick = () => {
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

    return (
        <nav className="fixed top-0 px-4 py-4 flex min-h-20 justify-between min-w-full items-center bg-white dark:bg-slate-900 z-30">
            <div className='fixed top-5 right-5'>
                <input type="text" className='bg-slate-400 rounded-lg' />
                {/* Abstraer searchbar */}
                <div className='flex justify-between'>
                    <h1>Filter By</h1>
                    <h1>Order By</h1>
                </div>
            </div>
            <div>
                <button className="navbar-burger flex items-center fixed top-3 left-3  text-blue-600 p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <h1 className="text-4xl text-amber-400 dark:text-slate-500">☰</h1>
                </button>
                <ul className={`mx-auto mt-14 items-center w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <SwitchButton checked={darkMode} onChange={handleClick} textOrIcon={darkModeIcon}/>
                    <li><NavItem buttonText='Home'/></li>
                    <li><NavItem buttonText='Login/account'/></li>
                    <li><NavItem buttonText='About'/></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header; 