// The root AKA main container for app content
// Main layout
import './App.css';
import Footer from '../src/components/Footer'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <h2 className='font-bold text-left my-20 pl-32 text-4xl md:text-5xl lg:text-6xl'>CTrack - Start Tracking Today</h2>
      </header>
      <Footer />
    </div>
  );
}

export default App;
