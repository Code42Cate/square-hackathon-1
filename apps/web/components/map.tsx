"use client";
import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import clsx from "clsx";
import { Shop } from "database";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY29kZTQyY2F0ZSIsImEiOiJjbHU5MG15NzEwNGJpMmpta2gzNWMxazFqIn0.DmdGNtsf_SCeRxqEDlt0UQ";

export default function Map({
  lng,
  lat,
  className,
  shops,
}: {
  shops?: Shop[];
  className?: string;
  lng: number;
  lat: number;
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [lng, lat],
      zoom: zoom,
      antialias: true,
      dragRotate: true,
      dragPan: true,
    });

    shops?.forEach(({ lat, lng, name }) => {
      const el = document.createElement("div");

      el.innerHTML = `<div class="bg-blue-500 text-white rounded-full w-4 h-4"></div>`;

      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`<div class="p-2">${name}</div>`),
        )
        .addTo(map.current);
    });
  });

  return (
    <div
      ref={mapContainer}
      className={clsx(
        "h-full min-h-[400px] w-full overflow-hidden rounded-2xl border",
        className,
      )}
    />
  );
}
