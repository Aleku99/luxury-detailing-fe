"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import noImageSvg from "../../../public/assets/no-photos.svg";
import { ImageList, ImageListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import ImageViewer from "react-simple-image-viewer";
import { ColorRing } from "react-loader-spinner";

const imagesFetcher = (url: any) =>
  fetch(url, { cache: "no-store" })
    .then((res) => res.json())
    .then((images) =>
      images.data.map(
        (image: any) =>
          `${process.env.NEXT_PUBLIC_DOMAIN}${image.attributes.image.data.attributes.url}`
      )
    )
    .catch((error) => {
      throw new Error(error);
    });

const Gallery = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/images?populate=*`,
    imagesFetcher
  );
  const images = data;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [galleryCols, setGalleryCols] = useState(1);

  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleResize = () => {
    setGalleryCols(window.innerWidth < 1280 ? 1 : 3);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] bg-[#393E46] flex flex-col justify-center items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["white", "white", "white", "white", "white"]}
        />
      </div>
    );
  } else if (error || images.length === 0) {
    return (
      <div className="min-h-[100vh] bg-[#393E46] flex flex-col justify-center items-center">
        <h2 className="text-2xl text-white text-shadow text-center ">
          Ooops! Momentan nu avem nimic de afisat aici.
        </h2>

        <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-32 mb-48">
          <Image
            className="invert"
            src={noImageSvg}
            alt="Nu sunt imagini de afisat"
            fill
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-[100vh] bg-[#393E46] flex flex-col justify-start items-center">
        <ImageList gap={8} cols={galleryCols} variant="standard">
          {images.map((image: any, index: number) => (
            <ImageListItem key={index}>
              <img
                src={`${image}`}
                srcSet={`${image}`}
                alt={`Gallery image ${index}`}
                loading="lazy"
                onClick={() => openImageViewer(index)}
                style={{ cursor: "pointer" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        {isViewerOpen && (
          <ImageViewer
            disableScroll
            src={images}
            currentIndex={currentImage}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ zIndex: 999 }}
          />
        )}
      </div>
    );
  }
};

export default Gallery;
