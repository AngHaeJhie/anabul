import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './page/Beranda';
import Category from './components/Category';
import Populer from './components/Populer';
import TopTier from './components/TopTier';
import Footer from './components/Footer';
import Contact from './components/Contact';
import DetailKucing from './detail/DetailKucing';
import DetailAnjing from './detail/DetailAnjing';
import KategoriKucing from './kategori/KategoriKucing';
import Search from './page/Search';
import FiturChat from './page/FiturChat';
import FormAdopsi from './page/FormAdopsi';
import KategoriAnjing from './kategori/KategoriAnjing';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/category" element={<Category />} />
          <Route path="/populer" element={<Populer />} />
          <Route path="/toptier" element={<TopTier />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detailkucing" element={<DetailKucing />} />
          <Route path="/detailanjing" element={<DetailAnjing />} />
          <Route path="/kategorikucing" element={<KategoriKucing />} />
          <Route path="/kategorianjing" element={<KategoriAnjing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<FiturChat />} />
          <Route path="/formadopsi" element={<FormAdopsi />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;