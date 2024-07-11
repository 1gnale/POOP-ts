import React from "react"
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const MobileCard: React.FunctionComponent<CardProps> = ({ children, title }) => {
    return (
        <div className="mobileCard absolute w-full h-full rounded-2xl cursor-pointer select-none transition-transform duration-500 max-w-sm overflow-hidden shadow-lg text-center "
         style={{ transform: `translateZ(calc(-30px * var(--i))) translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)))`, filter: 'drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5))' }}>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            {children}
        </div>
    )
}

export default MobileCard