import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className="py-12 sm:px-2 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className='text-center'>
            <h2 className="mt-2 lg:mt-28 text-3xl md:text-4xl lg:text-5xl leading-8 font-extrabold tracking-tight px-4">Efficiently track your cryptocurrency investments with our application.</h2>
            <p className="hidden md:block lg:block mt-10 max-w-2xl text-xl lg:mx-auto px-8">
                Our application provides users with the ability to easily search and filter their cryptocurrency data, allowing for efficient tracking of their investments.
            </p>
        </div>
    <div className="mt-14 lg:mt-20 md:mt-18 p-8 space-y-10 lg:space-y-0 lg:space-x-0 lg:p-0 mb-[160px] text-left">
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10">
        <div className="bg-[#FAF0E6] p-6 rounded-xl shadow-md lg:bg-transparent lg:p-0 lg:rounded-none lg:shadow-none">
          <dt>
            <p className="text-xl lg:text-2xl mb-6 leading-6 font-medium text-black lg:text-[#FAF0E6]">Stay informed with real-time cryptocurrency data.</p>
          </dt>
          <dd className="mt-2 text-base text-black lg:text-[#FAF0E6]">
          Our mobile app allows users to track their cryptocurrency investments anytime, anywhere, providing convenience and flexibility.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"><Link to='/about'>Learn More</Link></button>
        </div>

        <div className="bg-[#FAF0E6] p-6 rounded-xl shadow-md lg:bg-transparent lg:p-0 lg:rounded-none lg:shadow-none">
          <dt>
            <p className="text-xl lg:text-2xl mb-6 leading-6 font-medium text-black lg:text-[#FAF0E6]">Track your investments on the go with our mobile app.</p>
          </dt>
          <dd className="mt-2 text-base text-black lg:text-[#FAF0E6]">
            Our mobile app allows users to track their cryptocurrency investments anytime, anywhere, providing convenience and flexibility.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Search</button>
        </div>

        <div className="bg-[#FAF0E6] p-6 rounded-xl shadow-md lg:bg-transparent lg:p-0 lg:rounded-none lg:shadow-none">
          <dt>
            <p className="text-xl lg:text-2xl mb-6 leading-6 font-medium text-black lg:text-[#FAF0E6]">Securely manage your portfolio.</p>
          </dt>
          <dd className="mt-2 text-base text-black lg:text-[#FAF0E6]">
            Our application offers advanced features for portfolio management, ensuring the security and organization of your cryptocurrency investments.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Contact</button>
        </div>
      </dl>
    </div>
  </div>
</div>

  )
}

export default Features