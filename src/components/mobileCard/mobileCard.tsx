import React from "react"
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const MobileCard: React.FunctionComponent<CardProps> = ({ children, title }) => {
    return (
        <div className="mobileCard absolute w-full h-full rounded-2xl cursor-pointer select-none transition-transform duration-500 max-w-sm overflow-hidden shadow-xl text-center bg-slate-50">
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            {children}
        </div>
    )
}

export default MobileCard