import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgjajanansehat from "../../assets/germas/imgjajanansehat.jpg";
import sosjajanansehat from "../../assets/germas/sosjajanansehat.jpg";
import sosantinyamuk from "../../assets/germas/sosantinyamuk.jpg";
import sosnyamuk from "../../assets/germas/sosnyamuk.png";
import sprayantinyamuk from "../../assets/germas/sprayantinyamuk.jpg";

const AksiNyataGermas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      image: sprayantinyamuk,
      title: "Kegiatan Pembuatan Spay Anti Nyamuk",
      description:
        "Pelatihan bersama warga untuk membuat spray anti nyamuk alami menggunakan bahan-bahan ramah lingkungan.",
      date: "15 Juli 2024",
      location: "Puskesmas Gondokusuman",
    },
    {
      id: 2,
      image: sosnyamuk,
      title: "Kegiatan Sosialisasi Bahaya Nyamuk",
      description:
        "Edukasi kepada masyarakat mengenai jenis-jenis nyamuk berbahaya dan cara pencegahannya melalui pola hidup bersih.",
      date: "22 Juli 2024",
      location: "Balai Desa Caturtunggal",
    },
    {
      id: 3,
      image: sosantinyamuk,
      title: "Sosialisasi Pembuatan Spray Anti Nyamuk",
      description:
        "Penyuluhan tentang manfaat serta langkah-langkah pembuatan spray anti nyamuk untuk mencegah DBD.",
      date: "28 Juli 2024",
      location: "Puskesmas Depok I",
    },
    {
      id: 4,
      image: sosjajanansehat,
      title: "Sosialisasi Jajanan Sehat",
      description:
        "Kampanye edukatif tentang pentingnya memilih jajanan yang bersih, sehat, dan bergizi bagi anak-anak.",
      date: "5 Agustus 2024",
      location: "Taman Kota Yogyakarta",
    },
    {
      id: 5,
      image: imgjajanansehat,
      title: "Kegiatan Penempelan Poster Jajanan Sehat",
      description:
        "Aksi kampanye visual dengan menempelkan poster edukasi tentang jajanan sehat di area publik dan sekolah.",
      date: "12 Agustus 2024",
      location: "Puskesmas Tegalrejo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Aksi Nyata</h2>

      <div className="relative">
        {/* Main Image Carousel */}
        <div
          className="relative overflow-hidden rounded-lg"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {activities.map((activity, index) => (
              <div key={activity.id} className="w-full flex-shrink-0 relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Content overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-700 mb-1 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{activity.date}</span>
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>

                {/* Image counter */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {index + 1} / {activities.length}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {activities.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {activities.length > 1 && (
          <div className="flex justify-center space-x-2 mt-3">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Show More Button */}
      {/* <button className="text-sm text-gray-500 hover:text-blue-600 mt-3 w-full text-center transition-colors">
        Lihat Aksi Nyata Lainnya
      </button> */}
    </div>
  );
};

export default AksiNyataGermas;
