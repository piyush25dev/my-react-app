import Reveal from "./Reveal";

const milestones = [
  {
    year: "1975",
    title: "THE BEGINNING",
    description:
      "The company was started in 1975 in Rajasthan under the guidance of Chairman Dr. J.L. Punglia.",
  },
  {
    year: "1995",
    title: "A NEW CHAPTER",
    description: "Registered and recognised as Punglia Marbles Pvt. Ltd.",
  },
  {
    year: "2006",
    title: "VAASTU IS BORN",
    description:
      "The company was renamed Vaastu Marble & Granites Pvt. Ltd.",
  },
  {
    year: "TODAY",
    title: "A GROWING LEGACY",
    description: "2 Factories · 3 Showrooms · 2 Mines · 100+ Team Members",
  },
];

const Journey = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <img
        src="/images/about/story2.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />

      <div className="relative px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="about-gold-rule" />
            OUR JOURNEY
          </p>
          <h2 className="font-display text-[36px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[44px] md:text-[50px]">
            FIFTY YEARS
            <br />
            IN THE MAKING
          </h2>
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute top-3 left-0 hidden h-px w-full bg-[#1a1a1a]/15 md:block" />
          <div className="absolute top-0 left-3 h-full w-px bg-[#1a1a1a]/15 md:hidden" />

          <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-6">
            {milestones.map((item, index) => (
              <Reveal
                key={item.year}
                delay={index * 130}
                className="relative pl-10 md:w-1/4 md:pl-0 md:pr-6"
              >
                <span className="absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-[#c6a97c] md:static md:mb-6 md:block" />

                <p className="font-display text-[28px] leading-none font-medium text-[#1a1a1a] md:text-[34px]">
                  {item.year}
                </p>
                <p className="mt-2 text-[11px] font-medium tracking-[0.2em] text-[#8a7358]">
                  {item.title}
                </p>
                <p className="mt-3 max-w-[240px] text-[13px] leading-relaxed font-light text-[#5c564d]">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
