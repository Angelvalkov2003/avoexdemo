"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      // След fade out анимацията, скриваме loading screen-а
      setTimeout(() => setLoading(false), 500);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/background3.webp"
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="relative z-10 text-white text-4xl font-bold">Avoex</div>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
