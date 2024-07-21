import React from "react";

interface SwitchButtonProps {
    textOrIcon: string | JSX.Element;
    checked: boolean;
    onChange: () => void;
}



const SwitchButton: React.FunctionComponent<SwitchButtonProps> = ({ checked, onChange, textOrIcon }) => {
    return (
        <div className="flex justify-between"> 
                <label htmlFor="darkmode" className="overflow-hidden relative p-1 bg-slate-300 w-12 h-6 rounded-full cursor-pointer">
                    <input onClick={onChange} checked={checked} id="darkmode" type="checkbox" className="peer sr-only" />
                    <div className="w-full h-full peer-checked:bg-amber-300 absolute top-0 left-0"></div>
                    <div className="w-4 h-4 bg-slate-500 dark:bg-white rounded-full peer-checked:translate-x-6 transition-all"></div>
                </label>
                <p className="text-slate-600 dark:text-white font-bold">{textOrIcon}</p>
            </div>
    )
}

export default SwitchButton;