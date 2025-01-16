import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/common/Loader';
import InitialLoader from './components/common/InitialLoader';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/common/CustomCursor';
import Hero from './pages/home/Hero';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import useLoader from './hooks/useLoader';
import useInitialLoader from './hooks/useInitialLoader';

function App() {
  const { isLoading, handleRouteChange } = useLoader();
  const isInitialLoad = useInitialLoader();

  return (
    <div>
      <CustomCursor />
      <Navbar onNavigate={handleRouteChange} />
      <InitialLoader isActive={isInitialLoad} />
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
