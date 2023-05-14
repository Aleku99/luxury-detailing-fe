"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import noImageSvg from "../../../public/assets/no-photos.svg";
import { ImageList, ImageListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { galleryImageNames } from "@/lib/galleryImageNames";
import { ColorRing } from "react-loader-spinner";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [galleryCols, setGalleryCols] = useState(1);

  const images = galleryImageNames.map(
    (imageName) => `./assets/gallery/${imageName}`
  );

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
    setIsLoading(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] bg-black flex flex-col justify-center items-center">
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
  } else {
    if (!images || (images as string[]).length === 0) {
      return (
        <div className="min-h-[100vh] p-8 bg-black flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white text-shadow text-center ">
            Ooops! Momentan nu avem imagini de afisat.
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
        <div className="min-h-[100vh] bg-black flex flex-col justify-start items-center">
          <ImageList gap={8} cols={galleryCols} variant="standard">
            {(images as string[]).map((image: string, index: number) => (
              <ImageListItem key={index}>
                <img
                  src={`${image}`}
                  loading="eager"
                  alt={`Gallery image ${index}`}
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
  }
};

export default Gallery;
