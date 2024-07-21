import React from 'react';
import NavBarBurguerMenu from './BurguerMenu.tsx';
import NavSearchBar from './NavSearchBar.tsx';
import NavBar from './NavBar.tsx';

const Header: React.FunctionComponent = () => {

    return (
        // abstraer navbar
        <NavBar>
            <>
                <NavBarBurguerMenu />
                <NavSearchBar />
            </>
        </NavBar>
    );
}

export default Header; 