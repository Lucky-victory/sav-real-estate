"use client";

import { useEffect, useRef } from "react";

interface PropertyMapProps {
  location: string;
}

const PropertyMap = ({ location }: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet
    if (mapRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      mapRef.current.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Draw a placeholder map
        ctx.fillStyle = "#e5e7eb";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw some roads
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 4;

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height * (i / 5));
          ctx.lineTo(canvas.width, canvas.height * (i / 5));
          ctx.stroke();
        }

        // Vertical roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath();
          ctx.moveTo(canvas.width * (i / 5), 0);
          ctx.lineTo(canvas.width * (i / 5), canvas.height);
          ctx.stroke();
        }

        // Draw a marker for the property location
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Pin base
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
        ctx.fill();

        // Pin dot
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Add location text
        ctx.fillStyle = "#111827";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(location, centerX, centerY + 30);

        // Add "Map placeholder" text
        ctx.fillStyle = "#6b7280";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Interactive Map (Placeholder)", centerX, 30);
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }
      }
    };
  }, [location]);

  return (
    <div ref={mapRef} className="w-full h-full bg-gray-100 rounded-lg"></div>
  );
};

export default PropertyMap;
