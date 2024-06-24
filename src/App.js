import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./page/Beranda";
import Contact from "./components/Contact";
import DetailKucing from "./detail/DetailKucing";
import DetailAnjing from "./detail/DetailAnjing";
import KategoriKucing from "./kategori/KategoriKucing";
import KategoriAnjing from "./kategori/KategoriAnjing";
import Search from "./page/Search";
import FiturChat from "./page/FiturChat";
import FormAdopsi from "./page/FormAdopsi";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kategorikucing" element={<KategoriKucing />} />
          <Route path="/kategorianjing" element={<KategoriAnjing />} />
          <Route path="/form" element={<FormAdopsi />} />
          <Route path="/detailkucing" element={<DetailKucing />} />
          <Route path="/detailanjing" element={<DetailAnjing />} />
          <Route path="/chat" element={<FiturChat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
