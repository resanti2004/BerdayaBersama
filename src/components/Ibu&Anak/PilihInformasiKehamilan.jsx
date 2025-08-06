import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const PilihInformasiKehamilan = () => {
  const [showAll, setShowAll] = useState(false);

  const infos = [
    { id: "mengenali-kehamilan", title: "Mengenali Kehamilan" },
    { id: "tahapan-trimester", title: "Tahapan Trimester Kehamilan" },
    { id: "nutrisi-ibu-hamil", title: "Makanan dan Nutrisi Ibu Hamil" },
    { id: "perawatan", title: "Pemeriksaan dan Perawatan" },
    { id: "kesehatan-mental", title: "Kesehatan Fisik dan Mental Ibu Hamil" },
    { id: "tanda-bahaya", title: "Tanda Bahaya saat Hamil" },
    { id: "olahraga-ibu-hamil", title: "Olahraga untuk Ibu Hamil" },
    { id: "persiapan-persalinan", title: "Persiapan Persalinan" },
    { id: "asi-eksklusif", title: "ASI Eksklusif" },
  ];

  // Tentukan informasi yang akan ditampilkan
  const displayedInfos = showAll ? infos : infos.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Simulasi navigasi karena tidak ada router di artifact
  const handleItemClick = (itemId) => {
    console.log(`Navigating to: /kehamilan/${itemId}`);
    // Di implementasi asli, gunakan: navigate(`/kehamilan/${itemId}`)
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Informasi Seputar Ibu & Anak
      </h2>

      <div className="space-y-2">
        {displayedInfos.map((item, index) => (
          <button
            onClick={() => handleItemClick(item.id)}
            key={index}
            className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer w-full text-left"
          >
            <span className="text-sm text-gray-700 font-medium flex-1">
              {item.title}
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>
        ))}
      </div>

      {/* Tombol Lihat Lebih Banyak / Lihat Lebih Sedikit */}
      {infos.length > 6 && (
        <button
          onClick={toggleShowAll}
          className="text-sm text-gray-500 hover:text-blue-600 mt-3 w-full text-center transition-colors"
        >
          {showAll
            ? "Lihat Lebih Sedikit"
            : `Lihat Lebih Banyak (${infos.length - 6} lainnya)`}
        </button>
      )}
    </div>
  );
};

export default PilihInformasiKehamilan;
