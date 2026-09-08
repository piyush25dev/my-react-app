import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { navLinks, submenuData } from "../Data/NavData";
import SearchFilter from "./Searchfilter";

const TRANSITION = "duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
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

  // Handle scroll effect
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

  const shouldHaveWhiteBackground =
    !isHomePage || isScrolled || menuOpen;

  return (
    <header
      className={`
        fixed left-0 top-0 z-[9999] w-full
        transition-all ${TRANSITION}
        ${
          shouldHaveWhiteBackground
            ? "bg-[#d10703] text-white backdrop-blur-[12px]"
            : "bg-transparent text-white"
        }
      `}
      onMouseLeave={() => {
        // Close everything when mouse leaves the header (desktop only)
        if (!isMobile) {
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
                h-full w-20 object-contain
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
                absolute top-1/2 left-10 -translate-x-1/2 -translate-y-1/2
                w-full object-contain
                transition-all duration-300 ease-out
                ${isHomePage ? "h-[65%] top-[44%]" : "h-full"}
                ${isScrolled ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"}
              `}
            />
          </span>
        </Link>


        {/* Menu Button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setActiveSubmenu(null);
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
             <div className="w-full flex md:hidden">
            <SearchFilter onNavigate={navigate} onClose={closeMenu}/>
            </div>

            {navLinks.map(({ label, to, hasSubmenu }) => (
              <div
                key={label}
                className="w-full md:relative md:w-auto"
                onMouseEnter={() => {
                  if (!isMobile) {
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

                {/* Desktop submenu */}
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

            {/* Desktop Search Filter */}
            <div className="hidden md:flex">
            <SearchFilter onNavigate={navigate} onClose={closeMenu}/>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;