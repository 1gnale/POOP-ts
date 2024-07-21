import React from "react";

interface NavBarProps {
    children: JSX.Element;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({ children }) => {
    return (
        <nav className="fixed top-0 px-4 py-4 flex min-h-20 justify-between min-w-full items-center bg-white dark:bg-slate-900 z-30">
            {children}
        </nav>
    );
}

export default NavBar;