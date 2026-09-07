import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { navLinks, submenuData } from "../Data/NavData";

const TRANSITION = "duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      // Focus the input when opening
      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Navigate to search results or handle search
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const shouldHaveWhiteBackground =
    !isHomePage || isScrolled || menuOpen || searchOpen;

  return (
    <header
      className={`
        fixed left-0 top-0 z-[9999] w-full
        transition-all ${TRANSITION}
        ${
          shouldHaveWhiteBackground
            // ? "bg-[rgba(255,255,255,0.96)] text-black backdrop-blur-[12px] border-b border-[rgba(0,0,0,0.08)]"
            ? "bg-[#d10703] text-white backdrop-blur-[12px] "
            : "bg-transparent text-white"
        }
      `}
      onMouseLeave={() => {
        // Close everything when mouse leaves the header (desktop only)
        if (!isMobile && !searchOpen) {
          closeMenu();
        }
      }}
    >
      {/* Top row */}
      <div
        className="
          relative z-[9998]
          flex h-22 w-full
          items-center justify-between
        "
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            setSearchOpen(false);
          }}
          className={`flex items-center leading-none transition-opacity hover:opacity-80 ${isHomePage ? "pt-5" : ""}`}
        >
          <span
            className={`relative block ml-5 ${isHomePage ? "h-16 md:h-28" : "h-16"}`}
            style={{ aspectRatio: "518 / 482" }}
          >
            {/* Main / top logo */}
            <img
              src="/images/logo/logo-white.png"
              alt="Vaastu Italian Marble"
              className={`
                absolute inset-0
                h-full w-full object-contain
                padding-[4px]
                transition-all duration-300 ease-out
                ${isScrolled ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"}
              `}
            />
            {/* Scroll logo */}
            <img
              src="/images/logo/logo.jpeg"
              alt="Vaastu Italian Marble"
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-full object-contain
                transition-all duration-300 ease-out
                ${isHomePage ? "h-[65%] top-[44%]" : "h-full"}
                ${isScrolled ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"}
              `}
            />
          </span>
        </Link>

        {/* Right side - Search Icon and Menu Button */}
        <div className="flex items-center gap-4">
          {/* Search Icon - Expands on click */}

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setActiveSubmenu(null);
              setSearchOpen(false);
            }}
            className={`
              flex cursor-pointer
              items-center gap-2
              transition-colors ${TRANSITION}
              ${shouldHaveWhiteBackground ? "text-black" : "text-white"}
            `}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Menu
              size={20}
              className={`
                transition-transform ${TRANSITION}
                ${menuOpen ? "rotate-90" : "rotate-0"}
              `}
            />
            <span className="text-xs tracking-widest">MENU</span>
          </button>
        </div>
      </div>

      {/* Dropdown panel */}
      <div
        className={`
          absolute left-0 top-full z-[9997]
          w-full overflow-y-auto overflow-x-hidden
          md:overflow-visible
          bg-white shadow-lg
          transition-all ${TRANSITION}

          ${
            menuOpen
              ? "border-t border-neutral-100 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
        style={{
          maxHeight: menuOpen ? "calc(100vh - 88px)" : "0",
        }}
        onMouseLeave={() => {
          // Close submenu when mouse leaves the dropdown (desktop only)
          if (!isMobile) {
            setActiveSubmenu(null);
          }
        }}
      >
        <div
          className={`
            pt-5
            transition-transform ${TRANSITION}

            ${menuOpen ? "translate-y-0" : "-translate-y-3"}
          `}
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "28px",
          }}
        >
          {/* Main Navigation */}
          <nav
            className="
              flex flex-col
              items-start
              gap-0

              md:flex-row
              md:flex-wrap
              md:items-center
              md:justify-end
              md:gap-8
            "
          >
            {navLinks.map(({ label, to, hasSubmenu }) => (
              <div
                key={label}
                className="w-full md:relative md:w-auto"
                onMouseEnter={() => {
                  if (!isMobile) {
                    // Close submenu when hovering over non-submenu items
                    if (hasSubmenu) {
                      setActiveSubmenu(label);
                    } else {
                      setActiveSubmenu(null);
                    }
                  }
                }}
              >
                {hasSubmenu ? (
                  <div
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between

                      border-b border-neutral-100
                      py-3.5

                      md:w-auto
                      md:justify-center
                      md:gap-1.5
                      md:border-b-0
                      md:py-0
                      md:relative

                      // Border bottom only on hover for submenu items
                      md:after:absolute
                      md:after:bottom-[-4px]
                      md:after:left-0
                      md:after:h-[2px]
                      md:after:w-0
                      md:after:bg-[#7D7D7D]
                      md:after:transition-all
                      md:after:duration-300
                      hover:md:after:w-full
                    `}
                  >
                    <Link
                      to={to}
                      onClick={closeMenu}
                      className="
                        flex-1
                        text-[15px]
                        font-medium
                        tracking-[0.15em]
                        text-neutral-900
                        uppercase

                        transition-opacity
                        hover:opacity-70

                        md:flex-none
                        md:text-[14px]
                        md:text-neutral-800
                      "
                    >
                      {label}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSubmenu(activeSubmenu === label ? null : label)
                      }
                      aria-label={`Toggle ${label} submenu`}
                      aria-expanded={activeSubmenu === label}
                      className="p-1 text-neutral-900 md:hidden"
                    >
                      <ChevronDown
                        size={14}
                        className={`
                          transition-transform
                          duration-300

                          ${activeSubmenu === label ? "rotate-180" : ""}
                        `}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    to={to}
                    onClick={closeMenu}
                    className={`
                      flex
                      w-full
                      items-center

                      border-b border-neutral-100
                      py-3.5

                      text-[15px]
                      font-medium
                      tracking-[0.15em]
                      text-neutral-900

                      transition-opacity
                      hover:opacity-70

                      md:w-auto
                      md:justify-center
                      md:border-b-0
                      md:py-0
                      md:text-[14px]
                      md:text-neutral-800

                      uppercase

                      // No border bottom for regular links
                    `}
                  >
                    {label}
                  </Link>
                )}

                {/* Mobile submenu */}
                {hasSubmenu && activeSubmenu === label && (
                  <div
                    className="
                      block
                      border-b
                      border-neutral-100
                      bg-neutral-50

                      md:hidden
                    "
                  >
                    {submenuData[label]?.columns.map((column) => (
                      <div key={column.title} className="px-4 py-4">
                        <p
                          className="
                            mb-2
                            text-[11px]
                            font-medium
                            tracking-[0.15em]
                            text-neutral-500
                          "
                        >
                          {column.title}
                        </p>
                        <div className="flex flex-col">
                          {column.items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.to}
                              onClick={closeMenu}
                              className="
                                py-1.5
                                text-[14px]
                                tracking-wide
                                text-neutral-700
                                transition-opacity
                                hover:opacity-70
                              "
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Desktop submenu — anchored directly under this item */}
                {hasSubmenu && submenuData[label] && (
                  <div
                    className={`
                      hidden
                      overflow-hidden
                      transition-all
                      duration-300

                      md:absolute
                      md:top-full
                      md:left-0
                      md:z-[9996]
                      md:block
                      md:w-max
                      md:pt-3

                      ${
                        activeSubmenu === label
                          ? "md:max-h-[500px] md:opacity-100"
                          : "md:pointer-events-none md:max-h-0 md:opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        gap-10
                        whitespace-nowrap
                        border
                        border-neutral-100
                        bg-white
                        px-8
                        py-8
                        shadow-lg
                      "
                    >
                      {submenuData[label].columns.map((column) => (
                        <div key={column.title}>
                          <p
                            className="
                              mb-5
                              text-[12px]
                              font-medium
                              uppercase
                              tracking-[0.18em]
                              text-neutral-500
                            "
                          >
                            {column.title}
                          </p>
                          <div className="flex flex-col gap-4">
                            {column.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to}
                                onClick={closeMenu}
                                className="
                                  w-fit
                                  text-[15px]
                                  font-normal
                                  tracking-wide
                                  text-[#a4866e]
                                  transition-all
                                  duration-200
                                  hover:translate-x-1
                                  hover:text-[#806c5d]
                                "
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* STORE LOCATOR */}
            <Link
              to="/store-locator"
              onClick={closeMenu}
              className="
                flex
                w-full
                items-center

                border-b border-neutral-100
                py-3.5

                text-[15px]
                font-medium
                tracking-[0.15em]
                text-neutral-900
                uppercase

                transition-opacity
                hover:opacity-70

                md:w-auto
                md:justify-center
                md:border-b-0
                md:py-0
                md:text-[14px]
                md:text-neutral-800
              "
            >
              Store Locator
            </Link>

            {/* SEARCH */}
            <div className="flex w-full items-center py-3.5 md:w-auto md:justify-center md:py-0">
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
                  className="flex items-center gap-2"
                >
                  <div className="relative flex items-center">
                    <Search
                      size={18}
                      className="absolute left-2 text-neutral-400"
                    />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className={`
                      w-40 sm:w-56 md:w-64
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
                </form>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;