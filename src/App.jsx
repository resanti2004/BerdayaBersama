import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HomeMotherChild from "./pages/IbuAnak/HomeMotherChild";
// import ListMotherChild from "./pages/Ibu&Anak/ListMotherChild";
// import PilihInformasiKehamilan from "./components/Ibu&Anak/PilihInformasiKehamilan";
import DetailMengenaliKehamilan from "./components/IbuAnak/Kehamilan/DetailMengenaliKehamilan";
import DetailMakananNutrisi from "./components/IbuAnak/kehamilan/DetailMakananNutrisi";
import DetailTahapanTrimester from "./components/IbuAnak/kehamilan/DetailTahapanTrimester";
import DetailPemeriksaanPerawatan from "./components/IbuAnak/kehamilan/DetailPemeriksaanPerawatan";
import DetailKesehatanFisikMental from "./components/IbuAnak/kehamilan/DetailKesehatanFisikMental";
import DetailTandaBahayaSaatHamil from "./components/IbuAnak/kehamilan/DetailTandaBahayaSaatHamil";
import HomeGermas from "./pages/IbuAnak/HomeGermas";
import HomeSampah from "./pages/IbuAnak/HomeSampah";
import Home from "./pages/home";
// import ListMelahirkan from "./pages/Ibu&Anak/ListMelahirkan";
// import ListParenting from "./pages/Ibu&Anak/ListParenting";
// import ListKesehatan from "./pages/Ibu&Anak/ListKesehatan";
// import DetailPersiapanMelahirkan from "./components/Ibu&Anak/Melahirkan/DetailPersiapanMelahirkan";
// import DetailTandaPersalinan from "./components/Ibu&Anak/Melahirkan/DetailTandaPersalinan";
// import DetailProsesPersalinan from "./components/Ibu&Anak/Melahirkan/DetailProsesPersalinan";
// import DetailPerawatanPascaMelahirkan from "./components/Ibu&Anak/Melahirkan/DetailPerawatanPascaMelahirkan";
// import DetailPenyusuan from "./components/Ibu&Anak/Melahirkan/DetailPenyusuan";
// import DetailKesehatanMentalIbu from "./components/Ibu&Anak/Melahirkan/DetailKesehatanMentalIbu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <div className="min-h-screen mb-64 overflow-y-auto">
        <Routes>
          <Route path="/beranda-germas" element={<HomeGermas />} />
          <Route path="/beranda-ibu-dan-anak" element={<HomeMotherChild />} />
          <Route path="/beranda-lingkungan" element={<HomeSampah />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/kehamilan" element={<ListMotherChild />} /> */}
          {/* <Route path="/melahirkan-masa-nifas" element={<ListMelahirkan />} />
          <Route path="/perawatan-bayi" element={<ListParenting />} />
          <Route path="/kesehatan-ibu-anak" element={<ListKesehatan />} /> */}

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

          {/* MELAHIRKAN */}
          {/* <Route
            path="/melahirkan-masa-nifas/persiapan-melahirkan"
            element={<DetailPersiapanMelahirkan />}
          />
          <Route
            path="/melahirkan-masa-nifas/tanda-tanda-persalinan"
            element={<DetailTandaPersalinan />}
          />
          <Route
            path="/melahirkan-masa-nifas/proses-persalinan"
            element={<DetailProsesPersalinan />}
          />
          <Route
            path="/melahirkan-masa-nifas/perawatan-pasca-melahirkan"
            element={<DetailPerawatanPascaMelahirkan />}
          />
          <Route
            path="/melahirkan-masa-nifas/penyusuan-dan-perawatan-bayi"
            element={<DetailPenyusuan />}
          />
          <Route
            path="/melahirkan-masa-nifas/kesehatan-mental-ibu"
            element={<DetailKesehatanMentalIbu />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
