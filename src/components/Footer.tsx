"use client";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = (): JSX.Element => {
  return (
    <footer className="grid-footer justify-between items-center gap-6 bg-[#212529] min-h-[4rem] p-[1rem] xl:gap-0">
      <a href="/">
        <div className="flex flex-row justify-center items-center xl:justify-start">
          <Image
            src="/assets/car-detailing.png"
            alt="Logo image"
            width="100"
            height="100"
          />
        </div>
      </a>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-md text-white text-center">
          Copyright © Luxury Detailing
        </h1>
        <h1 className="text-md text-white text-center">
          Toate drepturile rezervate
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-md text-white text-center">Urmăriți-ne</h1>
        <div className="flex flex-row gap-2">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
