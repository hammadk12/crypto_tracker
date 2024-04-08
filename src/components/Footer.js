import React from 'react'
import { ReactComponent as YoutubeIcon} from '../assets/youtube.svg';
import { ReactComponent as TwitterIcon} from '../assets/twitter-alt.svg';
import { ReactComponent as LinkedinIcon} from '../assets/linkedin.svg'
import { ReactComponent as FacebookIcon} from '../assets/facebook.svg'
import { ReactComponent as InstagramIcon} from '../assets/instagram.svg'


const Footer = () => {

  const iconColor = '#FAF0E6'

  return (
    <footer>
    <div className="container mx-auto px-4 lg:px-12 py-8 mt-[200px]">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
      <h2 className='text-3xl font-bold mb-sm-16'>CTrack</h2>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center lg:justify-center flex-wrap gap-4 lg:pl-[130px] text-center text-lg">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
          <a href="/faqs" className="hover:text-gray-400">FAQs</a>
          <a href="/support" className="hover:text-gray-400">Support</a>
          <a href="/terms" className="hover:text-gray-400 mb-sm-16">Terms</a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon aria-label="Facebook" className="h-6 w-6" fill={iconColor} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon aria-label="Instagram" className="h-6 w-6" fill={iconColor} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon aria-label="Twitter" className="h-6 w-6" fill={iconColor} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon aria-label="LinkedIn" className="h-6 w-6" fill={iconColor} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <YoutubeIcon aria-label="Youtube" className="h-6 w-6" fill={iconColor} />
          </a>
        </div>

      </div>

      <div className="border-t mt-8 pt-4 text-center">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center space-y-4 md:space-y-0 lg:space-y-0 space-x-4 mt-4">
          <p className="text-sm">&copy; 2024 CTrack. All rights reserved.</p>
          <a href="/privacy" className="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="text-sm hover:text-gray-400">Terms of Service</a>
          <a href="/cookies" className="text-sm hover:text-gray-400">Cookies Policy</a>
        </div>
      </div>
      </div>
  </footer>
);
};



export default Footer