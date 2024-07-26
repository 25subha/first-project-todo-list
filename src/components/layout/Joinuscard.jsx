import React from 'react';

const Joinuscard = ({cardItem}) => {
 
  return (
    <div className='flex text-white justify-between my-12'>
        <div className={`bg-${cardItem.bgcolor} w-80 h-36 flex flex-col items-center justify-center rounded-md`}>
            <h2 className='font-bold text-xl'>{cardItem.count}</h2>
            <h2 className='font-bold '>{cardItem.heading}</h2>
            <button className='rounded-3xl bg-black px-2 py-1 text-center font-semibold mt-3'> {cardItem.btn}</button>
        </div>
    </div>
  )
}

export default Joinuscard;