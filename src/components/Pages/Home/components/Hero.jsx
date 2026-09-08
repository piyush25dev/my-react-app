import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const SLIDES = ["/images/background/hero.png", "/images/background/hero2.png"];
const SLIDE_DURATION = 5000;

function Hero() {
  const [offset, setOffset] = useState(0);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Subtle parallax: background drifts slower than the page scrolls.
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.25);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  }, []);

  // Automatic crossfade every SLIDE_DURATION ms.
  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(timerRef.current);
  }, [restartAutoplay]);

  const goToSlide = (index) => {
    setCurrent(index);
    restartAutoplay();
  };

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-black">
      {/* Background slideshow */}
      <div
        className="absolute inset-0 h-[120%] w-full"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        {SLIDES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Vaastu Italian Marble showroom"
            className={`hero-kenburns hero-slide h-full w-full object-cover ${
              index === current ? "hero-slide-active" : ""
            }`}
          />
        ))}
      </div>

      {/* Diagonal dark panel — desktop/tablet only */}
      <div className="hero-diagonal absolute inset-y-0 left-0 hidden w-[55%] md:block" />

      {/* Mobile overlay — bottom-anchored gradient */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/45 to-transparent md:hidden" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-16 sm:px-10 md:justify-center md:px-16 md:pb-0 lg:px-24">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] text-white/70 sm:text-[11px] sm:tracking-[0.28em] md:mb-7 md:text-[12px] md:tracking-[0.35em]">
            <span className="h-px w-6 shrink-0 bg-[#c6a97c] sm:w-8" />
            VAASTU ITALIAN MARBLE
          </p>

          <h1 className="font-display text-[40px] leading-[0.95] font-medium text-white sm:text-45px] md:text-[40px] lg:text-[55px]">
            <span className="block">NATURAL STONE</span>
            <span className="block">FOR A BETTER</span>
            <span className="block text-[#d9c19a]">TOMORROW</span>
          </h1>

          <p className="mt-6 max-w-md text-[14px] leading-relaxed font-light text-white/80 md:mt-8 md:text-[16px]">
           Discover an exquisite collection of Italian Marble, Granite, Quartzite, Quartz & Natural Stones — carefully selected to bring exceptional beauty, character and lasting elegance to every space.
          </p>

          <Link
            to="/products"
            className="group mt-9 inline-flex items-center gap-3 border border-white/40 px-7 py-3.5 text-[11px] font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-[#c6a97c] hover:bg-[#c6a97c] hover:text-black md:mt-11"
          >
            EXPLORE COLLECTION
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-6 z-10 flex items-center gap-3 sm:left-10 md:left-16 lg:left-24">
        {SLIDES.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === current}
            className="group cursor-pointer py-2"
          >
            <span
              className={`block h-[2px] w-8 transition-all duration-300 ${
                index === current
                  ? "bg-[#c6a97c]"
                  : "bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] tracking-[0.35em] text-white/60">
          SCROLL
        </span>
        <span className="h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}

export default Hero;
