// The root AKA main container for app content
// Main layout
import './App.css';
import Footer from '../src/components/Footer'

function App() {
  return (
    <div>
      <header>
        <p>
          My Crypto Tracker
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
