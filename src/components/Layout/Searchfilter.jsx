import { useState } from "react";
import { Search, X } from "lucide-react";
import { createSlug } from "../../utils/createSlug";
import { allProducts } from "../Pages/Products/AllProducts/allProductsData";

const TRANSITION = "duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

const SearchFilter = ({ onNavigate, onClose = null }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setShowResults(false);
    if (!searchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      closeSearch();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      closeSearch();
    }
  };

  const handleProductClick = (productName) => {
    const slug = createSlug(productName);
    onNavigate(`/products/${slug}`);
    closeSearch();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
    if (onClose) {
      onClose();
    }
  };


  // Desktop search bar (dropdown menu)
  return (
    <div className="flex relative w-full items-center py-3.5 md:w-auto md:justify-center md:py-0">
      {!searchOpen ? (
        <button
          type="button"
          onClick={toggleSearch}
          className="p-1 text-neutral-800 transition-opacity hover:opacity-60"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      ) : (
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full flex items-center gap-2 md:w-auto"
        >
          <div className="relative flex w-full items-center md:w-auto">
            <Search
              size={18}
              className="absolute left-2 text-neutral-400"
            />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder="Search products..."
              className={`
                w-full sm:w-56 md:w-64
                border border-neutral-300
                rounded-full
                bg-white
                pl-8 pr-4 py-1.5
                text-sm
                text-neutral-800
                outline-none
                transition-all ${TRANSITION}
                focus:border-[#806c5d]
                focus:shadow-md
              `}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="
              px-3 py-1.5
              text-xs
              font-medium
              tracking-wider
              text-white
              bg-[#806c5d]
              rounded-full
              transition-all
              hover:bg-[#6b5a4d]
              hover:scale-105
            "
          >
            Search
          </button>
          <button
            type="button"
            onClick={toggleSearch}
            className="
              p-1
              transition-opacity
              hover:opacity-60
              text-neutral-600
            "
            aria-label="Close search"
          >
            <X size={18} />
          </button>

          {/* Desktop Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div
              className="
                absolute top-full left-0 right-0
                mt-2 md:mt-3
                bg-white
                border border-neutral-200
                rounded-lg
                shadow-lg
                max-h-80
                overflow-y-auto
                z-[9995]
                w-full md:w-66
              "
            >
              {searchResults.slice(0, 8).map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleProductClick(product.name)}
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3
                    border-b border-neutral-100
                    hover:bg-neutral-50
                    transition-colors
                    text-left
                    last:border-b-0
                    cursor-pointer
                  "
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-12 h-12
                        object-cover
                        rounded
                        flex-shrink-0
                      "
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {product.category}
                      {product.type && ` • ${product.type}`}
                    </p>
                    {/* {product.price && (
                      <p className="text-xs font-semibold text-[#806c5d] mt-1">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
                    )} */}
                  </div>
                </button>
              ))}

              {/* Show all results link */}
              {searchResults.length > 8 && (
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="
                    w-full px-4 py-2
                    text-center text-sm
                    font-medium text-[#806c5d]
                    border-t border-neutral-200
                    hover:bg-neutral-50
                    transition-colors
                  "
                >
                  View all {searchResults.length} results
                </button>
              )}
            </div>
          )}

          {/* No results message */}
          {showResults && searchResults.length === 0 && searchQuery.trim() && (
            <div
              className="
                absolute top-full left-0 right-0
                mt-2 md:mt-3
                bg-white
                border border-neutral-200
                rounded-lg
                shadow-lg
                z-[9995]
                w-full md:w-66
                p-4
                text-center
              "
            >
              <p className="text-sm text-neutral-600">
                No products found for "<strong>{searchQuery}</strong>"
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default SearchFilter;