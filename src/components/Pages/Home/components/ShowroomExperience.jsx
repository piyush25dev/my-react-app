import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, X } from "lucide-react";
import Reveal from "./Reveal";

const ShowroomExperience = () => {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left: text + navigation buttons */}
          <Reveal className="md:w-[36%] md:shrink-0">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
              <span className="gold-rule" />
              EXPERIENCE VAASTU
            </p>
            <h2 className="font-display text-[38px] leading-[1.05] font-medium text-white sm:text-[48px] md:text-[42px] lg:text-[52px]">
              A SHOWROOM
              <br />
              LIKE NO OTHER
            </h2>
            <p className="mt-6 text-[14px] leading-relaxed font-light text-white/70 md:text-[15px]">
              Step into the world of Vaastu natural stone. Explore an
              exclusive collection designed for architects, designers and
              homeowners.
            </p>

            <div className="mt-9 flex flex-col gap-4">
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
                VIRTUAL TOUR
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </Reveal>

          {/* Right: video */}
          <Reveal
            delay={150}
            className="relative aspect-video w-full overflow-hidden md:w-[64%]"
          >
            <video
              src="/videos/intro.mov"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            <button
              type="button"
              onClick={() => setTourOpen(true)}
              aria-label="Play virtual tour"
              className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black md:h-20 md:w-20"
            >
              <Play size={22} fill="currentColor" className="ml-1" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Virtual tour lightbox */}
      {tourOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setTourOpen(false)}
            aria-label="Close virtual tour"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-black"
          >
            <X size={18} />
          </button>

          <video
            src="/videos/intro.mov"
            autoPlay
            controls
            playsInline
            className="max-h-[85vh] w-full max-w-4xl"
          />
        </div>
      )}
    </section>
  );
};

export default ShowroomExperience;
