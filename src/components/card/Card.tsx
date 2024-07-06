import React from "react"

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({ children }) => {
    return (
        <div className="card">
            <h1>{"Titulo no encontrado"}</h1>
            {children}
        </div>
    )
}

export default Card