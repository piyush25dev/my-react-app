import Reveal from "./Reveal";

const GlobalPresence = () => {
  return (
    <section className="relative h-[65vh] min-h-[440px] w-full overflow-hidden bg-black md:h-[85vh]">
      <img
        src="/images/background/map.png"
        alt="Vaastu's global presence across continents"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <Reveal className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 md:px-16 md:pb-10 lg:px-24">
        <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
          <span className="gold-rule" />
          GLOBAL PRESENCE
        </p>
        <h2 className="font-display mt-3 text-[26px] leading-[1.1] font-medium text-white sm:text-[32px] md:text-[38px]">
          Bringing the world&apos;s finest natural stone to every continent
        </h2>
      </Reveal>
    </section>
  );
};

export default GlobalPresence;
