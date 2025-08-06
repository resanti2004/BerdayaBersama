import React from "react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const InformasiTerkait = () => {
  const categories = [
    { title: "Kehamilan", color: "bg-pink-100", path: "/kehamilan" },
    {
      title: "Melahirkan & Masa Nifas",
      color: "bg-purple-100",
      path: "/melahirkan-masa-nifas",
    },
    {
      title: "Pola Asuh & Parenting",
      color: "bg-blue-100",
      path: "/perawatan-bayi",
    },
    {
      title: "Kesehatan Ibu & Anak",
      color: "bg-orange-100",
      path: "/kesehatan-ibu-anak",
    },
  ];

  const dataSorotan = {
    Kehamilan: [
      "Tahapan Trimester Kehamilan",
      "Makanan dan Nutrisi Ibu Hamil",
      "Pemeriksaan dan Perawatan",
    ],
    "Melahirkan & Masa Nifas": [
      "Persiapan Persalinan",
      "Tanda-tanda Melahirkan",
      "Perawatan Setelah Melahirkan",
    ],
    "Pola Asuh & Parenting": [
      "Memandikan Bayi dengan Benar",
      "Tips Menyusui",
      "Imunisasi Dasar Bayi",
    ],
    "Kesehatan Ibu & Anak": [
      "Pentingnya Imunisasi",
      "Cek Kesehatan Rutin",
      "Nutrisi untuk Tumbuh Kembang",
    ],
  };

  const [kategoriAktif, setKategoriAktif] = useState("Kehamilan");

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Informasi Terkait
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className={`${category.color} p-3 rounded-xl text-center hover:opacity-80 transition`}
          >
            <span className="text-md font-light text-gray-800">
              {category.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Sorotan Section */}
      <div className="pt-2">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Sorotan</h2>

        {/* Kategori scroll horizontal */}
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setKategoriAktif(category.title)}
              className={`flex-shrink-0 px-2 py-1 rounded-xl whitespace-nowrap transition-all ${
                kategoriAktif === category.title
                  ? `${category.color} font-medium text-xs text-gray-900`
                  : "bg-gray-100 text-xs text-gray-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {dataSorotan[kategoriAktif].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-sm text-gray-700">{item}</span>
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
              <ChevronRight size={14} className="text-purple-600" />
            </div>
          </div>
        ))}

        <button className="text-sm text-gray-500 mt-3 w-full text-center">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default InformasiTerkait;
