import React from 'react'
import hero from '../Assets/hero.png'
import { FaLocationArrow } from 'react-icons/fa'
function Subscribe() {
  return (
    <div className='container relative lg:h-5/6 h-full py-8 mx-auto' >
<div className='bg-gray-50 flex justify-center flex-col items-center relative z-50 w-5/6 mx-auto h-80  rounded-tl-[100px] rounded-lg'>
<div>
    <h1 className='text-blue-900 font-bold text-xl w-4/6 mx-auto py-8 text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h1>
<div>
    <input type='text' placeholder='Your email' className='py-2 w-72 px-5 rounded-lg'/>
<button className='mx-4 bg-orange-600 rounded-lg p-2 text-white'>Subscribe</button>
</div>
</div>

<div className='bg-indigo-400 absolute -top-4 right-0 flex justify-center items-center rounded-full h-8 w-8'>
<FaLocationArrow color='white'/>
</div>
</div>
<div>
<img src={hero} alt='hero' className='absolute right-0 bottom-48'/>
</div>
    </div>
  )
}

export default Subscribe