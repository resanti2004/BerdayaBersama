import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const WebsiteTerkaitGermas = () => {
  const websites = [
    {
      title: "Ayo Sehat – GERMAS Kementerian Kesehatan RI",
      url: "https://ayosehat.kemkes.go.id/germas",
      description:
        "Situs resmi Kemenkes untuk Gerakan Masyarakat Hidup Sehat (GERMAS), edukasi gaya hidup bersih dan sehat untuk semua usia",
    },
    {
      title: "BKKBN – Kampung KB & Parenting",
      url: "https://kampungkb.bkkbn.go.id/",
      description:
        "Portal resmi BKKBN yang menyediakan informasi kehamilan, keluarga berencana, dan pendidikan parenting",
    },
    {
      title: "RSUD Brebes – GERMAS Dukung Gaya Hidup Sehat",
      url: "https://rsud.brebeskab.go.id/gerakan-masyarakat-hidup-sehat-germas-mendorong-gaya-hidup-sehat-di-indonesia/",
      description:
        "Halaman RSUD Brebes tentang implementasi GERMAS dalam upaya meningkatkan kesehatan masyarakat setempat",
    },
    {
      title: "GERMAS di Masyarakat - Dinkes Sleman",
      url: "https://dinkes.slemankab.go.id/germas/",
      description:
        "Sosialisasi dan pelaksanaan GERMAS di lingkungan masyarakat Kabupaten Sleman",
    },
    {
      title: "GERMAS untuk Lansia - Dinkes Jatim",
      url: "https://dinkes.jatimprov.go.id/germas-lansia/",
      description:
        "Program GERMAS untuk mendukung hidup sehat lansia di Jawa Timur",
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

export default WebsiteTerkaitGermas;
