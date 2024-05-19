import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Category from './components/Category';
import Populer from './components/Populer';
import TopTier from './components/TopTier';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
        <Container/>
        <Category/>
        <Populer/>
        <TopTier/>
        <Footer/>
    </div>
  );
}

export default App;
