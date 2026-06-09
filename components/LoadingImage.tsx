"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type LoadingImageProps = ImageProps & {
  skeletonClassName?: string;
};

export default function LoadingImage({
  alt,
  className = "",
  skeletonClassName = "",
  onLoad,
  ...props
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="motion-image relative overflow-hidden">
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-slate-200 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`}
      >
        <div className="h-full w-full animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
      </div>
    </div>
  );
}
