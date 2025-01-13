import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/themes/theme';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
              <Route path="/blog" element={<div>Blog Page Coming Soon</div>} />
              <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
