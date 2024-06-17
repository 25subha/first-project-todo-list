import React from 'react';
import { useState } from 'react';

const SingUp = ({model,setModel}) => {
  // let [model,setModel] = useState(false);
  return (
   <>
  
     <div className={`h-screen w-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 ${model ? 'hidden' : "" }`}>
      
      <div className={`h-80 w-80 bg-white  fixed left-[50%] transform -translate-x-1/2  -translate-y-1/2 transition-all duration-500 ${model ? 'top-[-500px]' : 'top-[50%]' }`}>
        <span className='fixed right-2 top-2 cursor-pointer' onClick={() => setModel(true)}>&times;</span>
        <div className='text-center p-4'>
          login
        </div>
      </div>
    </div>
   </>
  )
}

export default SingUp;