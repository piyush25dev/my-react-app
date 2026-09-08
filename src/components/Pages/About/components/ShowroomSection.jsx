import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, X } from "lucide-react";
import Reveal from "./Reveal";

const ShowroomSection = () => {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
            <span className="about-gold-rule" />
            EXPERIENCE VAASTU
          </p>
          <h2 className="font-display max-w-2xl text-[36px] leading-[1.05] font-medium text-white sm:text-[44px] md:text-[50px]">
            EXPERIENCE
            <br />
            THE EXTRAORDINARY
          </h2>
          <p className="mt-6 max-w-lg text-[14px] leading-relaxed font-light text-white/70 md:text-[15px]">
            A SHOWROOM LIKE NO OTHER — explore premium marble, granite,
            quartzite and natural stone collections in person.
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-6"
        >
          {/* 9:16 showroom tour video */}
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden md:mx-0 md:max-w-none">
            <video
              src="/videos/intro.mov"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            <button
              type="button"
              onClick={() => setTourOpen(true)}
              aria-label="Watch showroom tour"
              className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
            >
              <Play size={20} fill="currentColor" className="ml-1" />
            </button>
          </div>

          {/* Showroom images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2">
              <img
                src="/images/background/hero.png"
                alt="Vaastu Italian Marble showroom facade"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2">
              <img
                src="/images/about/shop.png"
                alt="Vaastu showroom interior with marble slabs on display"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={280}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to="/store-locator"
            className="group inline-flex items-center justify-center gap-3 bg-[#c6a97c] px-7 py-3.5 text-[11px] font-medium tracking-[0.3em] text-black transition-all duration-300 hover:bg-white"
          >
            VISIT OUR SHOWROOM
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => setTourOpen(true)}
            className="group inline-flex items-center justify-center gap-3 border border-white/40 px-7 py-3.5 text-[11px] font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white"
          >
            WATCH SHOWROOM TOUR
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Reveal>
      </div>

      {tourOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setTourOpen(false)}
            aria-label="Close showroom tour"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-black"
          >
            <X size={18} />
          </button>

          <video
            src="/videos/intro.mov"
            autoPlay
            controls
            playsInline
            className="max-h-[85vh] max-w-full"
          />
        </div>
      )}
    </section>
  );
};

export default ShowroomSection;
