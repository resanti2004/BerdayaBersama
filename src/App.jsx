import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeMotherChild from "./pages/IbuAnak/HomeMotherChild";
import DetailMengenaliKehamilan from "./components/IbuAnak/kehamilan/DetailMengenaliKehamilan";
import DetailMakananNutrisi from "./components/IbuAnak/kehamilan/DetailMakananNutrisi";
import DetailTahapanTrimester from "./components/IbuAnak/kehamilan/DetailTahapanTrimester";
import DetailPemeriksaanPerawatan from "./components/IbuAnak/kehamilan/DetailPemeriksaanPerawatan";
import DetailKesehatanFisikMental from "./components/IbuAnak/kehamilan/DetailKesehatanFisikMental";
import DetailTandaBahayaSaatHamil from "./components/IbuAnak/kehamilan/DetailTandaBahayaSaatHamil";
import HomeGermas from "./pages/IbuAnak/HomeGermas";
import HomeSampah from "./pages/IbuAnak/HomeSampah";
import Home from "./pages/home";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setIsMobile(checkMobile);
  }, []);

  // Jika bukan mobile, tampilkan overlay peringatan
  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 px-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-2">Akses Hanya untuk Mobile</h1>
        <p className="text-lg">
          Mohon buka website ini di perangkat HP untuk pengalaman terbaik 📱
        </p>
      </div>
    );
  }

  // Jika mobile, render aplikasi normal
  return (
    <Router>
      <Header />
      <div className="min-h-screen mb-10 overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/beranda-germas" element={<HomeGermas />} />
          <Route path="/beranda-ibu-dan-anak" element={<HomeMotherChild />} />
          <Route path="/beranda-lingkungan" element={<HomeSampah />} />
          <Route path="/" element={<Home />} />

          {/* KEHAMILAN */}
          <Route
            path="/kehamilan/mengenali-kehamilan"
            element={<DetailMengenaliKehamilan />}
          />
          <Route
            path="/kehamilan/nutrisi-ibu-hamil"
            element={<DetailMakananNutrisi />}
          />
          <Route
            path="/kehamilan/tahapan-trimester"
            element={<DetailTahapanTrimester />}
          />
          <Route
            path="/kehamilan/perawatan"
            element={<DetailPemeriksaanPerawatan />}
          />
          <Route
            path="/kehamilan/kesehatan-mental"
            element={<DetailKesehatanFisikMental />}
          />
          <Route
            path="/kehamilan/tanda-bahaya"
            element={<DetailTandaBahayaSaatHamil />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
