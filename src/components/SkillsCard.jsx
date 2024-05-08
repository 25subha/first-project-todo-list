import React from 'react'

const SkillsCard = ({imglink, name, altname} ) => {
  return (
    
        <div className='s bg-yellow-400 h-[200px] w-[200px] p-8 rounded-[12px] '>
          <img className='h-[100px] w-[120px] rounded' src={imglink} alt={altname} />
          <h1 className='text-center font-bold p-4'>{name}</h1>
        </div>
        
  
  )
}

export default SkillsCard