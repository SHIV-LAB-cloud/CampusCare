import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modals from './components/Modals';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Booking from './pages/Booking';
import Resources from './pages/Resources';
import Forum from './pages/Forum';
import Gamification from './pages/Gamification';
import EmergencyFooter from './components/EmergencyFooter';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeModal, setActiveModal] = useState(null);
  
  // Apply theme to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} openModal={openModal} />
      
      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/booking" element={<Booking openModal={openModal} />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/gamification" element={<Gamification />} />
      </Routes>

      <Modals activeModal={activeModal} closeModal={closeModal} openModal={openModal} />
      <EmergencyFooter />
    </>
  );
}

export default App;
