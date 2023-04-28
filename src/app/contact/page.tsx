"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

const Contact = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env
      .NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [22.22645, 45.40365], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    const marker1 = new mapboxgl.Marker({ color: "red" })
      .setLngLat([22.22645, 45.40365])
      .addTo(map.current);
  }, []);

  return (
    <div className="min-h-[100vh] bg-black flex flex-col justify-start items-center">
      <div className="h-[50vh] w-[100vw]" ref={mapContainer}></div>
      <h1 className="text-xl text-white text-center mt-16">Luxury Detailing</h1>
      <h2 className="text-xl text-white text-center">
        Strada Nicolae Titulescu Nr. 37, Caransebes
      </h2>
      <h3 className="text-xl text-white text-center mb-16">
        <a href="tel:+40787415445">+40787415445</a>
      </h3>
    </div>
  );
};

export default Contact;
