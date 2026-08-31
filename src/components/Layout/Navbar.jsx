import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu } from "lucide-react";

const TRANSITION = "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Check if current page is Home
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "TESTIMONIALS", to: "/testimonials" },
    { label: "GALLERY", to: "/gallery" },
    { label: "CONTACT US", to: "/contact" },
  ];

  const shouldHaveWhiteBackground =
    !isHomePage || isScrolled || menuOpen; 

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all ${TRANSITION}
        ${
          shouldHaveWhiteBackground
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-white"
        }
      `}
      onMouseLeave={closeMenu}
    >
      {/* ==============================
          TOP ROW
      ============================== */}

      <div
        className="
          relative z-20
          flex h-22.5 w-full
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
          onClick={closeMenu}
          className="flex items-center leading-none"
        >
          <img
            src="/2016-07-09.png"
            alt="Vaastu Marble & Granites"
            className="
              w-30
              object-contain
              transition-opacity duration-300
              md:w-35
            "
          />
        </Link>

        {/* MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`
            flex cursor-pointer
            items-center gap-2
            transition-colors ${TRANSITION}
            ${
              shouldHaveWhiteBackground
                ? "text-black"
                : "text-white"
            }
          `}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu
            size={20}
            className={`
              transition-transform ${TRANSITION}
              ${
                menuOpen
                  ? "rotate-90"
                  : "rotate-0"
              }
            `}
          />

          <span className="text-xs tracking-widest">
            MENU
          </span>
        </button>
      </div>

      {/* ==============================
          DROPDOWN PANEL
      ============================== */}

      <div
        className={`
          absolute left-0 top-full z-10
          w-full overflow-hidden
          bg-white shadow-lg
          transition-all ${TRANSITION}

          ${
            menuOpen
              ? "max-h-175 border-t border-neutral-100 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className={`
            pt-5
            transition-transform ${TRANSITION}

            ${
              menuOpen
                ? "translate-y-0"
                : "-translate-y-3"
            }
          `}
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "48px",
          }}
        >
          {/* ==============================
              UTILITY ROW
          ============================== */}

          <div
            className="
              mb-4
              flex flex-col
              items-start
              gap-4
              border-b border-neutral-100
              pb-4

              md:flex-row
              md:flex-wrap
              md:items-center
              md:justify-end
              md:gap-6
              md:border-b-0
              md:pb-0

              text-[13px]
              tracking-wide
              text-neutral-700
            "
          >
            {/* SEARCH */}
            <div className="flex items-center gap-2 text-neutral-600">
              <Search
                size={18}
                className="cursor-pointer"
              />

              <span className="md:hidden">
                SEARCH
              </span>
            </div>
            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:opacity-60"
            >
              CONTACT US
            </Link>
            <span className="hidden text-neutral-300 md:inline">
              |
            </span>
            {/* LANGUAGE */}
            <span className="flex items-center gap-1">
              ENG
              <ChevronDown size={14} />
            </span>
          </div>

          {/* ==============================
              MAIN NAVIGATION
          ============================== */}

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
            {navLinks.map(({ label, to }, i) => (
              <Link
                key={label}
                to={to}
                onClick={closeMenu}
                className={`
                  w-full
                  border-b border-neutral-100
                  py-3.5

                  text-[15px]
                  font-medium
                  tracking-[0.15em]
                  text-neutral-900

                  transition-opacity
                  hover:opacity-50

                  md:w-auto
                  md:border-b-0
                  md:py-0
                  md:text-[14px]
                  md:text-neutral-800

                  ${
                    i === navLinks.length - 1
                      ? "max-md:border-b-0"
                      : ""
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;