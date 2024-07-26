import React from 'react'
import Joinuscard from '../layout/Joinuscard';

const Getinvolved = () => {
  const cardItem = [
    {
      id:1,
      count: '2000+',
      heading:'as a member',
      btn:'join us',
      bgcolor:'pink-400',
    },
    {
      id:2,
      count: '200+',
      heading:'become a volunteers',
      btn:' register',
      bgcolor:'bg-sky-500',
    },
    {
      id:1,
      count: '200+',
      heading:'donate people',
      btn:'donate ',
      bgcolor:'bg-teal-400	',
    },
  ]
  return (
    <div className='mx-8'>
      {cardItem.map((data,i) => {
        return(
          <Joinuscard cardItem ={data} key={i}/>
        )
      })}
        
        </div>
  )
}

export default Getinvolved;