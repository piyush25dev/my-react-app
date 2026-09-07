import Reveal from "./Reveal";

const stats = [
  { value: "2", label: "FACTORIES" },
  { value: "3", label: "SHOWROOMS" },
  { value: "2", label: "MINES" },
  { value: "100+", label: "TEAM MEMBERS" },
];

const LegacyCounters = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      <img
        src="/Hero-image/09.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative px-6 text-center sm:px-10 md:px-16 lg:px-24">
        <Reveal className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-t border-white/15 pt-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="font-display text-[44px] leading-none font-medium text-white sm:text-[56px] md:text-[64px]">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-medium tracking-[0.25em] text-[#c6a97c]">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={200}
          className="mt-16 border-t border-white/10 pt-12 md:mt-20"
        >
          <p className="font-display text-[28px] leading-[1.2] font-medium text-white sm:text-[34px] md:text-[40px]">
            TIMELESS SURFACES
            <br />
            INSPIRED SPACES
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default LegacyCounters;
