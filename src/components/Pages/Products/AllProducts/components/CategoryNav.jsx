const CategoryNav = ({ categories, activeCategory, onSelect }) => {
  return (
    <nav
      aria-label="Product categories"
      className="ap-category-nav border-b border-black/10 bg-white"
    >
      <ul className="flex items-center gap-1 overflow-x-auto px-6 sm:px-10 md:justify-center md:px-16">
        <CategoryPill
          label="All"
          active={activeCategory === null}
          onClick={() => onSelect(null)}
        />
        {categories.map((category) => (
          <CategoryPill
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => onSelect(category)}
          />
        ))}
      </ul>
    </nav>
  );
};

const CategoryPill = ({ label, active, onClick }) => (
  <li className="shrink-0">
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative px-4 py-4 text-[12px] font-medium tracking-[0.15em] whitespace-nowrap uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c6a97c] ${
        active ? "text-[#1a1a1a]" : "text-[#8a8378] hover:text-[#1a1a1a]"
      }`}
    >
      {label}
      <span
        className={`ap-category-indicator absolute right-4 bottom-0 left-4 h-[2px] bg-[#c6a97c] transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
        aria-hidden="true"
      />
    </button>
  </li>
);

export default CategoryNav;
