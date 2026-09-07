import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { storeLocations } from "../../../Data/StoreData";
import Reveal from "./Reveal";

const OurStores = () => {
  return (
    <section className="w-full bg-[#f6f2ea] py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-[#8a7358]">
            <span className="gold-rule" />
            EXPERIENCE VAASTU
          </p>
          <h2 className="font-display text-[38px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[48px] md:text-[54px]">
            OUR SHOWROOMS
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-6">
          {storeLocations.map((store, index) => (
            <Reveal
              key={store.id}
              delay={index * 120}
              className="group relative flex flex-col overflow-hidden bg-white"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={index === 0 ? "/images/about/shop.png" :"/images/background/hero.png"}
                  alt={`Vaastu showroom - ${store.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 text-[11px] font-medium tracking-[0.25em] text-white/85">
                  {store.type}
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="font-display text-[26px] font-medium text-[#1a1a1a] md:text-[28px]">
                    {store.name}
                  </h3>
                  <div className="mt-4 text-[13px] leading-relaxed font-light text-[#6b655c]">
                    {store.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <Link
                    to="/store-locator"
                    className="group/link inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-[#1a1a1a] transition-colors duration-300 hover:text-[#8a7358]"
                  >
                    VISIT SHOWROOM
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>

                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-[#8a7358] transition-colors duration-300 hover:text-[#1a1a1a]"
                  >
                    GET DIRECTIONS
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStores;
