import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const applications = [
  { name: "LIVING SPACES", image: "/Hero-image/07.png" },
  { name: "KITCHENS", image: "/Home/alaska-banner.jpg" },
  { name: "BATHROOMS", image: "/images/gallery/thumb.jpg" },
  { name: "STAIRCASES", image: "/Hero-image/03.png" },
  { name: "FACADE & ELEVATION", image: "/Hero-image/02.png" },
  { name: "COMMERCIAL SPACES", image: "/Home/antico-slider.jpg" },
];

const Applications = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[38px] leading-[1.05] font-medium text-[#1a1a1a] sm:text-[48px] md:text-[54px]">
            STONE FOR
            <br />
            EVERY SPACE
          </h2>

          <Link
            to="/application-of-italian-marble"
            className="group hidden shrink-0 items-center gap-2 text-[11px] font-medium tracking-[0.25em] text-[#5c564d] transition-colors duration-300 hover:text-[#1a1a1a] md:flex"
          >
            SEE ALL APPLICATIONS
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 md:gap-4">
          {applications.map((app, index) => (
            <Reveal
              key={app.name}
              delay={index * 80}
              as={Link}
              to="/application-of-italian-marble"
              className="group relative block aspect-[4/5] overflow-hidden sm:aspect-[4/3]"
            >
              <img
                src={app.image}
                alt={app.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent transition-colors duration-500 group-hover:from-black/75" />
              <span className="absolute bottom-4 left-4 text-[12px] font-medium tracking-[0.15em] text-white sm:bottom-5 sm:left-5 sm:text-[14px]">
                {app.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
