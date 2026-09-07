import { Palette, Compass, Gem, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const uspItems = [
  {
    id: "01",
    icon: Palette,
    title: "PERSONALIZED SELECTION",
    description:
      "Based on customers' taste and requirements, we suggest the finest marble and natural stone within their budget.",
  },
  {
    id: "02",
    icon: Compass,
    title: "DESIGN GUIDANCE",
    description:
      "Based on interior architects' designs, we guide customers toward colours and patterns that suit the ambience.",
  },
  {
    id: "03",
    icon: Gem,
    title: "QUALITY & VALUE",
    description:
      "We carefully select premium natural stones with a focus on quality, durability and value.",
  },
  {
    id: "04",
    icon: HeartHandshake,
    title: "AFTER-SALES CARE",
    description:
      "Every year we follow up with customers and ask for feedback and provide guidance for polishing and maintenance when required.",
  },
];

const Usp = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="about-gold-rule" />
            OUR USP
          </p>
          <h2 className="font-display text-[36px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[44px] md:text-[50px]">
            MORE THAN STONE
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-8">
          {uspItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.id}
                delay={index * 120}
                className="border-t border-[#1a1a1a]/10 pt-6"
              >
                <span className="font-display text-[15px] text-[#8a7358]">
                  {item.id}
                </span>
                <Icon
                  size={26}
                  strokeWidth={1.25}
                  className="mt-4 text-[#1a1a1a]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-[14px] font-medium tracking-[0.1em] text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed font-light text-[#5c564d]">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Usp;
