import React from 'react'
import Header from './Header'
import one from '../Assets/one.jpg'
import two from '../Assets/twoo.jpg'
import three from '../Assets/thr.jpg'
import { FaLocationArrow } from 'react-icons/fa'
function Selling() {
  return (
    <div className='bg-white container mx-auto lg:h-5/6 h-full  flex flex-col items-center justify-center'>
<Header category="Top Selling" title="Top Destinations" ></Header>

<section className='grid lg:grid-cols-3 container mx-auto lg:w-5/6  w-full items-center gap-12 md:grid-cols-2 my-12 grid-cols-1 justify-items-center'> 
<div className=' md:w-80 w-5/6 h-72 shadow-xl mx-5 rounded-xl'>
<img src={one} alt='rome' className='h-48 w-full rounded-t-xl'/>
<div>
    <div className='flex text-gray-600 font-semibold items-center justify-between mx-5 my-3'>
        <p>Rome, Italy</p>
        <p>$5,42k</p>
    </div>
    <div className='flex mx-5 my-3 items-center'>
        <FaLocationArrow size={10}/>
        <p className='px-2 text-gray-600 text-sm font-semibold'>10 Days Trip</p>
    </div>
</div>
</div>
<div className='  md:w-80 w-5/6 h-72 shadow-xl rounded-xl'>
<img src={two} alt='rome' className='h-48 w-full rounded-t-xl'/>
<div>
    <div className='flex text-gray-600 font-semibold items-center justify-between mx-5 my-3'>
        <p>London, UK</p>
        <p>$4.2k</p>
    </div>
    <div className='flex mx-5 my-3 items-center'>
        <FaLocationArrow size={10}/>
        <p className='px-2 text-gray-600 text-sm font-semibold'>12 Days Trip</p>
    </div>
</div>
</div>
<div className='  md:w-80 w-5/6 h-72 shadow-xl rounded-xl'>
<img src={three} alt='rome' className='h-48 w-full rounded-t-xl'/>
<div>
    <div className='flex text-gray-600 font-semibold items-center justify-between mx-5 my-3'>
        <p>Full Europe</p>
        <p>$15k</p>
    </div>
    <div className='flex mx-5 my-3 items-center'>
        <FaLocationArrow size={10}/>
        <p className='px-2 text-gray-600 text-sm font-semibold'>28 Days Trip</p>
    </div>
</div>
</div>
</section>
    </div>
  )
}

export default Selling