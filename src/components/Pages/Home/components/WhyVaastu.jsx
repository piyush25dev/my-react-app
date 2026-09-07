import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  UsersRound,
  Gem,
  MapPin,
} from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  {
    id: "01",
    value: 15000,
    suffix: "+",
    label: "HAPPY CUSTOMERS",
    icon: UsersRound,
  },
  {
    id: "02",
    value: 300,
    suffix: "+",
    label: "STONE VARIETIES",
    icon: Gem,
  },
  {
    id: "03",
    value: 5,
    suffix: "",
    label: "STATES",
    icon: MapPin,
  },
];

const categories = [
  {
    id: "01",
    title: "GRANITES & TILES",
    description:
      "Premium surfaces for timeless residential and commercial spaces.",
    image: "/Hero-image/02.png",
  },
  {
    id: "02",
    title: "ITALIAN MARBLE & QUARTZ",
    description:
      "Elegant materials for refined interiors.",
    image: "/Hero-image/03.png",
  },
  {
    id: "03",
    title: "WINDOW & KITCHEN STONES",
    description:
      "Functional stone solutions designed for everyday spaces.",
    image: "/Hero-image/05.png",
  },
  {
    id: "04",
    title: "POOJA ROOM & BALCONY STONES",
    description:
      "Carefully selected stones for distinctive spaces.",
    image: "/Hero-image/06.png",
  },
  {
    id: "05",
    title: "WALL CLADDING & PARKING STONES",
    description:
      "Durable surfaces for exterior and architectural applications.",
    image: "/Hero-image/08.png",
  },
];

/* =========================================================
   REDUCED MOTION
========================================================= */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   STAT ITEM
========================================================= */

