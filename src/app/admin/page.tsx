"use client";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

const Admin = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `${process.env.NEXT_PUBLIC_DOMAIN}/admin`;
    }, 1000);
  });

  return (
    <div className="min-h-[100vh] bg-black flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl text-center">
        Redirecționare către panoul de administrare...
      </h1>
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
};

export default Admin;
