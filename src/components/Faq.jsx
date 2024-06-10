import React, { useState } from 'react';
import { questions } from '../data/FaqQustion';

const Faq = () => {
  let [showanswer, setShowanswer] = useState(questions[0].id)
  return (
    <div className='m-auto w-[1320px] p-12 '>
        <h1 className='text-center text-2xl font-bold mb-5'>Faq quisition answer seet ?</h1>
        <div className=''>
           {
            questions.map((faq,i) => {
              return(
                <div className='border-[2px] border-red-400 mt-4 '>
                <h1 className='m-0 p-[10px] bg-black text-white text-left cursor-pointer' onClick={() => {
                  setShowanswer(faq.id)
                }}>{faq.question}</h1>
                <p className={`text-left p-0 m-0 h-0 scale-y-0	duration-200	${showanswer === faq.id ? 'h-auto scale-y-100	 p-[10px]': ''}`}>{faq.answer}</p>
                </div>
              )
            })
           }
                
           
            
        </div>
    </div>
  )
}

export default Faq;