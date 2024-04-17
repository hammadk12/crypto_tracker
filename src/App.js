// The root AKA main container for app content
// Main layout
import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Terms from './components/Terms';
import Scroll from './components/Scroll';
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const MemoizedNavbar = React.memo(() => <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />)

  return (
    <Router>
      <Scroll /> 
      <div>
        <ToastContainer />
        <MemoizedNavbar />
        <ErrorBoundary>
        <Routes>
          <Route path='/' element={<HomePage isMenuOpen={isMenuOpen}/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
