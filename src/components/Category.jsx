import React from 'react'

const Category = ({Finalcat, setCatName}) => {
  let cat = Finalcat.map((v,i) => {
    return(
      <li onClick={() => setCatName(v)} className='text-[18px] p-2 bg-gray-200 mb-2 font-serif font-semibold cursor-pointer' key={i}>{v}</li>
    )
  })
  return (
    <div className=''>
        <h1 className='text-[25px] font-semibold mb-6 p-2.5'>Category</h1>
            <ul>
                {cat}
            </ul>
        </div>
  )
}

export default Category

// ImageCarousel.js

// import React, { useState } from 'react';

// const ImageCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="overflow-hidden rounded-lg">
//         <img
//           src={images[currentIndex]}
//           alt="carousel slide"
//           className="object-cover w-full h-64 sm:h-96"
//         />
//       </div>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
//         onClick={prevSlide}
//       >
//         &#8592;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
//         onClick={nextSlide}
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;


// // App.js

// import React from 'react';
// import ImageCarousel from './ImageCarousel';

// const App = () => {
//   const images = [
//     'https://example.com/image1.jpg',
//     'https://example.com/image2.jpg',
//     'https://example.com/image3.jpg',
//   ];

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">Image Carousel Example</h1>
//       <ImageCarousel images={images} />
//     </div>
//   );
// };

// export default App;

