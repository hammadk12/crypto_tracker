import React from 'react'
import Features from './Features'
import Testimonial from './Testimonial'
import Recognition from './Recognition'
import Faq from './Faq'

const HomePage = () => {
  return (
    <div>
        <header className='flex flex-col justify-center items-center mb-[290px] mt-40 md:mt-28 lg:mt-10'>
          <h2 className='font-bold text-center mt-20 text-4xl md:text-5xl lg:text-6xl p-10'>CTrack - Start Tracking Today</h2>
          <button style={{ borderColor: '#FAF0E6'}} className='border px-6 py-3'>Explore</button>
        </header>
        <Features />
        <Testimonial />
        <Recognition />
        <Faq />
    </div>
  )
}

export default HomePage