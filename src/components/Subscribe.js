import React from 'react'
import hero from '../Assets/hero.png'
import { FaLocationArrow } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';

function Subscribe() {
  return (
    <div className='container relative lg:h-5/6 h-full py-12 mx-auto' >
<div className='bg-gray-50 flex justify-center flex-col items-center relative z-50 w-5/6 mx-auto h-80  rounded-tl-[100px] rounded-lg'>
<div>
    <h1 className='text-blue-900 font-bold text-xl w-4/6 mx-auto py-8 text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h1>
<div className='flex items-center justify-center'>
<div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <HiOutlineMail className="h-5 w-5 text-gray-400" />
      </span>
      <input
        type="text"
        placeholder="Your email"
        className="py-2 lg:w-80 md:w-64 w-56 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
<button className='mx-4 bg-orange-600 rounded-lg py-2 px-4 text-white'>Subscribe</button>
</div>
</div>

<div className='bg-indigo-400 absolute -top-4 right-0 flex justify-center items-center rounded-full h-8 w-8'>
<FaLocationArrow color='white'/>
</div>
</div>
<div className='hidden md:block'>
<img src={hero} alt='hero' className='absolute right-0 bottom-48'/>
</div>
    </div>
  )
}

export default Subscribe