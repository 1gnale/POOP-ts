import React from "react"

interface CardProps {
    children: React.ReactNode;
    title: string;
}

const DesktopCard: React.FunctionComponent<CardProps> = ({ children, title }) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default DesktopCard