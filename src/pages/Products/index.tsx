import { useEffect, useRef, useState } from "react";

const images = [
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
];

const UsersIcon = ({ className = "h-4 w-4 text-[#dfaa1a]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z" />
    <path d="M8 13c-3.314 0-6 2.686-6 6v1h14v-1c0-3.314-2.686-6-6-6H8zM18 13c-.347 0-.688.023-1.02.066C17.65 13.683 18 14.804 18 16v1h6v-1c0-3.314-2.686-6-6-6z" />
  </svg>
);

export default function ProductsCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    stopAuto();
    if (isHoveredRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function handleMouseEnter() {
    isHoveredRef.current = true;
    stopAuto();
  }
  function handleMouseLeave() {
    isHoveredRef.current = false;
    startAuto();
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Centered badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-transparent border border-[#dfaa1a]/30 rounded-full px-4 py-2">
            <UsersIcon />
            <span className="text-[#dfaa1a] text-sm font-medium">Our Products</span>
          </div>
        </div>

        {/* Carousel (no white background) */}
        <div
          className="relative w-full mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              prev();
              startAuto();
            } else if (e.key === "ArrowRight") {
              next();
              startAuto();
            }
          }}
        >
          {/* viewport */}
          <div className="overflow-hidden w-full">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${index * (100 / images.length)}%)`,
              }}
            >
              {images.map((src, i) => (
                <div
                  key={src + i}
                  className="flex-none w-full flex items-center justify-center"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <img
                    src={src}
                    alt={`product-${i + 5}`}
                    className="w-full h-auto object-contain max-h-[80vh] block"
                    onError={(e) => {
                      // hide broken image and optionally log
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      console.warn(`Image not found: ${src}`);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              prev();
              startAuto();
            }}
            aria-label="Previous slide"
            className="absolute left-18 top-1/2 -translate-y-1/2 bg-white/95 text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg border border-white/60 z-40 focus:outline-none"
          >
            {/* left chevron SVG (slightly smaller) */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => {
              next();
              startAuto();
            }}
            aria-label="Next slide"
            className="absolute right-18 top-1/2 -translate-y-1/2 bg-white/95 text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg border border-white/60 z-40 focus:outline-none"
          >
            {/* right chevron SVG (slightly smaller) */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* dots */}
          <div className="flex justify-center gap-2 py-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  startAuto();
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}