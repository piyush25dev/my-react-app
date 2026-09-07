import Reveal from "./Reveal";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-black md:h-[85vh]">
      <div className="absolute inset-0 h-full w-full">
        <img
          src="/images/about/story3.png"
          alt="Vaastu marble quarry"
          className="about-kenburns h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/45" />

      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-14 sm:px-10 md:px-16 md:pb-20 lg:px-24">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.35em] text-white/70">
            <span className="about-gold-rule" />
            ABOUT VAASTU
          </p>

          <h1 className="font-display text-[13vw] leading-[0.95] font-medium text-white sm:text-[62px] md:text-[74px] lg:text-[88px]">
            <span className="block">A LEGACY</span>
            <span className="block text-[#d9c19a]">BUILT ON STONE</span>
          </h1>

          <p className="mt-6 max-w-lg text-[14px] leading-relaxed font-light text-white/80 md:text-[16px]">
            From our beginnings in Rajasthan to a growing presence across
            Telangana and beyond, our journey has been shaped by quality,
            expertise and trust.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutHero;
