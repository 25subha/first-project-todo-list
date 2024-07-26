// src/components/Card.js
import React from 'react';
import storyimg1 from "../../../public/storyImage/ngo story image 01.jpeg"
import storyimg2 from "../../../public/storyImage/ngo story 02.png"
import storyimg3 from "../../../public/storyImage/ngo story 03.jpg"
import storyimg4 from "../../../public/storyImage/ngo story 04.jpeg"


const Card = ({imageSrc ,alt}) => {


  return (
    
      
        <>
          <div className='h-[300px] w-[250px]  overflow-hidden shadow-lg rounded-md flex felx-col items-center justify-center'>
            <img src={imageSrc} alt={alt} className='h-full w-full  transition-transform duration-[0.5s] hover:scale-[1.1] rounded-md '/>
          </div>
        </>
  );
};

export default Card;
// const storyitems = [
//   {
//  id:1,
//  url: "../../../public/storyImage/ngo story image 01.jpeg",
//  alt:'image 1'
//  },
//  {
//    id:1,
//    url:"../../../public/storyImage/ngo story 02.png",
//    alt:"image 3"
//  },
//  {
//    id:1,
//    url:"../../../public/storyImage/ngo story 03.jpg",
//    alt: "image 4"
//  },
//  {
//    id:1,
//    url: "../../../public/storyImage/ngo story image 01.jpeg",
//    alt:' image 3'
//  },
//  {
//    id:1,
//    url:"../../../public/storyImage/ngo story 04.jpeg",
//    alt: "image 4"
//  },
// ]