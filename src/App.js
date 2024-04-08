// The root AKA main container for app content
// Main layout
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Features from './components/Features';
import Faq from './components/Faq';
import Testimonial from './components/Testimonial';
import Recognition from './components/Recognition';

function App() {
  return (
    <div>
      <Navbar />
      <header className='flex flex-col justify-center items-center mb-[290px]'>
        <h2 className='font-bold text-center mt-20 text-4xl md:text-5xl lg:text-6xl p-10'>CTrack - Start Tracking Today</h2>
        <button style={{ borderColor: '#FAF0E6'}} className='border px-6 py-3'>Explore</button>
      </header>
      <Features />
      <Testimonial />
      <Recognition />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
