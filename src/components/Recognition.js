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
        <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side with text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Recognitions and Awards</h2>
              <p className="mb-6">Our app has been recognized for its outstanding performance and features.</p>
              <div className="flex space-x-2 mb-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                  Download Now
                </button>
              </div>
            </div>

        {/* Right side with logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {logos.map((logo, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded shadow-lg transform transition duration-300 hover:scale-105">
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