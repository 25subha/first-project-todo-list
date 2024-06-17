import React, { useState } from 'react';
import { questions } from '../data/FaqQustion';
import FaqItems from './FaqItems';

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

