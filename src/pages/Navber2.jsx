import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import SingUp from '../components/SingUp';


const Navber2 = () => {
  let [open, setOpen] = useState(false);
  let [model,setModel] = useState(false);


  return (
    <div>
      <div className=' mx-auto md:flex md:px-20 px-4 justify-between bg-green-500 p-2'>
      <div>
      <h1>subha</h1>
      </div>
      <div className='relative '>
        <div className='md:hidden absolute right-4 top-[-20px]  ' onClick={() => setOpen(!open)}>{open ? <IoCloseOutline /> : <IoIosMenu />} </div>
      <ul className={`md:flex fixed md:static  h-screen w-[80%] bg-blue-200 md:h-0 md:w-full md:py-0 py-2 transition-all	duration-500 z-[-1] ${open ? 'left-0': "left-[-100%]"}`}>
        <li className='md:mx-3 py-2 md:py-0'>home</li>
        <li className='md:mx-3 py-2 md:py-0'>about</li>
        <li className='md:mx-3 py-2 md:py-0'>contact</li>
        <li className='md:mx-3 py-2 md:py-0'>profile</li>
        <li className='ml-20'>
      <button className='hidden md:block  top-0 md:bg-blue-500 px-1.5 rounded-md text-white' onClick={() => setModel(false)}>Login</button>
      </li>

      </ul>

      </div>
    </div>
    <SingUp model={model} setModel ={setModel}/>

    </div>
  )
}

export default Navber2;