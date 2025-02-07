"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DarkModeMap = () => {
  return (
    <div className="w-full h-[50vh] mt-28">
      <MapContainer
        center={[23.79147847233733, 89.33082437222005]} // Los Angeles
        zoom={11}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      </MapContainer>
    </div>
  );
};

export default DarkModeMap;
