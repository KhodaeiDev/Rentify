import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assetsa/assets";
import SignUp from './../pages/SignUp';

const Navbar = ({ textColor = "text-white" }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  const closeMobile = () => setShowMobileMenu(false);

  // مسیرهای واقعی پروژه‌ات
  const NAV_ITEMS = [
    { to: "/property", label: "رهن و اجاره" },
    // { to: "/consultants", label: "مشاورین املاک" },
    // { to: "/blog", label: "بلاگ رنتی فای" },
    { to: "/aboutus", label: "درباره ما" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8 lg:px-20">
        {/* Logo */}
        <Link to="/home" className="shrink-0">
          <img src={assets.logo} alt="Logo" className="w-20 md:w-20 lg:w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-3 lg:gap-7 ${textColor} text-xs lg:text-base whitespace-nowrap`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-neutral-tint-1 transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link
            to="/SignUp"
            className="bg-white px-4 py-1.5 rounded-full border border-neutral-300 text-xs lg:text-base cursor-pointer"
          >
            ورود / ثبت نام
          </Link>

          <Link
            to="/property"
            className="bg-primary-tint-1 text-white px-4 py-1.5 rounded-full text-xs lg:text-base cursor-pointer"
          >
            + ثبت آگهی رایگان
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-8 cursor-pointer md:hidden"
        />
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-all duration-300 md:hidden ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <img
            onClick={closeMobile}
            className="w-7 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col text-center gap-6 text-lg font-medium mt-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `py-2 block transition ${
                    isActive ? "text-primary" : "text-neutral-tint-1"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <Link
            to="/property"
            onClick={closeMobile}
            className="bg-primary-tint-1 text-white w-3/4 mx-auto py-2 rounded-full block"
          >
            + ثبت آگهی رایگان
          </Link>

          <Link
            to="/SignUp"
            onClick={closeMobile}
            className="bg-neutral-200 w-3/4 mx-auto py-2 rounded-full block"
          >
            ورود / ثبت نام
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
