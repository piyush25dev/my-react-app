import { useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import { SORT_OPTIONS } from "../allProductsData";

const ApplicationDropdown = ({ options, selected, onToggle, onClear }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`flex items-center gap-2 border px-4 py-3 text-[12px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
          selected.length > 0
            ? "border-[#c6a97c] text-[#1a1a1a]"
            : "border-black/15 text-[#5c564d]"
        }`}
      >
        Application{selected.length > 0 ? ` (${selected.length})` : ""}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="ap-dropdown absolute top-full left-0 z-20 mt-2 max-h-72 w-64 overflow-y-auto border border-black/10 bg-white py-2 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
          {options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => onToggle(option)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-[13px] font-light text-[#3a3a3a] hover:bg-[#f9f8f6]"
              >
                <span>{option}</span>
                {isSelected && <Check size={14} className="text-[#c6a97c]" />}
              </button>
            );
          })}
          {selected.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="mt-1 w-full border-t border-black/10 px-4 py-2.5 text-left text-[11px] font-medium tracking-[0.1em] text-[#8a7358] uppercase"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const FilterBar = ({
  searchTerm,
  onSearchChange,
  applications,
  selectedApplications,
  onToggleApplication,
  onClearApplications,
  thicknesses,
  selectedThickness,
  onThicknessChange,
  sortBy,
  onSortChange,
  onOpenMobileFilters,
}) => {
  return (
    <div className="flex flex-col gap-4 border-b border-black/10 px-6 py-5 sm:px-10 md:px-16">
      <div className="flex items-center gap-3 md:hidden">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8a7358]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search stones..."
            aria-label="Search products"
            className="w-full border border-black/15 bg-white py-3 pr-4 pl-11 text-[13px] font-light text-[#1a1a1a] placeholder:text-[#a3a3a3] focus:border-[#c6a97c] focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="flex shrink-0 items-center gap-2 border border-black/15 px-4 py-3 text-[11px] font-medium tracking-[0.12em] text-[#1a1a1a] uppercase"
        >
          <SlidersHorizontal size={14} />
          Filter
        </button>
      </div>

      <div className="hidden flex-wrap items-center gap-3 md:flex">
        <div className="relative min-w-[240px] flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8a7358]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name, category, application or SKU..."
            aria-label="Search products"
            className="w-full border border-black/15 bg-white py-3 pr-4 pl-11 text-[13px] font-light text-[#1a1a1a] placeholder:text-[#a3a3a3] focus:border-[#c6a97c] focus:outline-none"
          />
        </div>

        {applications.length > 0 && (
          <ApplicationDropdown
            options={applications}
            selected={selectedApplications}
            onToggle={onToggleApplication}
            onClear={onClearApplications}
          />
        )}

        {thicknesses.length > 0 && (
          <select
            value={selectedThickness || ""}
            onChange={(event) => onThicknessChange(event.target.value || null)}
            aria-label="Filter by thickness"
            className={`border bg-white px-4 py-3 text-[12px] font-medium tracking-[0.12em] uppercase focus:outline-none ${
              selectedThickness ? "border-[#c6a97c] text-[#1a1a1a]" : "border-black/15 text-[#5c564d]"
            }`}
          >
            <option value="">All Thickness</option>
            {thicknesses.map((thickness) => (
              <option key={thickness} value={thickness}>
                {thickness}
              </option>
            ))}
          </select>
        )}

        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          aria-label="Sort products"
          className="border border-black/15 bg-white px-4 py-3 text-[12px] font-medium tracking-[0.12em] text-[#5c564d] uppercase focus:border-[#c6a97c] focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              Sort: {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
