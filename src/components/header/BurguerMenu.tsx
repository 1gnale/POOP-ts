import React from "react";
import NavItem from "./NavItem";
import SwitchButton from "../switchButton/switchButton";
import SunIcon from "../../assets/icons/sun";
import MoonIcon from "../../assets/icons/moon";
import useMenu from '../customeHooks/useMenu.ts';
import useDarkMode from '../customeHooks/useDarkMode.ts';




const NavBarBurguerMenu: React.FunctionComponent = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenu();
    const [darkMode, handleDarkMode] = useDarkMode();

    const darkModeIcon = darkMode === true ? <SunIcon /> : <MoonIcon />;

    return (
        <div>
            <button className="navbar-burger flex items-center fixed top-3 left-3  text-blue-600 p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <h1 className="text-4xl text-amber-400 dark:text-slate-500">☰</h1>
            </button>
            <ul className={`mx-auto mt-14 items-center w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <SwitchButton checked={darkMode} onChange={handleDarkMode} textOrIcon={darkModeIcon} />
                <li><NavItem buttonText='Home' /></li>
                <li><NavItem buttonText='Login/account' /></li>
                <li><NavItem buttonText='About' /></li>
            </ul>
        </div>
    )
}

export default NavBarBurguerMenu;