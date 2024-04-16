import React from 'react'
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

// Images
import photo8 from '../assets/images.jpg'
import photo9 from '../assets/photo9.avif'
import photo10 from '../assets/photo10.avif'
import photo11 from '../assets/photo11.avif'

// bg-[#FAF0E6]
// bg-black

const About = () => {
  return (
    // First About Section  
    <div className='md:px-20 lg:px-32'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-40 hidden md:block lg:block'>About CTrack</h2>

      <div className='about-container bg-[#FAF0E6]'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold override-text-color mt-10 lg:mt-0'>Embracing Innovation,<br></br>Empowering Change.</h2>        
        <p className='about-paragraph override-text-color'><span className='text-indigo-600 font-semibold'>CTrack</span> is a pioneering technology company that blends advanced technology with user-centric designs to enhance everyday life and shape a connected future. Embracing innovation and continous improvement.</p>
        <div className='flex space-x-2 mb-24 lg:mb-6'>
        <button className='bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-black transition ease-in duration-150'>Learn More</button>
        <button className='bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg px-5 py-2.5 transition ease-in duration-150'>Sign Up</button>
        </div>
      </div>

    {/* Second About Section */}  
    <section className="about-container bg-black">
        
      <section>
        <h2 className='about-heading'>Enabling individuals<br></br>to thrive & succeed.</h2>
        <p className='about-paragraph'>At CTrack, we have a rich history of pushing the boundaries of technology. From our humble beginnings as a small startup, we have grown into a global leader in smart devices and AI-driven applications. Our relentless pursuit of innovation has allowed us to create products that seamlessly blend cutting-edge technology with user-centric designs, enhancing everyday life and shaping a connected future.</p>
        <img 
            src={photo8}
            alt='Tech Meeting'
            className='object-contain max-w-full md:max-w-lg lg:max-w-6xl h-auto m-auto lg:hidden'
          />
      </section>
    </section>
    

     {/* Third About Section */} 
    <div className="about-container bg-[#FAF0E6]">
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold override-text-color mt-10 lg:mt-0'>CTrack: Explore Our<br></br>Products and Services</h2>
        <p className='about-paragraph override-text-color'><span className='text-indigo-600 font-semibold'>Discover</span> the innovative world of CTrack, where advanced technology meets everyday convenience. Our range of smart devices and user-friendly software solutions is designed to enhance your daily life.<span className='text-indigo-600 font-semibold'> Experience</span> the perfect blend of functionality and style with our products and services – your gateway to the future of technology.</p>
        <button className='bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-black transition ease-in duration-150'>Products</button>
    </div>

     {/* Fourth About Section */} 
     <div className="about-container bg-black">
        <h2 className='about-heading'>Get in Touch - <span className='text-indigo-600'>Inquiries</span></h2>
        <p className='about-paragraph'>Have questions or need assistance? CTrack is here to help. Our dedicated team is ready to address your inquiries and provide personalized support. Whether it’s about our products, services, or general queries, we're just a message away. Connect with us and experience customer service that truly cares about your needs.</p>
        <button className='bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg px-5 py-2.5 transition ease-in duration-150'>Contact</button>
      </div>
  
    {/* Fifth About Section*/}
    <div className='about-container bg-[#FAF0E6]'>
          <h2 className='about-heading override-text-color'>Explore Our Gallery.</h2>
          <p className='about-paragraph override-text-color'>We continue to improve and deliver the best quality for our customers.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer mx-auto max-w-[1300px] shadow-xl'>
            <Link to='/'><ImageCard imageUrl={photo9} altText='Various Apple Products'/></Link>
            <Link to='/'><ImageCard imageUrl={photo10} altText='Apple Watch & Laptop'/></Link>
            <Link to='/'><ImageCard imageUrl={photo11} altText='Tech Products'/></Link>
          </div>
        </div>
      </div>
  )
}

export default About; 
