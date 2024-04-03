import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center py-4 px-6 border border-black'>
            <div className='font-bold text-xl font-'>CTrack</div>
            <ul className='flex space-x-4'>
                <li className='hover:text-blue-400 cursor-pointer'>Search Bar</li>
                <li className='hover:text-blue-400 cursor-pointer'>View</li>
                <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar