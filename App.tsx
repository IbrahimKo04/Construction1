import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import OurStory from './pages/OurStory';
import Enquiry from './pages/Enquiry';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
};

export default App;