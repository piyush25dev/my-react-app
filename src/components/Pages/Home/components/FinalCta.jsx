import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const FinalCta = () => {
  return (
    <section className="relative h-[65vh] min-h-[440px] w-full overflow-hidden bg-black md:h-[80vh]">
      <img
        src="/Hero-image/01.png"
        alt="Premium natural stone slab"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />

      <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <h2 className="font-display max-w-2xl text-[38px] leading-[1.05] font-medium text-white sm:text-[52px] md:text-[62px]">
            FIND THE STONE
            <br />
            FOR YOUR SPACE
          </h2>

          <p className="mt-6 max-w-md text-[14px] leading-relaxed font-light text-white/75 md:text-[16px]">
            Explore our collection or visit the Vaastu showroom to experience
            natural stone in person.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 bg-[#c6a97c] px-7 py-3.5 text-[11px] font-medium tracking-[0.3em] text-black transition-all duration-300 hover:bg-white"
            >
              EXPLORE COLLECTION
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 border border-white/40 px-7 py-3.5 text-[11px] font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white"
            >
              CONTACT US
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
