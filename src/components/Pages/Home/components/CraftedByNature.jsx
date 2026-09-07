import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const CraftedByNature = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f2ea]">
      <div className="flex flex-col md:flex-row md:items-stretch">

        {/* Image */}
        <Reveal
          as="div"
          className="relative h-[52vh] w-full overflow-hidden md:h-[85vh] md:w-[62%]"
        >
          <img
            src="/Hero-image/04.png"
            alt="Vaastu Italian Marble natural stone collection"
            className="h-full w-full object-cover"
          />
        </Reveal>

        {/* About Content */}
        <div className="relative flex w-full items-center md:w-[38%]">
          <Reveal
            delay={150}
            className="w-full px-6 py-14 sm:px-10 md:px-12 lg:px-16"
          >

            {/* Eyebrow */}
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
              <span className="gold-rule" />
              ABOUT VAASTU
            </p>

            {/* Heading */}
            <h2 className="font-display text-[42px] leading-[1.02] font-medium text-[#1a1a1a] sm:text-[52px] md:text-[46px] lg:text-[54px]">
              MORE THAN
              <br />
              JUST STONE
            </h2>

            {/* Content */}
            <p className="mt-7 max-w-sm text-[14px] leading-relaxed font-light text-[#5c564d] md:text-[15px]">
              Vaastu Italian Marble is a trusted name in the natural stone
              industry, offering a distinguished collection of marble,
              granite and premium natural stones.
            </p>

            <p className="mt-4 max-w-sm text-[14px] leading-relaxed font-light text-[#5c564d] md:text-[15px]">
              With decades of experience and a strong commitment to quality,
              we help homeowners, architects and designers discover the right
              stone, colour and pattern for every space.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 border border-[#1a1a1a]/25 px-6 py-3 text-[11px] font-medium tracking-[0.3em] text-[#1a1a1a] transition-all duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
            >
              DISCOVER OUR STORY

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Bottom Values */}
            <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-[#1a1a1a]/10 pt-6 text-[10px] font-medium tracking-[0.2em] text-[#8a7358] md:mt-16">
              <span>QUALITY</span>

              <span className="h-3 w-px bg-[#8a7358]/40" />

              <span>EXPERIENCE</span>

              <span className="h-3 w-px bg-[#8a7358]/40" />

              <span>TRUST</span>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CraftedByNature;