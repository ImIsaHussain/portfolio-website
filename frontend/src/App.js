import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loader from './components/common/Loader';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/common/CustomCursor';
import Hero from './pages/home/Hero';
import Contact from './pages/Contact';
import Home from './pages/home/Home';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      // Wait for the page to load and then start fade out
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 1000);
  };

  return (
    <div>
      <CustomCursor />
      <Navbar onNavigate={handleRouteChange} />
      <Loader isActive={isLoading} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Hero />} />
          <Route path="/blog" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
