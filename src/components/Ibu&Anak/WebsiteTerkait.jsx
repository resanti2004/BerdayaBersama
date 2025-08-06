import React from "react";
import { ExternalLink } from "lucide-react";

const WebsiteTerkait = () => {
  const websites = [
    {
      title: "Dari Ibu untuk Ibu - ibupedia",
      url: "#",
      description: "Platform berbagi pengalaman antar ibu",
    },
    {
      title:
        "Informasi Terkini Kehamilan, Parenting, dan Mom Life - halibunda.com",
      url: "#",
      description: "Artikel lengkap seputar kehamilan dan parenting",
    },
    {
      title: "theAsianparent: Situs Parenting Terbaik di Indonesia",
      url: "#",
      description: "Komunitas parenting terbesar di Asia",
    },
  ];

  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Website Terkait
      </h2>

      <div className="space-y-3">
        {websites.map((website, index) => (
          <div key={index} className="group">
            <a
              href={website.url}
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

              {/* <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
            </a>
          </div>
        ))}
      </div>

      <button className="text-sm text-gray-500 mt-4 w-full text-center pt-1">
        Selengkapnya
      </button>
    </div>
  );
};

export default WebsiteTerkait;
