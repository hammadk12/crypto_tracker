import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false) // State for mobile menu
    const MOBILE_BREAKPOINT = 768; // mobile breakpoint
    
    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT) {
                setNav(false); // Close mobile menu when over breakpoint
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div>
        <div className='flex justify-between items-center pt-10 pb-32 px-16'>
            <h1 className='font-bold text-xl'>CTrack</h1>
            <ul className='gap-8 text-xl sm:text-lg hidden sm:flex'>
                <li className='hover:text-blue-400 cursor-pointer'>Search Bar</li>
                <li className='hover:text-blue-400 cursor-pointer'>View</li>
                <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
            </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
          {nav ? <AiOutlineClose size={20} style={{color: 'white'}}/> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div className={
            nav 
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }
        >
        <ul>
            <li className='p-4 text-4xl hover:scale-125 hover:shadow-lg transition-transform duration-300 ease-in-out'>Search</li>
            <li className='p-4 text-4xl hover:scale-125 hover:shadow-lg transition-transform duration-300 ease-in-out'>View</li>
            <li className='p-4 text-4xl hover:scale-125 hover:shadow-lg transition-transform duration-300 ease-in-out'>Contact</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar