import React from 'react'
import Carousel from './Carousel';
const Imgcar = () => {

  const images = [
   'https://cdn.pixabay.com/photo/2017/09/16/19/33/parrot-2756488_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/16/19/33/parrot-2756488_1280.jpg',
    'https://picsum.photos/id/235/200/300',
    // Add more image URLs as needed
  ];
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-8">Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}


export default Imgcar;