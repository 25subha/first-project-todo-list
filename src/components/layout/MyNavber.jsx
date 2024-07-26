import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const MyNavber = () => {
    const NavItems = [
     {
        id:1,
        page:'About Us',
     },
     {
        id:1,
        page:'Our Services',
     },
     {
        id:1,
        page:'Our Events',
     },
     {
        id:1,
        page:'Our Recognition',
     },
     {
        id:1,
        page:'Contact Us',
     },
]



const [toggle, setToggle] = useState(false);

  return (
    <header className='md:px-12 px-4 bg-green-500 py-2 border-b-2 border-white fixed left-0 right-0 top-0 z-40' >
        <nav className='md:flex justify-between items-center '>
            <div><a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/027/425/860/original/ngo-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt="" className='h-16 w-16 rounded-full' />
                 </a>
            </div>
            <div className='relative'>
                <div className='absolute right-4 -top-10 md:hidden' onClick={()=>setToggle(!toggle)}>
                    {toggle ? <IoClose size={20} className='text-white'/> : <GiHamburgerMenu size={20} className='text-white'/>
 }
                </div>
                <ul className={`md:flex py-4 md:py-0 bg-green-200 md:static fixed  top-[82px] w-[60%] h-screen md:h-0 md:w-full z-[-60] items-center gap-6 transition-all duration-500 ${toggle ? 'left-0': '-left-full'}`} >
                    {NavItems.map((items,index) => {
                        return(
                            <li key={index}><a href="#" className='text-black font-semibold  md:gap-0 hover:text-gray-200 space-y-10'>{items.page}</a></li>
                        
                        )
                    })}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default MyNavber