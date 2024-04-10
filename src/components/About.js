import React from 'react'
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

// Images
import photo8 from '../assets/images.jpg'
import photo9 from '../assets/photo9.avif'
import photo10 from '../assets/photo10.avif'
import photo11 from '../assets/photo11.avif'


const About = () => {
  return (
    // First About Section  
    <div className='md:px-20 lg:px-32'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-40'>About CTrack</h2>

      <div className='container mx-auto text-left py-32 px-10 bg-[#FAF0E6] md:rounded-xl lg:rounded-xl shadow-xl md:mb-40 lg:mb-40'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold override-text-color mt-10 lg:mt-0'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='mt-5 mb-14 text-xl lg:text-2xl override-text-color'><span className='text-indigo-600 font-semibold'>CTrack</span> is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future. Embracing innovation and continous improvement.</p>
        <div className='flex space-x-2 mb-24 lg:mb-6'>
        <button className='bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-black transition ease-in duration-150'>Learn More</button>
        <button className='text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg px-5 py-2.5 transition ease-in duration-150'>Sign Up</button>
        </div>
      </div>

    {/* Second About Section */}  
    <section className="container mx-auto bg-black md:rounded-xl lg:shadow-xl">
        
      <section className="px-10 py-32">
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-10'>Enabling individuals<br></br>to thrive & succeed.</h2>
        <p className='text-xl'>At CTrack, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
      </section>

    </section>
      
      <div className='flex justify-center items-center mt-10 mb-10 h-[500px] overflow-hidden md:px-10 px-5'>
        <div className='flex justify-center items-center'>
          <img 
            src={photo8}
            alt='Tech Meeting'
            width={1200}
            height={500}
          />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

     {/* Third About Section */} 
    <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center gap-5 pt-20 border-b-2 border-black border-t-2">
      <div className="w-full md:w-1/2 px-10 pt-10 flex flex-col mb-20">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold my-10 text-left leading-tight'>CTrack: Explore Our Products and Services</h2>
        <p className='text-xl flex-grow'>Discover the innovative world of CTrack, where advanced technology meets everyday convenience. Our range of smart devices and user-friendly software solutions is designed to enhance your daily life. Experience the perfect blend of functionality and style with our products and services – your gateway to the future of technology.</p>
        <button className='bg-black text-white px-6 py-4 text-md mt-10 sm:w-3/4 md:w-1/2 lg:w-1/4'>Products</button>
      </div>
  
      <div className="w-full md:w-1/2 px-10 pt-10 flex flex-col mb-20">
        <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold my-10 text-left leading-tight'>Get in Touch - Inquiries</h2>
        <p className='text-xl flex-grow sm:mt-20 lg:mt-10'>Have questions or need assistance? CTrack is here to help. Our dedicated team is ready to address your inquiries and provide personalized support. Whether it’s about our products, services, or general queries, we're just a message away. Connect with us and experience customer service that truly cares about your needs.</p>
        <button className='bg-white text-black px-6 py-4 text-md border border-black mt-10 sm:w-3/4 md:w-1/2 lg:w-1/4'>Contact</button>
      </div>
    </div>
     {/* Fourth About Section */} 
        <div className='container mx-auto p-4'>
          <h2 className='text-3xl lg:text-5xl md:text-4xl text-left font-bold mt-20 mb-10'>Explore Our Gallery.</h2>
          <p className='text-xl mb-10'>We continue to improve and deliver the best quality for our customers.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 hover:scale-105 transition-transform duration-500 ease-out cursor-pointer mx-auto max-w-[1300px]'>
            <Link to='/'><ImageCard imageUrl={photo9} altText='Various Apple Products'/></Link>
            <Link to='/'><ImageCard imageUrl={photo10} altText='Apple Watch & Laptop'/></Link>
            <Link to='/'><ImageCard imageUrl={photo11} altText='Tech Products'/></Link>
          </div>
        </div>
    </div>   
  )
}

export default About; 