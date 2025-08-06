import React from "react";
import Header from "../../components/Header";
import FooterComp from "../../components/FooterComp";
// import ListMotherChild from "./ListMotherChild";
import PilihInformasiGermas from "../../components/Germas/PilihInformasiGermas";
import AksiNyataGermas from "../../components/Germas/AksiNyataGermas";
import VideoTerkaitGermas from "../../components/Germas/VideoTerkaitGermas";
import WebsiteTerkaitGermas from "../../components/Germas/WebsiteTerkaitGermas";

const HomeGermas = () => {
  return (
    <div className="px-4 pt-24">
      {/* <Header /> */}
      <div>
        {/* <InformasiTerkait /> */}
        <PilihInformasiGermas />
        <AksiNyataGermas />
        <VideoTerkaitGermas />
        <WebsiteTerkaitGermas />
        {/* Tambahkan konten lain di sini jika perlu */}
      </div>
      {/* <FooterComp /> */}
    </div>
  );
};

export default HomeGermas;
