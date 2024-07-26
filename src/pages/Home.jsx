import React from 'react';
// import NewCarousel from '../components/layout/NewCarousel';
// import imageone from "../../public/storyImage/ngo story 02.png"
// import OurAwardCard from '../components/layout/OurAwardCard';
import NewPage from './NewPage';
import Story from '../components/home/Story';
import NewNavber from '../components/home/NewNavber';
import MyNavber from '../components/layout/MyNavber';

const Home = ({}) => {

  return (
    <div>
      <div className='bg-[#2b2929]'>
      <div className='uppercase flex flex-col	'>
        <p className='text-red-400 font-bold text-[40px]'>Hello, </p>
        <h1 className='text-white font-bold'>I am subhankar maji</h1>
        <p>a full stack <br />web devolaper</p>
      </div>
      <div className="">
      <img className='bg-cover ' src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=6Vjbpv_7a1et5e_7OYsXoBOUyK1RaolsbwxBchSQdB0=" alt="" />
      </div>
 
      </div>
      <div>
          <h1>about me</h1>
          <p>How can I introduce for myself?
My name's [name]. I completed my [qualifying course or training] in [year] and have [x] years of experience working as [relevant position]. While working for [previous company's name], I developed [soft and hard skills], which I think will apply well to this role</p>
      </div>
   
      <div>
        <NewNavber />
      </div>
      
      <div>
      <MyNavber/>
      </div>

      <div>
        <NewPage/>
      </div>

      <div>
        <Story/>
      </div>
      <div>
        <NewPage/>
      </div>
    
    </div>
  );
};

export default Home;