"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = (): JSX.Element => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`${
        isBurgerOpen ? "h-[350px]" : ""
      } grid-header bg-black min-h-[4rem] p-[1rem] transition-[height] easi-in-out duration-500 xl:h-auto `}
    >
      <a href="/" style={{ WebkitTapHighlightColor: "transparent" }}>
        <div className="w-[175px] h-[100px] relative z-50">
          <Image
            src="/assets/logo.jpg"
            alt="Logo image"
            fill
            sizes="100px"
            unoptimized={true}
          />
        </div>
      </a>

      <div
        className={` ${
          isBurgerOpen ? "top-32" : "top-[-200px]"
        }  absolute flex flex-col justify-center items-center left-0 w-[100vw] text-white text-2xl gap-4 pb-8 transition-all duration-200 bg-black xl:static xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-12 xl:w-auto xl:pb-0`}
      >
        <a
          className={`hover:text-[#FF6000] duration-200 transition-colors ${
            pathname === "/" ? "text-[#FF6000]" : "text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
          href="/"
        >
          Acasă
        </a>
        <a
          className={`hover:text-[#FF6000] duration-200 transition-colors ${
            pathname === "/gallery" ? "text-[#FF6000]" : "text-white"
          } `}
          style={{ WebkitTapHighlightColor: "transparent" }}
          href="/gallery"
        >
          Galerie
        </a>
        <a
          className={`hover:text-[#FF6000] duration-200 transition-colors ${
            pathname === "/services" ? "text-[#FF6000]" : "text-white"
          } `}
          style={{ WebkitTapHighlightColor: "transparent" }}
          href="/services"
        >
          Servicii
        </a>
        <a
          className={`hover:text-[#FF6000] duration-200 transition-colors ${
            pathname === "/contact" ? "text-[#FF6000]" : "text-white"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
          href="/contact"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-row justify-end items-center xl:hidden mr-8 h-[100px] ">
        <div
          className={`space-y-2 flex flex-col justify-center duration-200 transition-all ${
            isBurgerOpen ? "rotate-90" : ""
          }`}
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
