import React from 'react';
import CarouselCard from '../layout/CarouselCard';
const Story = () => {
  const imagesCard = [
    { id: 4, imageSrc: '../../public/storyImage/ngo story 02.png', alt: 'Image 1' },
    { id: 5, imageSrc: '../../public/storyImage/ngo story 03.jpg', alt: 'Image 2' },
    { id: 6, imageSrc: '../../public/storyImage/ngo story image 01.jpeg', alt: 'Image 3' },
    { id: 4, imageSrc: '../../public/storyImage/ngo story 02.png', alt: 'Image 4' },
    { id: 5, imageSrc: '../../public/storyImage/ngo story 04.jpeg', alt: 'Image 5' },
  ];
  
  return (
   <div className='md:px-8 px-4 py-8 '>
     <h1 className='text-2xl font-bold text-center  mb-4 capitalize	'>stories & updates</h1>
     <div className=' flex  items-center justify-center overflow-hidden'>
        <CarouselCard Items={imagesCard} cardType='storyCard' spaceBetween={80}/>
    </div>
   </div>
  )
}

export default Story;