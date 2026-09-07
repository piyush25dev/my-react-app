const BrandStatement = () => {
  return (
    <section className="border-t border-black/10 px-6 py-14 sm:px-10 md:px-16">
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-display text-[18px] leading-tight font-medium tracking-wide text-[#1a1a1a]">
          <span className="block">NATURAL STONE</span>
          <span className="block">FOR A BETTER TOMORROW</span>
        </p>

        <span className="ap-gold-rule hidden md:block" />

        <p className="text-[12px] font-medium tracking-[0.25em] text-[#8a7358] uppercase">
          Timeless&nbsp;/&nbsp;Durable&nbsp;/&nbsp;Exceptional
        </p>
      </div>
    </section>
  );
};

export default BrandStatement;
