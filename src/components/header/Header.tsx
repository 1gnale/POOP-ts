import React from 'react';
import NavBarBurguerMenu from './BurguerMenu.tsx';
import NavBar from './NavBar.tsx';

const Header: React.FunctionComponent = () => {

    return (
        <NavBar>
            <>
                <NavBarBurguerMenu />
            </>
        </NavBar>
    );
}

export default Header; 