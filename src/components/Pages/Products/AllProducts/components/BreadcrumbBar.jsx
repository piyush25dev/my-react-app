import { Link } from "react-router-dom";

const BreadcrumbBar = ({ count }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-col gap-3 border-b border-black/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-16"
    >
      <ol className="flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] text-[#806c5d] uppercase">
        <li>
          <Link to="/" className="transition-colors hover:text-[#c6a97c]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-[#1a1a1a]" aria-current="page">
          Products
        </li>
      </ol>

      <p className="text-[12px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
        {count} {count === 1 ? "Collection" : "Collections"}
      </p>
    </nav>
  );
};

export default BreadcrumbBar;
