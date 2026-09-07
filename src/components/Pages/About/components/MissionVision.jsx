import Reveal from "./Reveal";

const MissionVision = () => {
  return (
    <section className="relative flex w-full flex-col md:h-[85vh] md:min-h-[560px] md:flex-row">
      {/* Mission — dark marble */}
      <div className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-black md:h-full md:min-h-0 md:w-1/2">
        <img
          src="/Hero-image/00.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />

        <Reveal className="relative z-10 px-6 py-16 sm:px-10 md:px-14 lg:px-16">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
            <span className="about-gold-rule" />
            OUR MISSION
          </p>

          <h2 className="font-display max-w-md text-[32px] leading-[1.1] font-medium text-white sm:text-[40px] md:text-[38px] lg:text-[44px]">
            QUALITY &amp; SERVICE AS SOLID AS OUR STONE.
          </h2>

          <div className="mt-8 max-w-md space-y-4 text-[14px] leading-relaxed font-light text-white/75">
            <p>
              Our mission is to ensure that granite, marble and unique,
              exotic and beautiful stones are available and attainable to
              all who desire them.
            </p>
            <p>
              We aspire to combine the beauty and durability of natural
              stone with unequalled personalized attention for all our
              patrons.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Vision — light marble */}
      <div className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-[#f6f2ea] md:h-full md:min-h-0 md:w-1/2">
        <img
          src="/Hero-image/04.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[#f6f2ea]/60" />

        <Reveal
          delay={150}
          className="relative z-10 px-6 py-16 sm:px-10 md:px-14 lg:px-16"
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="about-gold-rule" />
            OUR VISION
          </p>

          <h2 className="font-display max-w-md text-[32px] leading-[1.1] font-medium text-[#1a1a1a] sm:text-[40px] md:text-[38px] lg:text-[44px]">
            GLOBAL AMBITION
          </h2>

          <div className="mt-8 max-w-md space-y-4 text-[14px] leading-relaxed font-light text-[#5c564d]">
            <p>To become No.1 exporter to the US market in marbles and granites.</p>
            <p>
              We aim to become a{" "}
              <span className="font-medium text-[#8a7358]">
                one-stop shop solution
              </span>{" "}
              provider for natural flooring and architectural stone
              solutions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MissionVision;
