import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const FeaturedStone = () => {
  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden bg-black md:h-[92vh]">
      <div className="section-zoom-slow absolute inset-0 h-full w-full">
        <img
          src="/Hero-image/09.png"
          alt="Natural stone slab with dramatic veining"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/40" />

      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-14 sm:px-10 md:justify-center md:px-16 md:pb-0 lg:px-24">
        <Reveal className="max-w-xl">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-white/70">
            <span className="gold-rule" />
            FEATURED EXPERIENCE
          </p>

          <h2 className="font-display text-[40px] leading-[1.05] font-medium text-white sm:text-[56px] md:text-[64px]">
            EVERY SLAB
            <br />
            TELLS A STORY
          </h2>

          <p className="mt-6 text-[14px] leading-relaxed font-light tracking-wide text-white/80 md:text-[16px]">
            Unique veining. Natural character. Timeless beauty.
          </p>

          <Link
            to="/gallery"
            className="group mt-9 inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-[11px] font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-[#c6a97c] hover:bg-[#c6a97c] hover:text-black"
          >
            DISCOVER OUR STONES
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedStone;
