import React from 'react'
import { useState } from 'react'

const NewNavber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
     setIsOpen(!isOpen);
    }
  return (
    <nav className='bg-green-400 p-6'>
    <div className='flex items-center justify-between'>
        <div>
          <a href="#">
          <img  className='w-14 h-14 rounded-full'src="https://static.vecteezy.com/system/resources/previews/027/425/860/original/ngo-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt="logo" />

          </a>
        </div>

        <div className="md:hidden">
          <button className='text-black ' onClick={toggleMenu}>
            <svg 
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6'
            strokeWidth='4'



            >
              <path d='M4 6h16M4 12h16M4 18h16' ></path>

            </svg>
          </button>
        </div>

        <ul className='hidden md:flex space-x-4 cursor-pointer bg-gray'>
           <li><a href="#" className='text-black font-semibold'>About Us</a></li>
           <li><a href="#" className='text-black font-semibold'>Our Services</a></li>
           <li><a href="#" className='text-black font-semibold'>Our Events</a></li>
           <li><a href="#" className='text-black font-semibold'>Our Recognition</a></li>
           <li><a href="#" className='text-black font-semibold'>Contact Us</a></li>
        </ul>

    </div>
    {isOpen ?(
       <ul className='flex-col md:hidden bg-gray-200 w-full '>
       <li><a href="#" className='text-black font-semibold'>About Us</a></li>
       <li><a href="#" className='text-black font-semibold'>Our Services</a></li>
       <li><a href="#" className='text-black font-semibold'>Our Events</a></li>
       <li><a href="#" className='text-black font-semibold'>Our Recognition</a></li>
       <li><a href="#" className='text-black font-semibold'>Contact Us</a></li>
    </ul>


    ) :null}


</nav>
)
}

export default NewNavber