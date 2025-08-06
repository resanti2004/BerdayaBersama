import React from "react";
import Header from "../../components/Header";
// import InformasiTerkait from "../../components/Ibu&Anak/InformasiTerkait";
// import AksiNyata from "../../components/Ibu&Anak/AksiNyata";
// import WebsiteTerkait from "../../components/Ibu&Anak/WebsiteTerkait";
import FooterComp from "../../components/FooterComp";
// import ListMotherChild from "./ListMotherChild";
// import PilihInformasiKehamilan from "../../components/Ibu&Anak/PilihInformasiKehamilan";
// import VideoTerkait from "../../components/Ibu&Anak/VideoTerkait";
import PilihInformasiGermas from "../../components/Germas/PilihInformasiGermas";
import AksiNyataGermas from "../../components/Germas/AksiNyataGermas";
import VideoTerkaitGermas from "../../components/Germas/VideoTerkaitGermas";
import WebsiteTerkaitGermas from "../../components/Germas/WebsiteTerkaitGermas";
import PilihInformasiSampah from "../../components/Sampah/PilihInformasiSampah";
import AksiNyataSampah from "../../components/Sampah/AksiNyataSampah";
import VideoTerkaitSampah from "../../components/Sampah/VideoTerkaitSampah";
import WebsiteTerkaitSampah from "../../components/Sampah/WebsiteTerkaitSampah";

const HomeSampah = () => {
  return (
    <div className="px-4 pt-24">
      {/* <Header /> */}
      <div>
        {/* <InformasiTerkait /> */}
        <PilihInformasiSampah />
        <AksiNyataSampah />
        <VideoTerkaitSampah />
        <WebsiteTerkaitSampah />
        {/* Tambahkan konten lain di sini jika perlu */}
      </div>
      {/* <FooterComp /> */}
    </div>
  );
};

export default HomeSampah;
