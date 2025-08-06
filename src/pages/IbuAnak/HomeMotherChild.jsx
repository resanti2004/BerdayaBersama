import React from "react";
import Header from "../../components/Header";
// import InformasiTerkait from "../../components/Ibu&Anak/InformasiTerkait";
import AksiNyata from "../../components/IbuAnak/AksiNyata";
import WebsiteTerkait from "../../components/IbuAnak/WebsiteTerkait";
import FooterComp from "../../components/FooterComp";
// import ListMotherChild from "./ListMotherChild";
import PilihInformasiKehamilan from "../../components/IbuAnak/PilihInformasiKehamilan";
import VideoTerkait from "../../components/IbuAnak/VideoTerkait";

const HomeMotherChild = () => {
  return (
    <div className="px-4 pt-24">
      {/* <Header /> */}
      <div>
        {/* <InformasiTerkait /> */}
        <PilihInformasiKehamilan />
        <AksiNyata />
        <VideoTerkait />
        <WebsiteTerkait />
        {/* Tambahkan konten lain di sini jika perlu */}
      </div>
      {/* <FooterComp /> */}
    </div>
  );
};

export default HomeMotherChild;
