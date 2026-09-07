import Reveal from "./Reveal";

const Intro = () => {
  return (
    <section className="w-full bg-[#f6f2ea]">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <Reveal
          as="div"
          className="relative h-[46vh] w-full overflow-hidden md:h-[70vh] md:w-1/2"
        >
          <img
            src="/images/about/girish.png"
            alt="Natural stone blocks at the Vaastu quarry"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <div className="flex w-full items-center md:w-1/2">
          <Reveal
            delay={150}
            className="w-full px-6 py-14 sm:px-10 md:px-14 lg:px-20"
          >
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
              <span className="about-gold-rule" />
              WHO WE ARE
            </p>

            <h2 className="font-display text-[36px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[44px] md:text-[42px] lg:text-[50px]">
              CRAFTED BY
              <br />
              EXPERIENCE
            </h2>

            <p className="mt-7 max-w-lg text-[14px] leading-relaxed font-light text-[#5c564d] md:text-[15px]">
              Vaastu Marble & Granites Pvt. Ltd. is one among the top
              manufacturers and sellers of marble and granite, with a strong
              presence in the natural stone market and a large customer base.
            </p>

            <p className="mt-5 max-w-lg text-[14px] leading-relaxed font-light text-[#5c564d] md:text-[15px]">
              We provide carefully selected granites, marbles and unique
              natural stones based on customer requirements. Our team
              combines product knowledge and experience to guide customers
              toward the right colour, pattern and material for their
              ambience and budget.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Intro;
