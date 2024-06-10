import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SC, NC, LC, UC } from '../data/PasswordCarreter';


const Project3 = () => {
    let [uppercase, setUppercase] = useState(false);
    let [lowercase,setLowercase] =useState(false);
    let [number, setNumber] = useState(false);
    let [symbols, setSymbols] = useState(false);
    let [passlength, setPasslength] = useState(10)
    let [finlePass, setFinlePass] = useState('')
   
    let creatpassword = ()=> {
        let finalPass = ''
        let chatSet = ''
        if (uppercase || lowercase || number || symbols) {
            if (uppercase) chatSet += UC
            if (lowercase) chatSet += LC
            if (number) chatSet += NC
            if (symbols) chatSet += SC
            
            for(let i = 0; i < passlength; i++ ) {
                finalPass += chatSet.charAt(Math.floor(Math.random()*chatSet.length))
                setFinlePass(finalPass)
               
            }

        } else {
            toast.error("Plese Checked one Cheack box!.....")
        }
    }

    const copyPass = () => {
        navigator.clipboard.writeText(finlePass)
    }
  return (
    <div className='h-screen w-full bg-[rgb(43,43,72)] flex justify-center items-center'>
        <div className='h-auto w-80	 bg-blue-800 p-5'>
        <ToastContainer />
            <h1 className='text-white font-semibold text-center pb-[15px]'>Password Generator</h1>
            <div className='flex py-2.5 '>
                <input type="text" readOnly value={finlePass} className='basis-[80%] px-2 rounded-sm'/> <button className='basis-[20%] bg-purple-600 rounded-md text-white font-[500] p-1 cursor-pointer' onClick={copyPass}>Copy</button>
            </div>
            <div className='flex justify-between py-2.5 items-center'>
                <label className='text-white'>Password Length</label>
                <input type="number" max={20} min={10} className='w-[50px] px-2' value={passlength} onChange={(event) => {setPasslength(event.target.value)}}/>
            </div>
            <div className='flex justify-between py-2.5 items-center'>
                <label className='text-white'>Include Uppercase Letters</label>
                <input type="checkbox" checked={uppercase}  onChange={() => setUppercase(!uppercase)}/>
            </div>
            <div className='flex justify-between py-2.5 items-center'>
                <label className='text-white' >Include Lowercase Letters</label>
                <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)}/>
            </div>
            <div className='flex justify-between py-2.5 items-center'>
                <label className='text-white'>Include Number</label>
                <input type="checkbox" checked={number} onChange={() => setNumber(!number)}/>
            </div>
            <div className='flex justify-between py-2.5 items-center'>
                <label className='text-white' >Include symbols</label>
                <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)}/>
            </div>
            <button className='bg-purple-600 w-full my-2.5 rounded-sm p-1 text-white font-[500] cursor-pointer' onClick={creatpassword}>
                Ganerate Password
            </button>
        </div>
    </div>
  )
};

export default Project3;