"use client";

import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.querySelector("header")!.remove();
    document.querySelector("footer")!.remove();
    setIsLoading(false);
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
  } else
    return (
      <div className="min-h-[100vh] bg-black flex flex-col items-center justify-center gap-8">
        <h1 className="text-white text-9xl">404</h1>
        <h2 className="text-white text-4xl xl:text-2xl">
          Oooops! Pagina pe care o cautati nu exista!
        </h2>
        <a href="/">
          <button
            className="bg-[#212529] hover:bg-white hover:text-[#212529] text-white font-bold py-6 px-12 rounded-full transition-all duration-200 text-2xl xl:text-xl"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Du-Mă înapoi Acasă
          </button>
        </a>
      </div>
    );
}
