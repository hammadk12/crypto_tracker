import React from 'react'
import YoutubeIcon from '../assets/youtube.svg';
import TwitterIcon from '../assets/twitter-alt.svg';
import LinkedinIcon from '../assets/linkedin.svg'
import FacebookIcon from '../assets/facebook.svg'
import InstagramIcon from '../assets/instagram.svg'


const Footer = () => {
  return (
    <footer>
    <div className="container mx-auto px-4 lg:px-12 py-8">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h2>CTrack</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
          <a href="/faqs" className="hover:text-gray-400">FAQs</a>
          <a href="/support" className="hover:text-gray-400">Support</a>
          <a href="/terms" className="hover:text-gray-400">Terms</a>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" className="h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="Youtube" className="h-6" />
          </a>
        </div>
      </div>
      <div className="border-t mt-8 pt-4">
        <p className="text-center text-sm text-gray-500">&copy; 2024 CTrack. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
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