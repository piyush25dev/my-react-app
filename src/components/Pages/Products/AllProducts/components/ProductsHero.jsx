import { useLocation } from "react-router-dom";

const HERO_DATA = {

  granite: {
    image: "/Hero-image/01.png",
    eyebrow: "GRANITE COLLECTION",
    title: "GRANITE",
    subtitle: "Strength shaped into timeless beauty.",
    description:
      "Explore our Granite collection, offering exceptional durability, natural character and refined surfaces.",
  },

   exotic: {
    image: "/Hero-image/02.png",
    eyebrow: "EXOTIC COLLECTION",
    title: "EXOTIC",
    subtitle: "Rare stone with extraordinary character.",
    description:
      "Discover our Exotic collection, featuring distinctive patterns, rich colours and exceptional natural beauty.",
  },

  quartz: {
    image: "/Hero-image/03.png",
    eyebrow: "QUARTZ COLLECTION",
    title: "QUARTZ",
    subtitle: "Contemporary surfaces, effortless elegance.",
    description:
      "Explore our Quartz collection, designed to bring consistency, sophistication and lasting performance to modern spaces.",
  },

  "italian-marble": {
    image: "/Hero-image/04.png",
    eyebrow: "ITALIAN MARBLE COLLECTION",
    title: "ITALIAN MARBLE",
    subtitle: "Timeless elegance carved by nature.",
    description:
      "Discover our collection of exquisite Italian Marble, selected for luxurious interiors and exceptional spaces.",
  },

  onyx: {
    image: "/Hero-image/05.png",
    eyebrow: "ONYX COLLECTION",
    title: "ONYX",
    subtitle: "Translucent beauty that transforms spaces.",
    description:
      "Explore our Onyx collection, selected for its dramatic patterns, luminous depth and unmistakable visual character.",
  },

  elevation: {
    image: "/Hero-image/06.png",
    eyebrow: "ELEVATION COLLECTION",
    title: "ELEVATION",
    subtitle: "Architectural textures for inspired exteriors.",
    description:
      "Discover our Elevation collection, created to bring depth, texture and natural character to architectural spaces.",
  },

  default: {
    image: "/Hero-image/07.png",
    eyebrow: "NATURAL STONE COLLECTION",
    title: "EXPLORE OUR COLLECTION",
    subtitle: "Natural stone selected for exceptional spaces.",
    description:
      "Discover Vaastu&rsquo;s collection of Italian Marble, Granite, Quartz, Quartzite, Onyx and Elevation stones.",
  },
};

const ProductsHero = () => {
  const { pathname } = useLocation();

  const parts = pathname
    .split("/")
    .filter(Boolean)
    .map((part) => part.toLowerCase());

  const productsIndex = parts.indexOf("products");
  const categorySlug = parts[productsIndex + 1];

  const hero = HERO_DATA[categorySlug] || HERO_DATA.default;

  return (
    <section className="relative h-[46vh] min-h-[380px] w-full overflow-hidden bg-black md:h-[52vh] md:min-h-[440px]">
      {/* Hero Image */}
      <img
        src={hero.image}
        alt={hero.title}
        className="ap-kenburns absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/25" />

      {/* Content */}
      <div className="ap-hero-in relative z-10 flex h-full w-full flex-col items-start justify-end px-6 pb-10 sm:px-10 md:items-center md:justify-center md:px-16 md:pb-0 md:text-center">
        {/* Eyebrow */}
        <p className="mb-4 flex items-center gap-3 text-[11px] font-medium tracking-[0.35em] text-white/70">
          <span className="ap-gold-rule" />
          {hero.eyebrow}
        </p>

        {/* Title */}
        <h1 className="font-display text-[11vw] leading-[0.98] font-medium text-white sm:text-[48px] md:text-[58px]">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-[15px] font-light text-[#d9c19a] md:text-[17px]">
          {hero.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-lg text-[13px] leading-relaxed font-light text-white/75 md:text-[14px]">
          {hero.description}
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;