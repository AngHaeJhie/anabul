import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <Navbar />
    <main><Outlet /></main>
    <Footer />
  </div>
);

export default MainLayout;
