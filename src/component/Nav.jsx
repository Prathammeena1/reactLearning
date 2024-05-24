import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='flex  w-full py-5 items-center gap-3'>
            <NavLink className={(e)=> e.isActive ?  "font-medium text-lg text-blue-500 " : ""} to="/">Home</NavLink>
            <NavLink className={(e)=> e.isActive ?  "font-medium text-lg text-blue-500 " : ""} to="/about">About</NavLink>
        </div>
    )
}

export default Nav