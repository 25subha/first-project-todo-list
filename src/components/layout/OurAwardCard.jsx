import React from 'react';

const OurAwardCard = ({imageSrc, year, description, alt}) => {
   
  return (
    <>
        
          <div className='bg-white flex flex-col p-2 justify-center items-center shadow-2xl   h-[400px] w-[350px] rounded-lg'>
              <div className='p-1.5  overflow-hidden h-[320px] w-[280px] border rounded-lg'>
                  <img src={imageSrc} alt={alt}  className='h-60 w-80  transition duration-300 rounded-lg  hover:scale-[1.1]'/>
              </div>
              <div className='p-4 flex flex-col items-center justify-center'>
                  <h3 className='font-bold text-center text-sky-600'>{year}</h3>
                  <p className='text-sm text-center mt-2'>{description}</p>
                    <button className='mt-3 text-blue-700 font-semibold'><a href="">read more</a></button>
              </div>
          </div>
    </>
  )
}

export default OurAwardCard;