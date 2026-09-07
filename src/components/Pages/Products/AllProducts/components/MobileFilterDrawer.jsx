import { X } from "lucide-react";
import { SORT_OPTIONS } from "../allProductsData";

const MobileFilterDrawer = ({
  open,
  onClose,
  categories,
  activeCategory,
  onSelectCategory,
  applications,
  selectedApplications,
  onToggleApplication,
  thicknesses,
  selectedThickness,
  onThicknessChange,
  sortBy,
  onSortChange,
  onClearAll,
  resultCount,
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Filter products"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="ap-sheet-in relative flex max-h-[85vh] w-full flex-col rounded-t-md bg-white">
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <h2 className="text-[13px] font-medium tracking-[0.2em] text-[#1a1a1a] uppercase">
            Filter &amp; Sort
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-8 w-8 items-center justify-center text-[#1a1a1a]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <section className="mb-8">
            <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                active={activeCategory === null}
                onClick={() => onSelectCategory(null)}
              />
              {categories.map((category) => (
                <FilterChip
                  key={category}
                  label={category}
                  active={activeCategory === category}
                  onClick={() => onSelectCategory(category)}
                />
              ))}
            </div>
          </section>

          {applications.length > 0 && (
            <section className="mb-8">
              <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
                Application
              </p>
              <div className="flex flex-wrap gap-2">
                {applications.map((application) => (
                  <FilterChip
                    key={application}
                    label={application}
                    active={selectedApplications.includes(application)}
                    onClick={() => onToggleApplication(application)}
                  />
                ))}
              </div>
            </section>
          )}

          {thicknesses.length > 0 && (
            <section className="mb-8">
              <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
                Thickness
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  label="All"
                  active={!selectedThickness}
                  onClick={() => onThicknessChange(null)}
                />
                {thicknesses.map((thickness) => (
                  <FilterChip
                    key={thickness}
                    label={thickness}
                    active={selectedThickness === thickness}
                    onClick={() => onThicknessChange(thickness)}
                  />
                ))}
              </div>
            </section>
          )}

          <section>
            <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
              Sort By
            </p>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((option) => (
                <FilterChip
                  key={option.value}
                  label={option.label}
                  active={sortBy === option.value}
                  onClick={() => onSortChange(option.value)}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="flex gap-3 border-t border-black/10 px-6 py-5">
          <button
            type="button"
            onClick={onClearAll}
            className="flex-1 border border-black/15 px-2 py-3 text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-[#5c564d] uppercase"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-[#1a1a1a] px-2 py-3 text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-white uppercase"
          >
            Show {resultCount} Results
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterChip = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`border px-3.5 py-2 text-[12px] font-light tracking-wide uppercase transition-colors duration-300 ${
      active
        ? "border-[#c6a97c] bg-[#f5f4f2] font-medium text-[#1a1a1a]"
        : "border-black/15 text-[#5c564d]"
    }`}
  >
    {label}
  </button>
);

export default MobileFilterDrawer;
