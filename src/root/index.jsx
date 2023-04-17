import React, { useState } from "react";
import "./Root.css";
import Map from "react-map-gl";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  const handleSanFranciscoClick = () => {
    setViewport({
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 11,
    });
  };

  const handleTashkentClick = () => {
    setViewport({
      latitude: 41.3112,
      longitude: 69.2797,
      zoom: 11,
    });
  };

  const handleNewYorkClick = () => {
    setViewport({
      latitude: 40.7128,
      longitude: -74.006,
      zoom: 11,
    });
  };

  const handleLondonClick = () => {
    setViewport({
      latitude: 51.5074,
      longitude: -0.1278,
      zoom: 11,
    });
  };

  return (
    <>
      <div class="mt-4 button-group d-flex flex-wrap justify-content-center">
        <button
          class="btn btn-primary mb-2 mx-1"
          onClick={handleSanFranciscoClick}
        >
          San Francisco
        </button>

        <button class="btn btn-primary mb-2 mx-1" onClick={handleTashkentClick}>
          Tashkent
        </button>

        <button class="btn btn-primary mb-2 mx-1" onClick={handleNewYorkClick}>
          New York
        </button>

        <button class="btn btn-primary mb-2 mx-1" onClick={handleLondonClick}>
          London
        </button>
      </div>

      <Map
        mapboxAccessToken="pk.eyJ1IjoibWlyamFsb2wwMyIsImEiOiJjbGdsZXRodWwwNWMzM3FyMmVqd3A5MTlmIn0.FaUy2Iooxkv-p5N3cXCPwg"
        {...viewport}
        initialViewState={{
          ...viewport,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        attributionControl={false}
        style={{ width: "90%", height: "80vh", margin: "20px auto" }}
      />
    </>
  );
};

export default Root;
