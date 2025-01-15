import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loader from './components/common/Loader';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/common/CustomCursor';
import Home from './pages/Home';
import Contact from './pages/Contact';

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
          <Route path="/projects" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
