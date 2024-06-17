import React from 'react';  
import { Link } from 'react-router-dom';
const Navber = () => {
  return (
    <div className=" text-white bg-cyan-950">
      <header className='flex justify-between px-12 py-4	'>
        <h1 className="cursor-pointer"><Link to="/">subhankar</Link></h1>
        <nav className="">
          <ul className="flex justify-between flex-wrap cursor-pointer">
            <li className="px-4"> <Link to='/projectone'>Project1</Link></li>
            <li className="px-4"><Link to ='/project'>projects</Link></li>
            <li className="px-4"><Link to='/contact'>Contact</Link></li>
            <li className="px-4"><Link to='/project3'>Project3</Link></li>
            <li className="px-4"><Link to='/project4'>Project4</Link></li>
            <li className="px-4"><Link to='/project5'>Project5</Link></li>
            
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navber