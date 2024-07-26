import React, { useState, useEffect } from 'react';
import { GrPrevious,GrNext  } from "react-icons/gr";


const Carousel = ({ images, autoPlayInterval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto-play functionality using useEffect and setTimeout
  useEffect(() => {
    const interval = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }
      }, autoPlayInterval);
  

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length,isPaused]);


  // Handle mouse enter event to pause auto-play
  const handleMouseEnter = () => {
    setIsPaused(true);
    
  };
    
  // Handle mouse leave event to resume auto-play
    const handleMouseLeave = () => {
        setIsPaused(false);
      };

  return (
    <div className="relative w-full md:h-[450px] h-[300px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 transform">
          {images.map((image, index) => (
            <div
              key={index}
              className={ `relative flex w-full flex-shrink-0 object-contain md:h-[450px] h-[300px] ${
                index === currentIndex ? '' : 'hidden'
              }`}
            >
             
              <img src={image.url} alt={`Slide ${index}`} className="w-full" />
             <div className='absolute top-[50%] translate-y-[-50%] md:px-8 px-4 md:right-[60%] right-[50px]'>

             <h1 className='text-white font-bold md:text-[35px] text-[20px]'>{image.titel}</h1>
             <div className=' h-0.5 bg-green-400'></div>
             <p className='text-white md:text-[18px] text-[10px] font-semibold px mt-[8px] text-'>{image.description}</p>
             <button className='p-[2px_4px] rounded-[6px] text-white font-bold bg-[#db2e5c] hover:bg-[#ea69b6] mt-4'>know more</button>
             </div>
            </div>
          ))}
        </div>
      </div>

      {/* prev btn */}
      <button
        className="absolute h-10 w-10  rounded-full translate-y-[-50%]  top-[50%] left-5 z-20 bg-[rgba(0,0,0,0.5)] text-white p-2 flex items-center justify-center cursor-pointer"
        onClick={prevSlide}
      >
        <GrPrevious size={30}/>

      </button>
      {/* next btn */}
      <button
         className="absolute h-10 w-10  rounded-full translate-y-[-50%]  top-[50%] right-5 z-20 bg-[rgba(0,0,0,0.5)] text-white p-2 flex items-center justify-center cursor-pointer"
        onClick={nextSlide}
      >
      <GrNext size={30}/>

      </button>
    </div>
  );
};

export default Carousel;
