import React from 'react'

const Recognition = () => {
    // Array for logos
    const logos = [
        { name: 'Apple', path: 'apple.svg'},
    ]



  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Recognitions and Awards</h2>
        <p className="mb-6">Our app has been recognized for its outstanding performance and features.</p>
        <div className="flex space-x-2 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Download Now
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-lg transform transition duration-300 hover:scale-105">
              {/* You can replace 'img' with 'logo.image' if using SVG or React component */}
              <img src={logo.image} alt={logo.name} className="h-12 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition