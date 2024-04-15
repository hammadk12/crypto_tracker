import React from 'react'
import Features from './Features'
import Testimonial from './Testimonial'
import Recognition from './Recognition'
import Faq from './Faq'
import AvatarDemo from './AvatarDemo'
import FiveStars from './FiveStars'

const HomePage = () => {
  return (
    <div>
        <header className='flex flex-col justify-center items-center mb-[290px] mt-18'>
          <h2 className='font-bold text-center mt-20 text-4xl md:text-5xl lg:text-6xl p-10'>CTrack - Start Tracking Today</h2>
          <p className='mb-5 text-lg md:text-xl lg:text-2xl text-center p-5'>Join millions of other users taking advantage of this powerful tracking tool!</p>
          <button style={{ borderColor: '#FAF0E6'}} className='border px-6 py-3'>Explore</button>
        <div className='flex items-center gap-10 mt-10'>
          <AvatarDemo />
          <FiveStars />
        </div>
        </header>
        <Features />
        <Testimonial />
        <Recognition />
        <Faq />
    </div>
  )
}

export default HomePage