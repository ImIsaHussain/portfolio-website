import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Loader from './components/common/Loader';
import InitialLoader from './components/common/InitialLoader';
import BackgroundAudio from './components/common/BackgroundAudio';
import Contact from './pages/Contact';
import About from './pages/About';
import Hero from './pages/home/Hero';
import Home from './pages/home/Home';
import useLoader from './hooks/useLoader';
import useInitialLoader from './hooks/useInitialLoader';
import CustomCursor from './components/common/CustomCursor';

function App() {
  const { isLoading, handleRouteChange } = useLoader();
  const { isInitialLoad } = useInitialLoader();
  const [heroLetterRefs, setHeroLetterRefs] = useState(null);

  return (
    <div>
      <CustomCursor />
      <Navbar onNavigate={handleRouteChange} />
      <InitialLoader isActive={isInitialLoad} heroLetterRefs={heroLetterRefs} />
      {!isLoading && !isInitialLoad && <BackgroundAudio />}
      <Loader isActive={isLoading} />
      <main>
        <Routes>
          <Route path="/" element={<Home letterRefsCallback={setHeroLetterRefs} onNavigate={handleRouteChange} />} />
          <Route path="/about" element={<About onNavigate={handleRouteChange} />} />
          <Route path="/projects" element={<Hero />} />
          <Route path="/blog" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
