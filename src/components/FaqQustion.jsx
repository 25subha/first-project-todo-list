import React, { useState } from 'react';
import { questions } from '../data/FaqQustion';

const FaqQustion = () => {
    let [currentid, setCurrentid] = useState(questions[0].id)
    let items = questions.map((itemdata, i) => {

        let itemsdetails = {
            itemdata,
            currentid,
            setCurrentid
        }
        return(
            <FaqItems key={i}
           itemsdetails={itemsdetails}/>
        )
    })
  return (
    <div className='w-[1320px] m-auto '>
        <h1 className='text-center text-2xl font-bold mb-5 mt-12'>Faq quisition answer seet ?</h1>
        <div>{items}</div>
    </div>
  )
};

export default FaqQustion;

const FaqItems = ({itemsdetails})=> {
    let {itemdata,currentid,setCurrentid} = itemsdetails
    
    return (
    <div className='border-[2px] border-red-400 mt-4 '>
        <h1 className='m-0 p-[10px] bg-black text-white text-left cursor-pointer' onClick={()=>{setCurrentid(itemdata.id)}}>{itemdata.question}</h1>
         <p className={`text-left p-0 m-0 h-0 scale-y-0	duration-200 ${currentid === itemsdetails.itemdata.id ? 'h-auto scale-y-100 p-[10px]' : ''}`}	>{itemdata.answer}</p>
    </div>
    )

} ;