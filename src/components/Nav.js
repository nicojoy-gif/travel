import React, { useState } from 'react';
import logo from '../Assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <nav className=" p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-black text-lg ml-2 font-semibold relative">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 mix-blend-overlay rounded-full cursor-pointer"
              style={{ mixBlendMode: 'inherit' }}
            />
          </div>
        </div>
        <button
          className="text-black focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex text-black font-semibold text-lg space-x-12  items-center">
         
        <Link to="#" className="">
          Destinations
        </Link>
        <Link to="#" className="   ">
          Hotels
        </Link>
        <Link to="#" className="">
          Flights
        </Link>
        <Link to="#" className="">
        Bookings
          </Link>
          <Link to="#" className="">
            Login
          </Link>
          <Link to="#" className=" border-2 rounded-lg border-black px-3 py-1">
           Sign up
          </Link>
          <Link>
          <select id="lang" name="Language" className='bg-inherit border-none outline-none text-lg font-semibold'>
    <option value="EN" className='text-lg font-semibold'>EN</option>
    <option value="FR" className='text-lg font-semibold'>FR</option>
    <option value="SP" className='text-lg font-semibold'>SP</option>
   
  </select>
          </Link>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden block space-y-6 text-black font-semibold text-lg text-start mt-4 justify-start items-start  mx-2`}>
        
        <Link to="#" className="block    ">
          Destinations
        </Link>
        <Link to="#" className="block  ">
          Hotels
        </Link>
        <Link to="#" className="block ">
          Flights
        </Link>
        <Link to="#" className="block  ">
        Bookings
          </Link>
          <Link to="#" className="block  ">
            Login
          </Link>
          <Link to="#" className="block ">
           Sign up
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
