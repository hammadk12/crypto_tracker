import React from 'react'
import Features from './Features'
import Testimonial from './Testimonial'
import Recognition from './Recognition'
import Faq from './Faq'
import AvatarDemo from './AvatarDemo'

const HomePage = ({ isMenuOpen }) => {
  return (
    <div>
        <header className='flex flex-col justify-center items-center mb-[290px] mt-12 bg-[#FAF0E6] rounded-xl mx-14 lg:mx-[200px] p-8'>
          <h2 className='font-bold text-center mt-20 text-4xl md:text-5xl lg:text-7xl override-text-color'>CTrack - Start Tracking Today</h2>
          <p className='text-xl md:text-2xl text-center my-12 override-text-color'>Join <span className='text-indigo-600 font-bold'>millions</span> of other users taking advantage of this powerful tracking tool!</p>
        <div className='flex flex-col md:flex-row items-center gap-10 mb-10 md:mx-12'>
          { !isMenuOpen && <AvatarDemo/>}
          <p className='text-lg override-text-color text-center'>"CTrack has <span className='text-indigo-600 font-bold'>revolutionized</span> the way I monitor my crypto investments."</p>
        </div>
        <button className='bg-gray-800 text-white px-5 md:px-8 py-2.5 md:py-5 rounded-lg hover:bg-black transition ease-in duration-150 mb-14'>Explore</button>
        </header>
        <Features />
        <Testimonial />
        <Recognition />
        <Faq />
    </div>
  )
}

export default HomePage