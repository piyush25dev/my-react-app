import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu } from "lucide-react";
import "./nav.css";

const TRANSITION = "duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "ANTOLINI", to: "/" },
    { label: "COLLECTIONS", to: "/collections" },
    { label: "GEOFAMILY", to: "/geofamily" },
    { label: "INNOVATION", to: "/innovation" },
    { label: "LADY A", to: "/lady-a" },
    { label: "STONEROOM®", to: "/stoneroom" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors ${TRANSITION} ${menuOpen ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      onMouseLeave={closeMenu}
    >
      {/* Top row: logo + hamburger */}
      <div
        className="relative z-20 flex h-[90px] w-full items-center justify-between"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center leading-none"
        >
          <img
            src="/2016-07-09.png"
            alt="Vaastu Marble & Granites"
            className="w-[120px] object-contain md:w-[140px]"
          />
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`flex cursor-pointer items-center gap-2 transition-colors ${TRANSITION} ${menuOpen ? "text-black" : "text-white"
            }`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu
            size={20}
            className={`transition-transform ${TRANSITION} ${menuOpen ? "rotate-90" : "rotate-0"
              }`}
          />
          <span className="text-xs tracking-widest">MENU</span>
        </button>
      </div>

      {/* Dropdown panel */}
      <div
        className={`
          absolute left-0 top-full z-10 w-full overflow-hidden
          bg-white shadow-lg
          transition-all ${TRANSITION}
          ${menuOpen
            ? "max-h-[700px] border-t border-neutral-100 opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className={`
            pt-5 transition-transform ${TRANSITION}
            ${menuOpen ? "translate-y-0" : "-translate-y-3"}
          `}
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "48px",
          }}
        >
          {/* Utility row */}
          <div
            className="
              mb-4 flex flex-col items-start gap-4 border-b border-neutral-100 pb-4
              md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-6 md:border-b-0 md:pb-0
              text-[13px] tracking-wide text-neutral-700
            "
          >
            <div className="flex items-center gap-2 text-neutral-600">
              <Search size={18} className="cursor-pointer" />
              <span className="md:hidden">SEARCH</span>
            </div>
            <Link
              to="/store-locator"
              onClick={closeMenu}
              className="hover:opacity-60"
            >
              STORE LOCATOR
            </Link>
            <Link
              to="/fairs-events"
              onClick={closeMenu}
              className="hover:opacity-60"
            >
              FAIRS &amp; EVENTS
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:opacity-60"
            >
              CONTACT US
            </Link>
            <span className="hidden text-neutral-300 md:inline">|</span>
            <span className="flex items-center gap-1">
              ENG <ChevronDown size={14} />
            </span>
          </div>

          {/* Main nav links */}
          <nav
            className="
              flex flex-col items-start gap-0
              md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-8
            "
          >
            {navLinks.map(({ label, to }, i) => (
              <Link
                key={label}
                to={to}
                onClick={closeMenu}
                className={`
                  w-full py-3.5 text-[15px] font-medium tracking-[0.15em] text-neutral-900
                  border-b border-neutral-100
                  transition-opacity hover:opacity-50
                  md:w-auto md:border-b-0 md:py-0 md:text-[14px] md:text-neutral-800
                  ${i === navLinks.length - 1 ? "max-md:border-b-0" : ""}
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
