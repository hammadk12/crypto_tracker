import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {

const currentDate = new Date().toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

  return (
    <div className='p-10'>
        {/* Side bar */}
        <div className='p-10 text-center'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>Terms & Conditions</h2>
            <p className='mb-4'>Last Updated: {currentDate}<br /></p>
        </div>

        {/* Main Content */}
        <p className='text-left p-10'>This page outlines the Terms & Conditions for the use of CTrack's services. It is important to understand these terms as they govern your use of our site and services. By accessing CTrack, you agree to be bound by these conditions. Last Updated: </p>
        <div className='p-10'>
            <h3 className='font-bold text-lg mb-2'>Usage of Services</h3>
        <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2'>1. Introduction</h2>
            <p className='mb-4'>Welcome to CTrack! These terms of service outline the rules and regulations for the use of CTrack's Website and services.</p>
        </section>

        <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2'>2. Privacy Policy</h2>
            <p className='mb-4'>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your data. Please review it to understand our practices.</p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2">3. User Obligations</h2>
            <p className="mb-4">
                As a user of our website, you agree not to misuse the services or help anyone else do so. You are responsible for ensuring that your use of our services is in compliance with laws and regulations.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2">4. Product Information</h2>
            <p className="mb-4">
                We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2">5. Payment and Pricing</h2>
            <p className="mb-4">
                We reserve the right to refuse or cancel orders at any time. Prices for our products are subject to change without notice.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2">6. Return Policy</h2>
            <p className="mb-4">
                If you have any questions feel free to 
                <span className='text-blue-600 hover:underline cursor-pointer'> Contact</span> us.
            </p>
        </section>
        </div>
    </div>
  )
}

export default Terms