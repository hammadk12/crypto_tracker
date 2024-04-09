import React from 'react'
import { Link } from 'react-router-dom'


const Terms = () => {

const currentDate = new Date().toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

  return (
    <div className='px-10 md:px-20 lg:px-40'>
        {/* Side bar */}
        <div className='p-10 text-center mt-[-50px]'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>Terms & Conditions</h2>
            <p className='mb-4'>Last Updated: {currentDate}<br /></p>
        </div>

        {/* Main Content */}
        <div className='p-10 bg-[#FAF0E6] rounded-xl shadow-xl flex flex-col'>
            <h3 className='font-bold text-lg mb-2 override-text-color'>Usage of Services</h3>
         <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2 override-text-color'>1. Introduction</h2>
            <p className='mb-4 override-text-color'>Welcome to CTrack! These terms of service outline the rules and regulations for the use of CTrack's Website and services.</p>
         </section>

         <section>
            <h2 className='text-2xl font-semibold mt-4 mb-2 override-text-color'>2. Privacy Policy</h2>
            <p className='mb-4 override-text-color'>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your data. Please review it to understand our practices. We use the information we collect in various ways, including to:
                - Provide, operate, and maintain our website
                - Improve, personalize, and expand our website
                - Understand and analyze how you use our website
                - Develop new products, services, features, and functionality
                - Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                - Send you emails
                - Find and prevent fraud
            </p>
         </section>

         <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2 override-text-color">3. User Obligations</h2>
            <p className="mb-4 override-text-color">
                As a user of our website, you agree not to misuse the services or help anyone else do so. You are responsible for ensuring that your use of our services is in compliance with laws and regulations.
            </p>
         </section>

         <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2 override-text-color">4. Product Information</h2>
            <p className="mb-4 override-text-color">
                We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
         </section>

         <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2 override-text-color">5. Payment and Pricing</h2>
            <p className="mb-4 override-text-color">
                We reserve the right to refuse or cancel orders at any time. Prices for our products are subject to change without notice.
            </p>
         </section>

         <section>
            <h2 className="text-2xl font-semibold mt-4 mb-2 override-text-color">6. Return Policy</h2>
            <p className="mb-4 override-text-color">
                If you have any questions feel free to  
                <span className='text-blue-600 hover:underline cursor-pointer'> <Link to="/contact">Contact</Link></span> us.
            </p>
         </section>
        </div>
    </div>
  )
}

export default Terms