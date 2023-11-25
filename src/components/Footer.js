import React from 'react';
import logo from '../Assets/logo.jpeg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import google from '../Assets/google.png';
import apple from '../Assets/apple.jpg';

function Footer() {
  return (
    <footer className="bg-white px-5 text-gray-600 text-start lg:w-5/6 w-full mx-auto font-semibold py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div className="flex   flex-col  items-start ">
  <img src={logo} alt='logo' className='mb-3 h-12 w-12 rounded-full' />
  <p className='text-sm w-full '>
    Book your trip in a minute, get full control for much longer.
  </p>
</div>

        {/* Column 2 */}
        <div className="">
          <h2 className="text-lg font-bold text-black mb-4">Company</h2>
          <ul className='space-y-1'>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="">
          <h2 className="text-lg font-bold text-black mb-4">Contact</h2>
          <ul className='space-y-1'>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="">
          <h2 className="text-lg font-bold text-black mb-4">More</h2>
          <ul className='space-y-1'>
            <li>Airline fees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className=" flex flex-col items-start justify-center lg:justify-start">
          <div className='flex space-x-5 mb-4'>
            <div className='h-12 w-12 rounded-full shadow-lg flex items-center justify-center'>
              <FaFacebook color='black' />
            </div>
            <div className='h-12 w-12 rounded-full shadow-lg flex items-center justify-center'>
              <FaInstagram color='black' />
            </div>
            <div className='h-12 w-12 rounded-full shadow-lg flex items-center justify-center'>
              <FaTwitter color='black' />
            </div>
          </div>
          <h2 className="text-lg pb-3 font-semibold">Discover our app</h2>
          <div className='flex space-x-3   '>
            <div className='m-0 rounded-2xl h-8'>
              <img src={google} className='rounded-2xl h-8 w-28' alt='google' />
            </div>
            <div className='m-0 rounded-2xl h-8'>
              <img src={apple} className='rounded-2xl h-8 w-28' alt='apple' />
            </div>
          </div>
        </div>
      </div>
      <p className='md:text-center  text-sm py-12'>All rights reserved @ jadoo.co</p>
    </footer>
  );
}

export default Footer;
