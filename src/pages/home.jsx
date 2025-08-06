import React from "react";
import ilustrasiweb from "../assets/ilustrasiweb.png";
import fontweb from "../assets/fontweb.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex pt-32 pb-10 content-center items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full text-center">
              {/* Logo Section */}
              <div>
                <img
                  src={fontweb}
                  alt="BerdayaBersama Logo"
                  className="mx-auto mb-2 w-80 h-auto max-w-full"
                />
              </div>

              {/* Illustration */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Background decorative elements */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
                  <div className="absolute -top-5 -right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-orange-200 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-5 -right-10 w-14 h-14 bg-pink-200 rounded-full opacity-60"></div>

                  {/* Main illustration image */}
                  <img
                    src={ilustrasiweb}
                    alt="Ilustrasi Keluarga BerdayaBersama"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="max-w-2xl px-4 mx-auto">
                <p className="text-base md:text-xl text-gray-700 leading-relaxed italic">
                  <span className="font-bold text-gray-800">
                    Berdaya Bersama
                  </span>{" "}
                  adalah website yang menyediakan informasi praktis seputar
                  kesehatan ibu dan anak, Gerakan Masyarakat Hidup Sehat
                  (Germas), serta cara pengelolaan sampah rumah tangga. Website
                  ini dikembangkan dalam rangka program KKN untuk mendukung
                  masyarakat lebih sehat, mandiri, dan peduli lingkungan.
                </p>
              </div>

              {/* CTA Buttons */}
              {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                  Mulai Jelajahi
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Fitur Utama Kami
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Tiga pilar utama untuk mendukung kehidupan yang lebih sehat dan
              berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-8">
            {/* Ibu & Anak */}
            <Link
              to="/beranda-ibu-dan-anak"
              className="bg-gradient-to-br from-pink-50 to-rose-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 block hover:scale-105 transform"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                Kesehatan Ibu & Anak
              </h3>
              <p className="text-gray-600 text-center">
                Informasi lengkap seputar kehamilan, persalinan, dan perawatan
                bayi untuk mendukung kesehatan keluarga.
              </p>
            </Link>

            {/* Germas */}
            <Link
              to="/beranda-germas"
              className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 block hover:scale-105 transform"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                Gerakan Masyarakat Hidup Sehat
              </h3>
              <p className="text-gray-600 text-center">
                Panduan praktis untuk menerapkan gaya hidup sehat dalam
                kehidupan sehari-hari.
              </p>
            </Link>

            {/* Lingkungan */}
            <Link
              to="/beranda-lingkungan"
              className="bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 block hover:scale-105 transform"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                Pengelolaan Lingkungan
              </h3>
              <p className="text-gray-600 text-center">
                Tips dan cara pengelolaan sampah rumah tangga untuk lingkungan
                yang lebih bersih dan sehat.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tentang Program KKN-PPM UGM
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Program Kuliah Kerja Nyata - Pemberdayaan Pembangunan Masyarakat
              (KKN-PPM) Universitas Gadjah Mada merupakan bentuk pengabdian
              mahasiswa untuk berkontribusi langsung kepada masyarakat. Melalui
              website BerdayaBersama, kami berkomitmen untuk memberikan
              informasi yang bermanfaat dan mudah diakses oleh seluruh lapisan
              masyarakat.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600 text-sm">Fokus Utama</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600 text-sm">Artikel Informasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Akses Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
