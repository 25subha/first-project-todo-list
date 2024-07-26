import React from 'react'
import CarouselCard from '../components/layout/CarouselCard'

const NewPage = () => {
    const cardItems = [
        {
            id:1,
            imgUrl:"https://kokanngo.org/public/website/images/recognition/Community-impact-Award.jpeg",
            year: '2016-2021',
            description:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos nesciunt voluptas debitis beatae, praesentium tempora iure',
            alt:'image 1'
        },
        {
            id:2,
            imgUrl:"https://www.kokanngo.org/public/URL/gallery-1.png",
            year: '2015-2020',
            description:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos nesciunt voluptas debitis beatae, praesentium tempora iure',
            alt:'image 2'
        },
        {
            id:3,
            imgUrl:"https://spherule.org/wp-content/uploads/2023/05/Untitled-design-60-1024x1024.png",
            year: '2020-2022',
            description:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos nesciunt voluptas debitis beatae, praesentium tempora iure',
            alt:'image 3    '
        },
        {
            id:4,
            imgUrl:"https://cdn.pixabay.com/photo/2021/10/10/18/53/cup-6698294_1280.jpg",
            year: '2016-2019',
            description:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos nesciunt voluptas debitis beatae, praesentium tempora iure',
            alt:'image 4'
        },
        {
            id:5,
            imgUrl:"https://gvtindia.org/wp-content/uploads/elementor/thumbs/Gramin-Vikas-Trust-Best-NGO-for-Sustainable-Farmer-Income-Enhancement-pjfxmdd6hspg2sk4sc4z1b43exrpq4f5kw5m0tlk80.jpg",
            year: '2010-2022',
            description:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos nesciunt voluptas debitis beatae, praesentium tempora iure',
            alt:'image 5'
        },
    ]
  return (
    <div className='bg-[#ceebce] px-4 md:px-8 py-8'>
        <h1 className='text-2xl font-bold text-center mb-4 capitalize'>Our awards & recoginition</h1>
        
            <CarouselCard Items={cardItems} cardType='awardCard' SwiperclassName='pb-14  ' spaceBetween={60} navigation={true} pagination={{ clickable: true }}/>
        
        
   </div>
  )
}

export default NewPage