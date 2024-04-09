import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false) // State for mobile menu
    const MOBILE_BREAKPOINT = 768; // mobile breakpoint
    const [search, setSearch] = useState(''); // state for search input
    
    const handleNav = () => {
        setNav(!nav)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh

        console.log("Search query:", search);
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

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
            <h1 className='font-bold text-xl cursor-pointer'><Link to="/">CTrack</Link></h1>
            <ul className='gap-8 text-xl sm:text-lg hidden sm:flex'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={search}
                        placeholder='Search'
                        onChange={handleInput} 
                        className='text-black focus:outline-none rounded-xl pl-3 placeholder-black'
                        style={{ backgroundColor: '#FAF0E6'}}
                    />
                </form>
                <li className='hover:text-blue-400 cursor-pointer'>View</li>
                <Link to="/contact" className='hover:text-blue-400 cursor-pointer'>Contact</Link>
            </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
          {nav ? <AiOutlineClose size={20} style={{color: 'white'}}/> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div className={
            nav 
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full bg-black h-screen text-center ease-in duration-300 text-white'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 '
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