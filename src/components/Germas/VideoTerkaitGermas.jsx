import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const VideoTerkaitGermas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Mengamuk Karena Nyamuk 🦟",
      youtubeId: "IJQwAEgykss",
      thumbnail: "https://img.youtube.com/vi/IJQwAEgykss/maxresdefault.jpg",
      duration: "45:12",
      channel: "Alam Semenit",
    },
    {
      id: 2,
      title: "Apa yang Terjadi pada Tubuh dan Diriku Saat Remaja?",
      youtubeId: "uae4f_8xyW0",
      thumbnail: "https://img.youtube.com/vi/uae4f_8xyW0/maxresdefault.jpg",
      duration: "5:26",
      channel: "Plan Indonesia Official Chanel",
    },
    {
      id: 3,
      title: "Kesehatan Reproduksi Remaja",
      youtubeId: "gUXcFI0PRas",
      thumbnail: "https://img.youtube.com/vi/gUXcFI0PRas/maxresdefault.jpg",
      duration: "10:10",
      channel: "Health Polythecnic Ministry of Health Jakarta III",
    },
    {
      id: 4,
      title: "Cara Mencegah Anemia Pada Remaja Putri",
      youtubeId: "MIrQJNfGKrA",
      thumbnail: "https://img.youtube.com/vi/MIrQJNfGKrA/maxresdefault.jpg",
      duration: "6:03",
      channel: "AIPGI Nutrision",
    },
    {
      id: 5,
      title: "Pentingnya Pola Hidup Sehat Bagi Remaja",
      youtubeId: "DQH8xa9sFXY",
      thumbnail: "https://img.youtube.com/vi/DQH8xa9sFXY/maxresdefault.jpg",
      duration: "6:11",
      channel: "Wahyu Setyaningsih",
    },
    {
      id: 6,
      title: "Pentingnya Aktivitas Fisik Bagi Remaja",
      youtubeId: "ZhN5DZwdKog",
      thumbnail: "https://img.youtube.com/vi/ZhN5DZwdKog/maxresdefault.jpg",
      duration: "7:14",
      channel: "Wahyu Setyaningsih",
    },
    {
      id: 7,
      title:
        "Mengenali Stress dan Kesehatan Fisik 'Kesehatan Mental' Episode #2",
      youtubeId: "aTWKMd1_Unw",
      thumbnail: "https://img.youtube.com/vi/aTWKMd1_Unw/maxresdefault.jpg",
      duration: "9:00",
      channel: "UGM Channel",
    },
    {
      id: 8,
      title: "Sehatkah Jiwaku",
      youtubeId: "93yfxrwqGWw",
      thumbnail: "https://img.youtube.com/vi/93yfxrwqGWw/maxresdefault.jpg",
      duration: "7:00",
      channel: "Direktorat Kesehatan Jiwa",
    },
  ];

  // Tentukan video yang akan ditampilkan di list
  const displayedVideos = showAllVideos ? videos : videos.slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
    setIsPlaying(false); // Reset ke thumbnail saat ganti slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false); // Reset ke thumbnail saat ganti slide
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false); // Reset ke thumbnail saat ganti slide
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleStopVideo = () => {
    setIsPlaying(false);
  };

  const toggleShowAllVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Video Terkait</h2>
        <ExternalLink className="w-4 h-4 text-gray-500" />
      </div>

      <div className="relative">
        {/* Video Container */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
          {!isPlaying ? (
            // Thumbnail View
            <>
              <img
                src={videos[currentSlide].thumbnail}
                alt={videos[currentSlide].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback jika thumbnail YouTube tidak tersedia
                  e.target.src =
                    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                }}
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={handlePlayVideo}
                  className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                >
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* YouTube Badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                <span className="font-semibold">YouTube</span>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {videos[currentSlide].duration}
              </div>
            </>
          ) : (
            // Embedded YouTube Player
            <div className="relative w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[currentSlide].youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=1`}
                title={videos[currentSlide].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />

              {/* Attribution Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-xs">
                  Video oleh:{" "}
                  <span className="font-medium">
                    {videos[currentSlide].channel}
                  </span>
                </p>
              </div>

              {/* Close/Back to Thumbnail Button */}
              <button
                onClick={handleStopVideo}
                className="absolute top-2 right-2 w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Navigation Arrows - hanya tampil saat tidak playing */}
          {!isPlaying && videos.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Video Title */}
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
            {videos[currentSlide].title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            oleh {videos[currentSlide].channel}
          </p>
        </div>

        {/* Dots Indicator - hanya tampil saat tidak playing */}
        {!isPlaying && videos.length > 1 && (
          <div className="flex justify-center space-x-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video List - tampilkan sesuai state showAllVideos */}
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Video Lainnya:
        </h4>
        {displayedVideos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => goToSlide(index)}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors text-left ${
              currentSlide === index
                ? "bg-red-50 border border-red-200"
                : "hover:bg-gray-50"
            }`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-16 h-9 object-cover rounded flex-shrink-0"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-800 line-clamp-2">
                {video.title}
              </p>
              <p className="text-xs text-gray-500">
                {video.duration} • {video.channel}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {currentSlide === index && (
                <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
              )}
              {isPlaying && currentSlide === index && (
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-600 font-medium">
                    Playing
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Tombol Lihat Semua Video / Lihat Lebih Sedikit */}
      <button
        onClick={toggleShowAllVideos}
        className="text-sm text-gray-500 hover:text-blue-600 mt-4 w-full text-center transition-colors flex items-center justify-center space-x-1"
      >
        <span>
          {showAllVideos
            ? "Lihat Lebih Sedikit"
            : `Lihat Semua Video (${videos.length})`}
        </span>
        {/* <ExternalLink className="w-3 h-3" /> */}
      </button>
    </div>
  );
};

export default VideoTerkaitGermas;
