import React from "react"

interface CardProps {
    children: React.ReactNode;
    title: string;
}

const MobileCard: React.FunctionComponent<CardProps> = ({ children, title }) => {
    return (
        <div className="mobileCard">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default MobileCard