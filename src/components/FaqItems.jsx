import React from 'react'

const FaqItems = ({itemsdetails})=> {
    let {itemdata,currentid,setCurrentid} = itemsdetails
  return (
    <div className='border-[2px] border-red-400 mt-4 '>
    <h1 className='m-0 p-[10px] bg-black text-white text-left cursor-pointer' onClick={()=>{setCurrentid(itemdata.id)}}>{itemdata.question}</h1>
     <p className={`text-left p-0 m-0 h-0 scale-y-0	duration-200 ${currentid === itemsdetails.itemdata.id ? 'h-auto scale-y-100 p-[10px]' : ''}`}	>{itemdata.answer}</p>
</div>
  )
}

export default FaqItems;