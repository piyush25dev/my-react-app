import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { storeLocations } from "../Data/StoreData";
// import { contactData } from "../Data/contactData";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  // { label: "Gallery", to: "/gallery" },
  { label: "Store Locator", to: "/store-locator" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  { label: "Elevation", to: "/products/elevation" },
  { label: "Exotic", to: "/products/exotic" },
  { label: "Granite", to: "/products/granite" },
  { label: "Italian Marbles", to: "/products/italian-marble" },
  { label: "Onyx", to: "/products/onyx" },
  { label: "Quartz", to: "/products/quartz" },
  { label: "Browse All", to: "/products" },
];

// const supportLinks = [
//   { label: "Enquiry", to: "/contact" },
//   { label: "Privacy Policy", href: contactData.privacyPolicy },
//   { label: "Terms & Conditions", href: contactData.terms },
// ];

const linkClasses =
  "text-[14px] text-[#fff] transition-colors duration-200 hover:text-[#a3282e]";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-[#1a1a1a]">
      <img
        src="/images/background/footerbg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />

      <div className="relative px-6 py-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-10">
          {/* Brand - Full width on mobile, normal on larger screens */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <img
              src="/images/logo/logo-white.png"
              alt="Vaastu Italian Marble"
              className="w-[70%] object-contain"
            />
            {/* <p className="mt-6 text-[12px] leading-relaxed font-medium tracking-[0.2em] text-[#5c564d]">
              TIMELESS SURFACES
              <br />
              INSPIRED SPACES
            </p> */}
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-[12px] font-medium tracking-[0.25em] text-[#a3282e]">
              QUICK LINKS
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our Products */}
          <nav aria-label="Our products">
            <h3 className="text-[12px] font-medium tracking-[0.25em] text-[#a3282e]">
              OUR PRODUCTS
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}

          {/* Get In Touch */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-[12px] font-medium tracking-[0.25em] text-[#a3282e]">
              GET IN TOUCH
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#a3282e]"
                  aria-hidden="true"
                />
                <p className="text-[14px] leading-relaxed text-[#fff]">
                  {storeLocations.map((store) => store.name).join(" | ")},
                  Hyderabad
                </p>
              </div>

              <a
                href="tel:+919391930777"
                className={`flex items-center gap-3 ${linkClasses}`}
              >
                <Phone
                  size={16}
                  className="shrink-0 text-[#a3282e]"
                  aria-hidden="true"
                />
                +91 9391930777
              </a>
              <a
                href="tel:+919414109808"
                className={`flex items-center gap-3 ${linkClasses}`}
              >
                <Phone
                  size={16}
                  className="shrink-0 text-[#a3282e]"
                  aria-hidden="true"
                />
                +91 9414109808
              </a>

              <a
                href="mailto:girishpunglia@gmail.com"
                className={`flex items-center gap-3 ${linkClasses}`}
              >
                <Mail
                  size={16}
                  className="shrink-0 text-[#a3282e]"
                  aria-hidden="true"
                />
                girishpunglia@gmail.com
              </a>
            </div>

            <h3 className="mt-9 text-[12px] font-medium tracking-[0.25em] text-[#a3282e]">
              FOLLOW US
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/vaastuitalianmarble"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaastu Italian Marble on Instagram"
                className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a]/15 text-[#fff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3282e] hover:text-[#a3282e]"
              >
                <Icon icon="mdi:instagram" width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/vaastumarble?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaastu Italian Marble website"
                className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a]/15 text-[#fff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3282e] hover:text-[#a3282e]"
              >
                <Icon icon="mdi:facebook" width={20} height={20} />
              </a>
              <a
                href="https://x.com/VaastuMarbles1?s=20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaastu Italian Marble website"
                className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a]/15 text-[#fff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3282e] hover:text-[#a3282e]"
              >
                <Icon icon="mdi:twitter" width={20} height={20} />
              </a>
              <a
                href="https://wa.me/919391930777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vaastu Italian Marble on WhatsApp"
                className="flex h-9 w-9 items-center justify-center border border-[#1a1a1a]/15 text-[#fff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3282e] hover:text-[#a3282e]"
              >
                <Icon icon="mdi:whatsapp" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#fff]/10 pt-8 text-[11px] tracking-[0.08em] text-[#6b655c] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vaastu Italian Marble. All Rights
            Reserved.
          </p>

          <p className="tracking-[0.15em]">
            EXQUISITE RANGE OF IMPORTED GRANITE • MARBLES • STONES
          </p>

          <p className="text-[#fff]">
            Powered By{" "}
            <span className="text-[#a3282e]">
              Glansa Solutions Private Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
