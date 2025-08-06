import FooterComp from "../../components/FooterComp";
import Header from "../../components/Header";
import DetailMengenaliKehamilan from "../../components/IbuAnak/kehamilan/DetailMengenaliKehamilan";

const HomeMotherChild = () => {
  return (
    <div className="min-h-screen mb-60 overflow-y-auto">
      <Header />
      <div>
        <DetailMengenaliKehamilan />
        {/* Tambahkan konten lain di sini jika perlu */}
      </div>
      {/* <FooterComp /> */}
    </div>
  );
};

export default HomeMotherChild;
