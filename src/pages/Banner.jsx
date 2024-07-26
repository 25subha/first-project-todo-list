import React from 'react';
import Carousel from '../components/Carousel';
// import CarouselCard from '../components/layout/CarouselCard';
// import Card from '../components/layout/Card';
// import NewCarousel from '../components/layout/NewCarousel';
import NewPage from './NewPage';
import Story from '../components/home/Story';
// import Carousel from '../components/Carousel';

const Banner = () => {

    const images = [
        {
            id: 1,
            url:'https://media.istockphoto.com/id/1284350506/photo/cute-indian-child-studying-at-home.jpg?s=1024x1024&w=is&k=20&c=xOijP4-CpoPmR0-oYE_hl3STuF2pjsPpRVgXmg0EOYI=',
            titel: "Education is employment",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus tenetur porro veniam dignissimos assumenda quisquam voluptas vel commodi. Vitae, nesciunt! Debitis, molestiae adipisci vitae distinctio sit culpa odit deleniti"
        } ,
        {   
            id: 2,
            url:'https://media.istockphoto.com/id/1614141400/photo/indian-doctor-examine-little-kid-boy-patient-fever-at-village-with-digital-thermometer-father.jpg?s=1024x1024&w=is&k=20&c=ajQNWXMmFBqBbJMBrJEDb90GIXz4nujYv1mSyZS0tTc=',
            titel: "helth ceare",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus tenetur porro veniam dignissimos assumenda quisquam voluptas vel commodi. Vitae, nesciunt! Debitis, molestiae adipisci vitae distinctio sit culpa odit deleniti"
        } ,
        {   
            id: 3,
            url:'https://cdn.pixabay.com/photo/2017/07/24/00/40/farmer-men-2533245_960_720.jpg',
            titel: "Enabling libelihoods",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus tenetur porro veniam dignissimos assumenda quisquam voluptas vel commodi. Vitae, nesciunt! Debitis, molestiae adipisci vitae distinctio sit culpa odit deleniti"    
        } ,
    ]

    const cards = [
        {
          imageUrl: 'https://placeimg.com/640/480/nature',
          title: 'Nature Scene',
          description: 'Beautiful scenery in nature.',
        },
        {
          imageUrl: 'https://placeimg.com/640/480/architecture',
          title: 'Architecture',
          description: 'Modern architecture design.',
        },
        {
          imageUrl: 'https://placeimg.com/640/480/animals',
          title: 'Animals',
          description: 'Cute animals from around the world.',
        },
      ];
    
  return (
   <>
    <div className="flex justify-center items-center w-full md:h-[450px] h-[300px] ">
    <Carousel images={images} autoPlayInterval={2000} />
  </div> 
 

    <div>
      <NewCarousel />
    </div>


    <div>
      <NewPage/>
    </div>
    <div>
      <Story/>
    </div>
  
</>
   )
}

export default Banner;

// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';
// import image3 from './images/image3.jpg';

// const App = () => {
//   const images = [image1, image2, image3];

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Carousel images={images} />
//     </div>
//   );
// };

// export default App;
