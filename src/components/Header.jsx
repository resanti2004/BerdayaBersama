import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/DesainLogoKKN.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Function to determine if a menu item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Menu items with their corresponding routes
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Ibu & Anak", path: "/beranda-ibu-dan-anak" },
    { name: "Germas", path: "/beranda-germas" },
    { name: "Lingkungan", path: "/beranda-lingkungan" },
    // { name: "Tentang Kita", path: "/tentang-kita" }, // You may need to add this route
  ];

  return (
    <nav className="bg-gray-50 rounded-4xl mx-4 mt-6 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 relative">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-1">
          <img src={Logo} className="h-9" alt="Logo" />
          <span className="self-center text-2xl font-semibold">
            BerdayaBersama
          </span>
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md hover:bg-gray-200"
          aria-controls="navbar"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* MENU FLOATING */}
        <div
          className={`${
            menuOpen
              ? "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 block"
              : "hidden"
          } md:static md:block w-full md:w-auto bg-gray-50 md:bg-transparent rounded-lg shadow md:shadow-none z-50`}
        >
          <ul className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 p-2 md:p-0">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)} // Close mobile menu when link is clicked
                  className={`block py-2 px-3 rounded-sm md:p-0 capitalize transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
