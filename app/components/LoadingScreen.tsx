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
    // Reduced delay for faster LCP - show content sooner
    const timer = setTimeout(() => {
      setFading(true);
      // След fade out анимацията, скриваме loading screen-а
      setTimeout(() => setLoading(false), 300);
    }, 300);
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
            loading="lazy"
            quality={75}
            sizes="100vw"
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
