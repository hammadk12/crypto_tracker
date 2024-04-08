import React from 'react'

// Dynamically import all .svg files from src/assets
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  };

  // Load images
  const images = importAll(require.context('../assets', false, /\.svg$/));

  // Logos
  const logos = [
    { name: 'Apple', path: 'apple.svg'},
    { name: 'Spotify', path: 'spotify.svg'},
    { name: 'Amex', path: 'american-express.svg'},
    { name: 'Github', path: 'github.svg'},
    { name: 'Postgres', path: 'postgre.svg'},
    { name: 'Slides', path: 'slidesgo.svg'},
    { name: 'Flipboard', path: 'flipboard.svg'},
    { name: '3m', path: '3m.svg'},
  ]

  const Recognition = () => {
    return (
        <section className="py-8 mb-[250px]">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-2 md:gap-2 items-center">
            {/* Left side with text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-[200px]">Recognitions and Awards</h2>
              <p className="mb-6">Our application has been recognized for its outstanding performance and features.</p>
              <div className="flex space-x-2 mb-6">
                <button className="text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg px-5 py-2.5 transition ease-in duration-150">
                  Learn More
                </button>
                <button className="bg-gray-800 text-white px-5 py-2.5 rounded hover:bg-black transition ease-in duration-150">
                  Track Now
                </button>
              </div>
            </div>

        {/* Right side with logos */}
        <div className="sm:mt-10 md:mt-[10px] lg:mt-[200px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2">
            {logos.map((logo, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded shadow-lg transform transition duration-300 hover:scale-105 ">
               <img src={images[logo.path]} alt={logo.name} className="h-12 mx-auto" />
              </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Recognition