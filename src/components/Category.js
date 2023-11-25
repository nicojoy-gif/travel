import React from 'react'
import hero from '../Assets/hero.png'
import satelite from '../Assets/satelite.png'
import flight from '../Assets/flight.png'
import setting from '../Assets/setting.png'
import speaker from '../Assets/speaker.jpeg'
import {FaGear} from 'react-icons/fa'
import Header from './Header'
function Category() {
  return (
    <div>
        <div className='bg-white container lg:h-5/6 h-full mx-auto my-12 relative'>
<div className='absolute right-1 hidden md:block'>
    <img src={hero} alt='vector'/>
</div>
<Header category="Category" title="We Offer Best Services">

</Header>
<main className='flex justify-center items-center'>
<section className='grid lg:grid-cols-4 py-5 mt-5 md:grid-cols-2 grid-cols-1 gap-8'>
<div className='rounded-xl relative md:w-60 h-64 w-5/6 mx-auto shadow-xl z-40 bg-white'>
<div className='relative z-10 mb-8'>
    <div className='flex justify-center items-center'>
        <img src={satelite} alt='satelitte' className='h-12 w-12 z-20 mix-blend-multiply'/>
    </div>
    <div className='absolute z-0 top-5 right-16'>
<div className='bg-orange-200 rounded-sm rounded-br-2xl w-10 hidden lg:block z-10 h-10 '>
</div>
</div>
</div>
<div>
    <h3 className='text-cyan-950 py-3 font-bold text-lg'>Calculated Weather</h3>
    <p className='font-semibold text-sm px-7  text-gray-600'>Built Wicket longer admire do barton vanity itself do in it.</p>
</div>
</div><div className='rounded-xl relative md:w-60 h-64 w-5/6 mx-auto shadow-xl z-50 bg-white'>
 
  <div className='relative z-10 mb-6'>
    <div className='flex justify-center items-center align-middle m-0'>
      <img src={flight} alt='flight' className='h-12 w-16 z-20 mix-blend-multiply' />
    </div>
    <div className='absolute z-0 top-5 right-16'>
      <div className='bg-orange-200 rounded-sm rounded-bl-2xl w-10 hidden lg:block z-10 h-10'></div>
    </div>
  </div>

  <div className='absolute z-0 -bottom-3'>
    <div className='bg-lime-600 w-20 h-20  rounded-tl-full z-0 rounded-tr-full rounded-br-full'></div>
  </div>
<div>
    <h3 className='text-cyan-950 py-3 font-bold text-lg'>Best Flights</h3>
    <p className='font-semibold text-sm px-7  text-gray-600'>Engrossed listening.<br />Park gate sell they west hard for the.</p>
</div>
</div>
<div className='rounded-xl relative md:w-60 h-64 w-5/6 mx-auto shadow-xl z-40 bg-white'>
<div className='relative z-10 mb-8'>
    <div className='flex justify-center items-center'>
        <img src={speaker} alt='speaker' className='h-12 w-16 z-20 mix-blend-multiply'/>
    </div>
    <div className='absolute z-0 top-5 right-16'>
<div className='bg-orange-200 rounded-sm rounded-tr-2xl hidden lg:block w-10 z-10 h-10 '>
</div>
</div>
</div>
<div>
    <h3 className='text-cyan-950 py-3 font-bold text-lg'>Local Events</h3>
    <p className='font-semibold text-sm px-7  text-gray-600'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
</div>
</div>
<div className='rounded-xl relative md:w-60 h-64 w-5/6 mx-auto shadow-xl z-40 bg-white'>
<div className='relative z-10 mb-8'>
    <div className='flex justify-center items-center'>
        
        <img src={setting} alt='satelitte' className='h-12 w-12 z-20 mix-blend-multiply'/>
    </div>
    <div className='absolute z-0 top-5 right-16'>
<div className='bg-orange-200 rounded-sm hidden lg:block rounded-tl-2xl w-10 z-10 h-10 '>
</div>
</div>
</div>
<div>
    <h3 className='text-cyan-950 py-3 font-bold text-lg'>Customization</h3>
    <p className='font-semibold text-sm px-7  text-gray-600'>We deliver outsourced aviation services for military customers.</p>
</div>
</div>
</section>
</main>
        </div>
    </div>
  )
}

export default Category