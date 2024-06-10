import React, { useState } from 'react';
import Hadge from '../../public/haze.png'

const Project4 = () => {
  let [city, setCity] = useState('');
  let [wdetails, setWdetails] = useState()
  let [loding, setLoding] = useState(false)

  let heanldelSubmit = (event) => {
    setLoding(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1625127e36a105926561c62811351a43&units=metric`)
    .then((res) => res.json())
    .then((finalResponse) => {
      console.log(finalResponse)
      if(finalResponse.cod == '404') {
        setWdetails(undefined)
      } else {
      setWdetails(finalResponse)
     
    }
    setLoding(false)
    })
    event.preventDefault()
    setCity('')
  }
  
  return (
    <div className='h-screen w-full bg-[rgb(138,199,240)]'>
        <div className='max-w-[1320px] mx-auto   '>
            <h1 className='text-[40px] font-bold py-12 text-white'>simple Wheather App</h1>
            <form onSubmit={heanldelSubmit}>
                <input type="text" placeholder='City Name' value={city} className='w-[300px] h-[40px] pl-3 rounded-md' onChange={(e) => setCity(e.target.value)}/> <button className='bg-blue-800 p-[8px_18px] text-white rounded-md'>Search</button>
            </form>

            <div className='h-80 w-80 bg-[rgba(47,40,40,0.08)] bg- bg-cover  mx-auto my-20 p-5 rounded-sm shadow-md relative shadow-slate-500'>

             
              <img src="https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_256.gif" className={`absolute w-24 top-[100px] left-[120px] ${loding ? '' : 'hidden'}`}alt="" />
                
                {wdetails !== undefined
                ? <> 
                <h3 className='text-[30px] text-white font-bold'>{wdetails.name}<span className=' ml-2 px-1 font-[500] bg-yellow-300 '>{wdetails.sys.country}</span></h3>
                <h2 className='text-[40px] text-white'>{`${wdetails.main.temp}°C`}</h2>
                <img src={`https://openweathermap.org/img/wn/${wdetails.weather[0].icon}.png`} className=" " />
                <p className='text-[20px] text-white'>{wdetails.weather[0].description}</p></>
                : <p className='text-[30px]  text-red-500 text-center capitalize'> No data found</p>}
               
            </div>
        </div>

    </div>
  )
}

export default Project4;