import React from 'react'

const Features = () => {
  return (
    <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Efficiently track your cryptocurrency investments with our application</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our application provides users with the ability to easily search and filter their cryptocurrency data, allowing for efficient tracking of their investments.
            </p>
        </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-16 md:gap-y-10">
        <div className="relative">
          <dt>
            <p className="text-lg leading-6 font-medium text-gray-900">Stay informed with real-time cryptocurrency data</p>
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            Our application provides users with real-time cryptocurrency data, ensuring they have the most up-to-date information to make informed investment decisions.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Learn More</button>
        </div>

        <div className="relative">
          <dt>
            <p className="text-lg leading-6 font-medium text-gray-900">Track your investments on the go with our mobile app</p>
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            Our mobile app allows users to track their cryptocurrency investments anytime, anywhere, providing convenience and flexibility.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Download</button>
        </div>

        <div className="relative">
          <dt>
            <p className="text-lg leading-6 font-medium text-gray-900">Securely manage your portfolio with our advanced features</p>
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            Our application offers advanced features for portfolio management, ensuring the security and organization of your cryptocurrency investments.
          </dd>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Sign Up</button>
        </div>
      </dl>
    </div>
  </div>
</div>

  )
}

export default Features