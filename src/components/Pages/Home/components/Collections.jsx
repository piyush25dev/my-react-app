import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const collections = [
  {
    id: "01",
    name: "ITALIAN MARBLE",
    description: "Timeless elegance from Italy",
    image: "/Hero-image/06.png",
    to: "/products/italian-marble",
  },
  {
    id: "02",
    name: "GRANITE",
    description: "Strength in natural form",
    image: "/images/gallery/gallery2.jpg",
    to: "/products/granite",
  },
  {
    id: "03",
    name: "Elevation",
    description: "Architectural textures for inspired exteriors",
    image: "/Hero-image/10.png",
    to: "/products/elevation",
  },
  {
    id: "04",
    name: "QUARTZ",
    description: "Versatile beauty for every design",
    image: "/images/products/white.quartz.png",
    to: "/products/quartz",
  },
  {
    id: "05",
    name: "ONYX",
    description: "Nature's translucent art",
    image: "/Hero-image/00.png",
    to: "/products/onyx",
  },
  {
    id: "06",
    name: "EXOTIC",
    description: "Rare stones for remarkable spaces",
    image: "/Hero-image/12.png",
    to: "/products/exotic",
  },
];

const Collections = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#c6a97c]">
              <span className="gold-rule" />
              OUR COLLECTIONS
            </p>
            <h2 className="font-display text-[38px] leading-[1.05] font-medium text-white sm:text-[48px] md:text-[54px]">
              A WORLD OF
              <br />
              NATURAL BEAUTY
            </h2>
          </div>

          <Link
            to="/products"
            className="group hidden shrink-0 items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-white/70 transition-colors duration-300 hover:text-white md:flex"
          >
            EXPLORE ALL COLLECTIONS
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>

      {/* Panels */}
      <div className="mt-12 flex w-full gap-3 overflow-x-auto px-6 pb-4 sm:px-10 md:mt-16 md:grid md:grid-cols-6 md:gap-2 md:overflow-visible md:px-16 md:pb-0 lg:px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {collections.map((item, index) => (
          <Reveal
            key={item.id}
            delay={index * 90}
            className="group relative aspect-[3/4.4] w-[68vw] shrink-0 cursor-pointer overflow-hidden sm:w-[42vw] md:aspect-[3/4.6] md:w-auto md:shrink"
          >
            <Link to={item.to} className="block h-full w-full">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20 transition-opacity duration-500 group-hover:from-black/95" />

              <span className="absolute top-5 left-5 text-[11px] font-medium tracking-[0.2em] text-white/60">
                {item.id}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-[15px] font-medium tracking-[0.08em] text-white md:text-[17px]">
                  {item.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-[12px] leading-relaxed font-light text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-[#d9c19a] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-2">
                  EXPLORE COLLECTION
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Collections;
