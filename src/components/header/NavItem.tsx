import React from "react";

interface NavItemProps {
    buttonText: string;
    // link: string;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({buttonText}) => {
    return (
        <div>
            <p className="text-sm text-gray-400 hover:text-gray-500">{buttonText}</p>
        </div>
    );
}

export default NavItem;