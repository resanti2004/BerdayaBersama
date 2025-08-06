import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mpasi from "../../assets/mpasi.jpg";

const AksiNyata = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kegiatan Edukasi Kesehatan Ibu dan Anak",
      description:
        "Program penyuluhan dan pendampingan untuk ibu hamil dan menyusui",
      date: "15 Juli 2024",
      location: "Puskesmas Gondokusuman",
    },
    {
      id: 2,
      image: { mpasi },
      title: "Workshop MPASI Sehat untuk Bayi",
      description: "Pelatihan pembuatan makanan pendamping ASI yang bergizi",
      date: "22 Juli 2024",
      location: "Balai Desa Caturtunggal",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pemeriksaan Kesehatan Gratis",
      description:
        "Layanan pemeriksaan kesehatan dan konsultasi untuk ibu hamil",
      date: "28 Juli 2024",
      location: "Puskesmas Depok I",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Senam Hamil Bersama",
      description: "Kegiatan olahraga ringan untuk menjaga kesehatan ibu hamil",
      date: "5 Agustus 2024",
      location: "Taman Kota Yogyakarta",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pembagian Vitamin dan Suplemen",
      description: "Distribusi vitamin gratis untuk ibu hamil dan menyusui",
      date: "12 Agustus 2024",
      location: "Puskesmas Tegalrejo",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kelas Menyusui untuk Ibu Baru",
      description:
        "Edukasi teknik menyusui yang benar dan manfaat ASI eksklusif",
      date: "19 Agustus 2024",
      location: "RS PKU Muhammadiyah",
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
                  <div className="bg-white/90 bg-opacity-75 rounded-lg px-3 py-2">
                    <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
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

export default AksiNyata;
