import React from 'react';
import NavBarBurguerMenu from './BurguerMenu.tsx';
import NavFilters from './NavFilters.tsx';
import NavBar from './NavBar.tsx';

const Header: React.FunctionComponent = () => {

    return (
        <NavBar>
            <>
                <NavBarBurguerMenu />
                <NavFilters />
            </>
        </NavBar>
    );
}

export default Header; 