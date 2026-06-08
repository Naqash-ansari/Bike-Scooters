import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M7 Bike & Scooters",
    short_name: "M7 Bikes",
    description:
      "Bike repairs, scooter repairs, new bikes, used bikes, rentals, spare parts, and accessories in Salford.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f5f7",
    theme_color: "#e11d2e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
