// ReusableHeader.js

import React from 'react';

const Header = ({ category, title }) => {
  return (
    <header className='text-center my-5'>
      <h3 className='text-gray-700 uppercase font-semibold py-2'>{category}</h3>
      <h1 className='font-bold text-4xl text-cyan-950'>{title}</h1>
    </header>
  );
};

export default Header;
