import React from 'react'
import { FaStar } from 'react-icons/fa'

const FiveStars = () => (
    <div className='flex items-center gap-1 mt-4 ml-2'>
        {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className='star-icon'/>
        ))}
    </div>
  )

export default FiveStars