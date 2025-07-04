import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"
        style={{ display: isDarkMode ? "none" : "block" }}
      >
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
          ${
            isScroll
              ? isDarkMode
                ? "bg-black/40 backdrop-blur-lg shadow-sm"
                : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
              : ""
          }
          ${
            !isScroll && isDarkMode
              ? "dark:bg-transparent dark:shadow-white/20"
              : ""
          }
        `}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
     <ul
  className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300
    ${
      isDarkMode
        ? isScroll
          ? "bg-black/40 backdrop-blur-lg border border-white/50"
          : "bg-transparent border border-white/50"
        : isScroll
        ? "bg-white bg-opacity-50 shadow-sm"
        : "bg-white bg-opacity-50 shadow-sm"
    }
  `}
  style={{
    border: isDarkMode ? "1px solid rgba(255,255,255,0.5)" : "none",
    backgroundColor:
      !isDarkMode && !isScroll ? "rgba(255,255,255,0.5)" : undefined,
  }}
>
  <li>
    <a className={`font-Ovo ${isDarkMode ? "text-white" : "text-black"}`} href="#top">
      Home
    </a>
  </li>
  <li>
    <a className={`font-Ovo ${isDarkMode ? "text-white" : "text-black"}`} href="#about">
      About me
    </a>
  </li>
  <li>
    <a className={`font-Ovo ${isDarkMode ? "text-white" : "text-black"}`} href="#skills">
      My Skills
    </a>
  </li>
  <li>
    <a className={`font-Ovo ${isDarkMode ? "text-white" : "text-black"}`} href="#projects">
      My Projects
    </a>
  </li>
  <li>
    <a className={`font-Ovo ${isDarkMode ? "text-white" : "text-black"}`} href="#contact">
      Contact me
    </a>
  </li>
</ul>



        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
  ref={sideMenuRef}
  className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
    transition duration-500
    ${isDarkMode ? "bg-[#111] text-white" : "bg-white text-black"}
    rounded-l-xl shadow-xl
  `}
>
  <div className="absolute right-6 top-6" onClick={closeMenu}>
    <Image
      src={isDarkMode ? assets.close_white : assets.close_black}
      alt=""
      className="w-5 cursor-pointer"
    />
  </div>
  <li>
    <a className="font-Ovo" onClick={closeMenu} href="#top">
      Home
    </a>
  </li>
  <li>
    <a className="font-Ovo" onClick={closeMenu} href="#about">
      About me
    </a>
  </li>
  <li>
    <a className="font-Ovo" onClick={closeMenu} href="#skills">
      My Skills
    </a>
  </li>
  <li>
    <a className="font-Ovo" onClick={closeMenu} href="#projects">
      My Projects
    </a>
  </li>
  <li>
    <a className="font-Ovo" onClick={closeMenu} href="#contact">
      Contact me
    </a>
  </li>
</ul>

      </nav>
    </div>
  );
};

export default Navbar;
