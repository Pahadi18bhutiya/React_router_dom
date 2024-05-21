import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='flex'>
        <div className='flex   space-x-4'>
            <NavLink className='hover:text-orange-500 text-[30px] font-bold mt-3 ml-20' to="/">Snap</NavLink>
            <NavLink className='hover:text-orange-500 mt-7' to="/Features">Feature</NavLink>
            <NavLink className='hover:text-orange-500 mt-7' to="/Carriers">Carrier</NavLink>
            <NavLink className='hover:text-orange-500 mt-7' to="/Company">Company</NavLink>
            <NavLink className='hover:text-orange-500 mt-7' to="/About">About</NavLink>

        </div>
        <div className='mt-6 ml-auto mr-11'>
            
            <NavLink className='hover:bg-gray-50 rounded-md mr-8 p-2' to="/Login">Log in</NavLink>
            <NavLink className='bg-orange-700 text-white p-2 rounded-md hover:bg-orange-800' to="/Signup">Sign up</NavLink>
        </div>
        </nav>
    </div>
  )
}

export default Navbar