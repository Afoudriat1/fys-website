import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Music from './pages/Music';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/music" element={<Layout pageTitle="OUR MUSIC"><Music /></Layout>} />
          <Route path="/donate" element={<Layout pageTitle="DONATE"><Donate /></Layout>} />
          <Route path="/contact" element={<Layout pageTitle="CONTACT"><Contact /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

