// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// //  
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import Card from './Card';


// const NewCarousel = () => {

//     const images = [
//         { id: 4, imageSrc: '../../public/storyImage/ngo story 02.png', alt: 'Image 1' },
//         { id: 5, imageSrc: '../../public/storyImage/ngo story 03.jpg', alt: 'Image 2' },
//         { id: 6, imageSrc: '../../public/storyImage/ngo story image 01.jpeg', alt: 'Image 3' },
//         { id: 4, imageSrc: '../../public/storyImage/ngo story 02.png', alt: 'Image 4' },
//         { id: 5, imageSrc: '../../public/storyImage/ngo story 04.jpeg', alt: 'Image 5' },
//       ];

//   return (
//     <>
//      <div className='h-96 flex items-center justify-center'>
//      <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation,]}
//         className="mySwiper   bg-transparent  py-6 flex flex-col items-center justify-between mx-8"

//       >
//         {
//             images.map((img) => (
//                 <SwiperSlide key={img.alt}><div className='flex items-center justify-center'> <Card imageSrc={img.imageSrc} alt={img.alt}/></div></SwiperSlide>

//             ))
//         }
        
//        {/* <SwiperSlide><div className='flex items-center justify-center'><Card/></div></SwiperSlide>
//        <SwiperSlide><div className='flex items-center justify-center'><Card/></div></SwiperSlide>
//        <SwiperSlide><div className='flex items-center justify-center'><Card/></div></SwiperSlide>
//  */}
//       </Swiper>
//      </div>
//     </>
//   )
// }

// export default NewCarousel;