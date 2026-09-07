const ProductsHero = () => {
  return (
    <section className="relative h-[46vh] min-h-[380px] w-full overflow-hidden bg-black md:h-[52vh] md:min-h-[440px]">
      <img
        src="/Hero-image/07.png"
        alt="Vaastu Italian Marble showroom slab"
        className="ap-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50" />

      <div className="ap-hero-in relative z-10 flex h-full w-full flex-col items-start justify-end px-6 pb-10 sm:px-10 md:items-center md:justify-center md:px-16 md:pb-0 md:text-center">
        <p className="mb-4 flex items-center gap-3 text-[11px] font-medium tracking-[0.35em] text-white/70">
          <span className="ap-gold-rule" />
          NATURAL STONE COLLECTION
        </p>

        <h1 className="font-display text-[11vw] leading-[0.98] font-medium text-white sm:text-[48px] md:text-[58px]">
          EXPLORE OUR COLLECTION
        </h1>

        <p className="mt-5 text-[15px] font-light text-[#d9c19a] md:text-[17px]">
          Natural stone selected for exceptional spaces.
        </p>

        <p className="mt-4 max-w-lg text-[13px] leading-relaxed font-light text-white/75 md:text-[14px]">
          Discover Vaastu&rsquo;s collection of Italian Marble, Granite,
          Quartz, Quartzite, Onyx and Elevation stones.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
