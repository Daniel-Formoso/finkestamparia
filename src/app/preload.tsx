"use client";

import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simula carregamento por 1.5s
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
<div
  className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1E2939] transition-all duration-500 ease-in-out
  ${fadeOut ? "opacity-0 scale-200" : "opacity-100 scale-100"}`}
>
  <ClipLoader
  color="#EFA531"
  size={50}
  speedMultiplier={1}
/>
  <h1 className="mt-4 text-white text-sm font-bold">Carregando...</h1>
</div>

  );
}