const StatItem = ({ stat, index, active }) => {
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? stat.value : 0,
  );

  const Icon = stat.icon;

  useEffect(() => {
    if (!active || prefersReducedMotion()) return;

    const duration = 1400;
    const delay = index * 200;

    let start = null;
    let frame;

    const step = (timestamp) => {
      if (start === null) {
        start = timestamp;
      }

      const elapsed = timestamp - start - delay;

      if (elapsed < 0) {
        frame = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.round(stat.value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [active, stat.value, index]);

  return (
    <div className="relative flex  items-start justify-between">
      
      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <div>
     

        {/* Counter */}
        <div className="font-display mt-4 text-[52px] leading-none font-medium text-[#111111] sm:text-[60px] md:text-[56px] lg:text-[64px]">
          {display.toLocaleString()}
          {stat.suffix}
        </div>

        {/* Label */}
        <p className="mt-4 text-[12px] font-medium tracking-[0.25em] text-[#5c564d]">
          {stat.label}
        </p>
      </div>

      {/* =====================================================
          ICON
      ====================================================== */}

      <div
        className="
          mr-2
          mt-8
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#c6a97c]/30
          text-[#c6a97c]
          transition-all
          duration-500
          hover:border-[#c6a97c]
          hover:bg-[#c6a97c]/10
          sm:mr-6
          md:mr-8
        "
      >
        <Icon
          size={25}
          strokeWidth={1.2}
        />
      </div>
    </div>
  );
};

/* =========================================================
   WHY VAASTU
========================================================= */

const WhyVaastu = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  /* =======================================================
     STATS INTERSECTION OBSERVER
  ======================================================== */

  useEffect(() => {
    const node = statsRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10 ">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">

        {/* Marble background */}
        <img
          src="/Hero-image/04.png"
          alt=""
          aria-hidden="true"
          className="
            section-zoom-slow
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-[0.07]
          "
        />

        {/* Soft background overlay */}
        <div className="absolute inset-0" />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24">

        <div
          className="
            grid
            grid-cols-1
            gap-16
            md:grid-cols-[55%_45%]
            md:gap-12
            lg:gap-20
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <Reveal>

            {/* Section label */}
            <p
              className="
                mb-5
                flex
                items-center
                gap-3
                text-[11px]
                font-medium
                tracking-[0.3em]
                text-[#8a7358]
              "
            >
              <span className="gold-rule" />

              WHY VAASTU
            </p>

            {/* Heading */}
            <h2
              className="
                font-display
                text-[36px]
                leading-[1.05]
                font-medium
                text-[#111111]
                sm:text-[46px]
                md:text-[42px]
                lg:text-[50px]
              "
            >
              YOUR ONE-STOP  <br /> DESTINATION
              <br />
              FOR <span className="text-[#c6a97c]">GRANITE</span> &amp; <span className="text-[#c6a97c]">TILES</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-md
                text-[14px]
                leading-relaxed
                font-light
                text-[#5c564d]
                md:text-[15px]
              "
            >
              With over 15,000 happy customers and a collection of
              300+ varieties, we bring together premium natural stone
              and surface solutions for every space. With distribution
              across 5 states, our collection combines quality,
              variety and expert guidance under one roof.
            </p>

            {/* CTA */}
            <Link
              to="/products"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                border
                border-[#1a1a1a]/25
                px-6
                py-3
                text-[11px]
                font-medium
                tracking-[0.3em]
                text-[#1a1a1a]
                transition-all
                duration-300
                hover:border-[#1a1a1a]
                hover:bg-[#1a1a1a]
                hover:text-white
              "
            >
              EXPLORE OUR COLLECTION

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </Reveal>

          {/* =================================================
              STATISTICS
          ================================================== */}

          <div
            ref={statsRef}
            className="relative"
          >

            {/* Decorative vertical text */}
            <span
              aria-hidden="true"
              className="
                font-display
                pointer-events-none
                absolute
                top-1/2
                -right-1
                z-0
                hidden
                origin-right
                -translate-y-1/2
                rotate-90
                text-[22px]
                font-medium
                tracking-[0.05em]
                italic
                text-[#c6a97c]/[0.18]
                select-none
                sm:block
                lg:text-[26px]
              "
            >
              More Than Stone
            </span>

            {/* Stats */}
            <div className="relative z-10 flex flex-col">

              {stats.map((stat, index) => (
                <Reveal
                  key={stat.id}
                  delay={index * 150}
                  className={
                    index > 0
                      ? "mt-8 border-t border-[#c6a97c]/30 pt-8"
                      : ""
                  }
                >
                  <StatItem
                    stat={stat}
                    index={index}
                    active={statsInView}
                  />
                </Reveal>
              ))}

            </div>
          </div>
        </div>

        {/* =================================================
            CATEGORY STRIP
            Kept commented exactly as requested
        ================================================== */}

        {/*
        <div className="mt-20 md:mt-28">
          <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-0 md:overflow-visible md:pb-0">
            {categories.map((category, index) => (
              <Reveal
                key={category.id}
                delay={index * 100}
                className="group relative w-[78vw] shrink-0 border border-[#1a1a1a]/10 bg-white transition-transform duration-500 hover:-translate-y-1.5 sm:w-[46vw] md:w-auto md:shrink"
              >
                <Link
                  to="/products"
                  className="relative block h-full overflow-hidden px-6 py-8 md:px-6 md:py-9"
                >
                  <img
                    src={category.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]"
                  />

                  <div className="relative">

                    <span className="font-display block text-[26px] font-medium text-[#111111] transition-colors duration-400 group-hover:text-[#b3242c]">
                      {category.id}
                    </span>

                    <h3 className="mt-5 text-[13px] font-medium tracking-[0.15em] text-[#1a1a1a]">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-[12.5px] leading-relaxed font-light text-[#7a736a]">
                      {category.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-[#8a7358]">
                      EXPLORE

                      <ArrowRight
                        size={13}
                        className="transition-transform duration-400 group-hover:translate-x-1.5"
                      />
                    </span>

                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default WhyVaastu;