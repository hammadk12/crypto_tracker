// The root AKA main container for app content
// Main layout
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms' element={<Terms />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
