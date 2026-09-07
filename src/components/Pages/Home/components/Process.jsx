import Reveal from "./Reveal";

const steps = [
  {
    id: "01",
    title: "SELECT",
    description: "Choose from our curated collection",
  },
  {
    id: "02",
    title: "CURATE",
    description: "Find the perfect match",
  },
  {
    id: "03",
    title: "DESIGN",
    description: "Bring your vision to life",
  },
  {
    id: "04",
    title: "DELIVER",
    description: "Quality materials, on time",
  },
];

const Process = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-20">
          {/* Left: heading */}
          <Reveal className="md:w-[32%] md:shrink-0">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
              <span className="gold-rule" />
              OUR PROCESS
            </p>
            <h2 className="font-display text-[38px] leading-[1.05] font-medium text-white sm:text-[48px] md:text-[42px] lg:text-[50px]">
              FROM NATURE
              <br />
              TO YOUR SPACE
            </h2>
          </Reveal>

          {/* Right: process steps */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:flex-1 md:gap-x-10 md:gap-y-12">
            {steps.map((step, index) => (
              <Reveal
                key={step.id}
                delay={index * 120}
                className="border-t border-white/15 pt-6"
              >
                <span className="font-display text-[15px] text-[#c6a97c]">
                  {step.id}
                </span>
                <h3 className="mt-4 text-[16px] font-medium tracking-[0.15em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed font-light text-white/60">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
