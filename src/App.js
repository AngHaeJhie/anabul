import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Category from './components/Category';
import Populer from './components/Populer';
import TopTier from './components/TopTier';
import Footer from './components/Footer';
import Contact from './components/Contact'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/category" element={<Category />} />
          <Route path="/populer" element={<Populer />} />
          <Route path="/toptier" element={<TopTier />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
