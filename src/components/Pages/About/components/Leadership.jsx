import Reveal from "./Reveal";

const leaders = [
  {
    name: "Dr. J.L. Punglia",
    role: "Chairman",
    image: "/images/about/persion.png",
  },
  {
    name: "Nalin Punglia",
    role: "Board Director",
    image: "/images/about/2persion.png",
  },
  {
    name: "Girish Punglia",
    role: "Board Director",
    image: "/images/about/girish.png",
  },
];

const Leadership = () => {
  return (
    <section className="w-full bg-[#f6f2ea] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="about-gold-rule" />
            LEADERSHIP
          </p>
          <h2 className="font-display text-[36px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[44px] md:text-[50px]">
            THE PEOPLE
            <br />
            BEHIND VAASTU
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-20 md:gap-8">
          {leaders.map((leader, index) => (
            <Reveal
              key={leader.name}
              delay={index * 130}
              className="group"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-5 text-[22px] font-medium text-[#1a1a1a]">
                {leader.name}
              </h3>
              <p className="mt-1 text-[12px] font-medium tracking-[0.2em] text-[#8a7358]">
                {leader.role.toUpperCase()}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
