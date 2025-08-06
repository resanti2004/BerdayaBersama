import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const WebsiteTerkaitSampah = () => {
  const websites = [
    {
      title: "Waste4Change – Solusi Pengelolaan Sampah Berkelanjutan",
      url: "https://waste4change.com/",
      description:
        "Platform yang menyediakan layanan pengelolaan sampah terpadu dan berkelanjutan, mulai dari edukasi hingga daur ulang.",
    },
    {
      title: "SIPSN – Sistem Informasi Pengelolaan Sampah Nasional",
      url: "https://sipsn.kemenlh.go.id/sipsn/",
      description:
        "Portal resmi Kementerian Lingkungan Hidup dan Kehutanan untuk memantau data timbulan dan pengelolaan sampah nasional.",
    },
    {
      title: "Green – Katadata Insight Center",
      url: "https://green.katadata.co.id/",
      description:
        "Situs berita dan edukasi yang menyajikan informasi seputar isu lingkungan, keberlanjutan, dan ekonomi hijau di Indonesia.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedWebsites = showAll ? websites : websites.slice(0, 3);

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Website Terkait
      </h2>

      <div className="space-y-3">
        {displayedWebsites.map((website, index) => (
          <div key={index} className="group">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-blue-600 group-hover:text-blue-700 line-clamp-2">
                  {website.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {website.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {websites.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-gray-500 hover:underline mt-4 w-full text-center"
        >
          {showAll ? "Lihat lebih sedikit" : "Selengkapnya"}
        </button>
      )}
    </div>
  );
};

export default WebsiteTerkaitSampah;
