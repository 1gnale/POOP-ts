import React from "react"

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const DesktopCard: React.FunctionComponent<CardProps> = ({ children, title }) => {
    return (
        <div className="max-w-sm rounded-xl shadow-lg h-96 overflow-auto scrollbar-custom text-center bg-slate-50">
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            {children}
        </div>
    )
}

export default DesktopCard