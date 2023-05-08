"use client";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = (): JSX.Element => {
  return (
    <footer className="grid-footer justify-between items-center gap-6 bg-black min-h-[4rem] p-[1rem] xl:gap-0">
      <a href="/" style={{ WebkitTapHighlightColor: "transparent" }}>
        <div className="my-0 mx-auto w-[175px] h-[100px] relative flex flex-row justify-center items-center xl:justify-start">
          <Image
            src="/assets/logo.jpg"
            alt="Logo image"
            fill
            sizes="100px"
            unoptimized={true}
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
          <a
            href="https://www.facebook.com/profile.php?id=100083361835160"
            target="_blank"
          >
            <FacebookIcon fontSize="large" />
          </a>

          <a
            href=" https://www.instagram.com/luxury.detailing.caransebes/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
