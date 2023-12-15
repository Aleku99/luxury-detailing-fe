"use client";
/* eslint-disable @next/next/no-img-element */
import noImageSvg from "../../../public/assets/no-photos.svg";
import { ImageList, ImageListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { galleryImageNames } from "@/lib/galleryImageNames";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/constants";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [galleryCols, setGalleryCols] = useState(1);
  const [page, setPage] = useState(0);

  const galleryImagesSrcs = galleryImageNames.map(
    (name) => `/assets/gallery/${name}`
  );
  const imagesPerPage = 9;

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setGalleryCols(1);
      } else {
        setGalleryCols(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [galleryImagesSrcs]);


  if (!galleryImagesSrcs || galleryImagesSrcs.length === 0) {
    return (
      <div className="min-h-[100vh] p-8 bg-black flex flex-col justify-center items-center">
        <h2 className="text-2xl text-white text-shadow text-center ">
          Ooops! Momentan nu avem imagini de afisat.
        </h2>
        <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-32 mb-48">
          <img
            className="invert"
            src={noImageSvg}
            alt="Nu sunt imagini de afisat"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-[100vh] bg-black flex flex-col justify-start items-center">
        <ImageList gap={8} cols={galleryCols} variant="standard">
          {galleryImagesSrcs
            .slice(page * imagesPerPage, (page + 1) * imagesPerPage)
            .map((imageSrc: string, index: number) => (
              <ImageListItem key={index}>
                <Image
                  width="1000"
                  height="600"
                  src={imageSrc}
                  alt={`Gallery image ${index}`}
                  onClick={() =>
                    openImageViewer(index + page * imagesPerPage)
                  }
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  style={{ cursor: "pointer" }}
                />
              </ImageListItem>
            ))}
        </ImageList>
        <div className="flex flex-row gap-4 flex-wrap ">
          {galleryImagesSrcs.map((img, index) => {
            if (index % imagesPerPage === 0) {
              return (
                <div
                  key={index}
                  className={`rounded-full text-xl ${
                    page === index / imagesPerPage
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } mt-8 mb-8 w-8 h-8 text-center hover:bg-white hover:text-black transition-all duration-200`}
                  onClick={() => {
                    setPage(index / imagesPerPage);
                    document.querySelector("header")!.scrollIntoView();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {index / imagesPerPage + 1}
                </div>
              );
            }
          })}
        </div>
        {isViewerOpen && (
          <ImageViewer
            disableScroll
            src={galleryImagesSrcs}
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
