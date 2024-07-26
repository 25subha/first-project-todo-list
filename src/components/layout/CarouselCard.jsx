import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import OurAwardCard from './OurAwardCard';
import Card from './Card';





const CarouselCard = ({Items, cardType, SwiperclassName,SwiperSlideclassName, pagination, navigation, spaceBetween}) => {
  const renderCard = (item) => {
    if (cardType === 'storyCard') {
      return(
        <Card imageSrc={item.imageSrc} alt={item.alt}/>
      )
    } else if (cardType === 'awardCard') {
      return(
        <OurAwardCard imageSrc={item.imgUrl} alt={item.alt} year={item.year} description={item.description}/>
      )
    }
    return null;
  } ;
  return (
    <>

    <Swiper
       slidesPerView={4}
       spaceBetween={spaceBetween}
       loop={true}
  

       autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
       pagination={pagination}
       navigation={navigation}       
       breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      }}
       modules={[Autoplay, Pagination, Navigation,]}
       className={`mySwiper overflow-hidden  py-6 flex flex-col items-center  justify-center  ${SwiperclassName}`}

     >
       {
           Items.map((img) => (
               <SwiperSlide key={img.alt}><div className={`flex  items-center  justify-center  ${SwiperSlideclassName} `}>{renderCard(img)}</div></SwiperSlide>

           ))
       }
       
     </Swiper>
    
     
   </>
  )
}

export default CarouselCard;