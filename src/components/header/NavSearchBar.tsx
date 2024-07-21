import React from "react";

const NavSearchBar: React.FunctionComponent = () => {
    return (
        <div className='fixed top-5 right-5'>
            <input type="text" className='bg-slate-400 rounded-lg' />
            <div className='flex justify-between'>
                <h1>Filter By</h1>
                <h1>Order By</h1>
            </div>
        </div>
    )
}

export default NavSearchBar;