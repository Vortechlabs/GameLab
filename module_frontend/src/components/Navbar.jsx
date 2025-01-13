import React from 'react';
import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

function Navbar () {
  

  return (
    <nav className='fixed top-0 left-0 right-0 bg-transparent backdrop-blur-3xl shadow z-50 flex justify-between items-center p-6'>
      <div className='flex h-7 gap-2'>
        <img src={logo} alt="logo" />
        <h1 className='text-2xl font-medium flex items-center'>GameLab</h1>
      </div>
      <div className='hidden md:flex items-center gap-5 font-bold'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'hidden' : 'hidden'}>Home</NavLink>
      <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#59cedd]' : 'text-black dark:text-white hover:text-[#41aab8]'}>Home</NavLink>
        <NavLink to="/upload-game" className={({ isActive }) => isActive ? 'text-[#59cedd]' : 'text-black dark:text-white hover:text-[#41aab8]'}>Upload Game</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-[#59cedd]' : 'text-black dark:text-white hover:text-[#41aab8]'}>FaQ</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#59cedd]' : 'text-black dark:text-white hover:text-[#41aab8]'}>Contact</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-[#59cedd]' : 'text-black dark:text-white hover:text-[#41aab8]'}>Login</NavLink>
      </div>
      
    </nav>
  );
};

export default Navbar;