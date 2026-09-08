import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  allProducts,
  CATEGORY_NAV,
  getUniqueApplications,
  getUniqueThicknesses,
} from "../AllProducts/allProductsData";
import FilterBar from "../AllProducts/components/FilterBar";
import MobileFilterDrawer from "../AllProducts/components/MobileFilterDrawer";
import BrandStatement from "../AllProducts/components/BrandStatement";
import "../AllProducts/AllProducts.css";
import BreadcrumbBar from "./components/BreadcrumbBar";
import ProductGrid from "./components/ProductGrid";
import ProductsHero from "../AllProducts/components/ProductsHero";
import CategoryNav from "../AllProducts/components/CategoryNav";


const PAGE_SIZE = 24;
const DEBOUNCE_MS = 300;
const TRANSITION_MS = 200;

const ROUTE_CATEGORY_MAP = {
  "italian-marble": "Italian Marble",
  granite: "Granite",
  quartz: "Quartz",
  exotic: "Exotic",
  onyx: "Onyx",
  elevation: "Elevation",
};

const GRANITE_NAV = [
  "Granite Polish",
  "Granite Lapatro",
  "Granite Leather",
];

const getCategoryFromPath = (pathname) => {
  const slug = pathname.split("/").filter(Boolean).pop()?.toLowerCase();

  return ROUTE_CATEGORY_MAP[slug] || null;
};

const isGranitePath = (pathname) => {
  return pathname.includes("/products/granite");
};

const SelectedProductIndex = () => {
  const location = useLocation();

  const applications = useMemo(() => getUniqueApplications(allProducts), []);

  const thicknesses = useMemo(() => getUniqueThicknesses(allProducts), []);

  const routeCategory = useMemo(
    () => getCategoryFromPath(location.pathname),
    [location.pathname],
  );

  const isGraniteRoute = useMemo(
    () => isGranitePath(location.pathname),
    [location.pathname],
  );

  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedGraniteType, setSelectedGraniteType] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const transitionTimeoutRef = useRef(null);

  // For granite route: use selectedGraniteType if set, otherwise use routeCategory
  // For other routes: use selectedCategory if set, otherwise use routeCategory
  const activeCategory = isGraniteRoute
    ? selectedGraniteType || routeCategory
    : selectedCategory === undefined ? routeCategory : selectedCategory;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const triggerTransition = () => {
    setIsTransitioning(true);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_MS);
  };

  const filteredProducts = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();

    const filtered = allProducts.filter((product) => {
      // For granite route: filter by subcategory if selected, otherwise show all granite products
      // For other routes: filter by category
      let matchesCategory;
      
      if (isGraniteRoute) {
        // If a specific granite type is selected, filter by subcategory
        if (selectedGraniteType) {
          matchesCategory = product.subcategory === selectedGraniteType;
        } else {
          // If no type selected (All), show products from Granite category
          matchesCategory = product.category === "Granite";
        }
      } else {
        // Normal category filtering for non-granite routes
        matchesCategory = !activeCategory || product.category === activeCategory;
      }

      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        (product.sku && product.sku.toLowerCase().includes(term)) ||
        (product.application || []).some((app) =>
          app.toLowerCase().includes(term),
        );

      const matchesApplication =
        selectedApplications.length === 0 ||
        (product.application || []).some((app) =>
          selectedApplications.includes(app),
        );

      const matchesThickness =
        !selectedThickness || product.quartzThickness === selectedThickness;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesApplication &&
        matchesThickness
      );
    });

    const sorted = [...filtered];

    if (sortBy === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "price-asc") {
      sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return sorted;
  }, [
    activeCategory,
    debouncedSearch,
    selectedApplications,
    selectedThickness,
    sortBy,
    isGraniteRoute,
    selectedGraniteType,
  ]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const hasMore = visibleCount < filteredProducts.length;

  const resetPaging = () => {
    setVisibleCount(PAGE_SIZE);
  };

  const handleCategorySelect = (category) => {
    if (isGraniteRoute) {
      setSelectedGraniteType(category);
    } else {
      setSelectedCategory(category);
    }
    resetPaging();
    triggerTransition();
    setIsMobileFilterOpen(false);
  };

  const handleSearchChange = (value) => {
    setSearchInput(value);
    resetPaging();
  };

  const handleToggleApplication = (application) => {
    setSelectedApplications((current) =>
      current.includes(application)
        ? current.filter((item) => item !== application)
        : [...current, application],
    );

    resetPaging();
    triggerTransition();
  };

  const handleThicknessChange = (thickness) => {
    setSelectedThickness(thickness);
    resetPaging();
    triggerTransition();
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    resetPaging();
    triggerTransition();
  };

  const handleLoadMore = () => {
    setVisibleCount((count) => count + PAGE_SIZE);
  };

  const handleClearFilters = () => {
    if (isGraniteRoute) {
      setSelectedGraniteType(null);
    } else {
      setSelectedCategory(undefined);
    }
    setSearchInput("");
    setSelectedApplications([]);
    setSelectedThickness(null);
    setSortBy("featured");
    resetPaging();
    triggerTransition();
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="bg-white">
      <ProductsHero />

      <BreadcrumbBar count={filteredProducts.length} title={activeCategory} />
      
      {/* Show CategoryNav only on granite route */}
      {isGraniteRoute && (
        <CategoryNav
          categories={GRANITE_NAV}
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />
      )}

      <FilterBar
        searchTerm={searchInput}
        onSearchChange={handleSearchChange}
        applications={applications}
        selectedApplications={selectedApplications}
        onToggleApplication={handleToggleApplication}
        onClearApplications={() => {
          setSelectedApplications([]);
          resetPaging();
          triggerTransition();
        }}
        thicknesses={thicknesses}
        selectedThickness={selectedThickness}
        onThicknessChange={handleThicknessChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
      />

      <div className="px-6 py-12 sm:px-10 md:px-16 md:py-14">
        <ProductGrid
          products={visibleProducts}
          isLoading={isTransitioning}
          onClearFilters={handleClearFilters}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      </div>

      <BrandStatement />

      <MobileFilterDrawer
        open={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        categories={CATEGORY_NAV}
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        applications={applications}
        selectedApplications={selectedApplications}
        onToggleApplication={handleToggleApplication}
        thicknesses={thicknesses}
        selectedThickness={selectedThickness}
        onThicknessChange={handleThicknessChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        onClearAll={handleClearFilters}
        resultCount={filteredProducts.length}
      />
    </div>
  );
};

export default SelectedProductIndex;