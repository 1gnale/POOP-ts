import React, { useState } from 'react';
import NavItem from './NavItem';

const Header: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    console.log(isMenuOpen);

    return (
        <nav className="fixed top-0 px-4 py-4 flex min-h-20 justify-between min-w-full items-center bg-white z-30">
            <div className='fixed top-5 right-5'>
                <input type="text" className='bg-slate-400 rounded-lg' />
                {/* Abstraer navbar */}
                <div className='flex justify-between'>
                    <h1>Filter By</h1>
                    <h1>Order By</h1>
                </div>
            </div>
            <div>
                <button className="navbar-burger flex items-center fixed top-3 left-3  text-blue-600 p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <h1 className="text-4xl text-amber-400">☰</h1>
                </button>
                <ul className={`mx-auto mt-14 items-center w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li><NavItem buttonText='Home'/></li>
                    <li><NavItem buttonText='Login/account'/></li>
                    <li><NavItem buttonText='About'/></li>
                    <li><h1>MODO OSCURO</h1></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header; 