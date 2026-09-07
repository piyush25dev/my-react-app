import Reveal from "./Reveal";

const milestoneImages = [
  { src: "/images/background/1976.jpg", alt: "Vaastu — 1976, Inception" },
  { src: "/images/background/2001.jpg", alt: "Vaastu — 2001, Globalisation" },
  { src: "/images/background/2023.jpg", alt: "Vaastu — 2023, One Stop Solution" },
];

const Legacy = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f2ea] py-20 md:py-28">
      <img
        src="/images/about/story2.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />

      <div className="relative px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="gold-rule" />
            OUR JOURNEY
          </p>
          <h2 className="font-display max-w-xl text-[38px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[48px] md:text-[54px]">
            BUILDING A
            <br />
            GLOBAL LEGACY
          </h2>
          <p className="mt-6 max-w-lg text-[14px] leading-relaxed font-light text-[#5c564d] md:text-[15px]">
            From a vision to a global presence, Vaastu continues to bring the
            world&apos;s finest natural stones closer to you.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 md:mt-20">
          {milestoneImages.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 150}
              className="aspect-[4/5] w-full overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full "
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
