import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FALLBACK_IMAGE = "/images/placeholder-stone.svg";
const MAX_VISIBLE_APPLICATIONS = 3;

const StoneCard = ({ product, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image || FALLBACK_IMAGE);

  const applications = Array.isArray(product.application)
    ? product.application.filter(Boolean)
    : [];
  const visibleApplications = applications.slice(0, MAX_VISIBLE_APPLICATIONS);
  const extraCount = applications.length - visibleApplications.length;

  const handleImageError = () => {
    if (imageSrc !== FALLBACK_IMAGE) {
      setImageSrc(FALLBACK_IMAGE);
    }
    setImageLoaded(true);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="ap-card ap-card-enter group flex flex-col border border-black/10 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6a97c]"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative overflow-hidden bg-[#f0ede7]">
        <img
          src={imageSrc}
          alt={`${product.name} - ${product.category}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          className={`ap-card-image aspect-[4/5] w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!imageLoaded && <div className="ap-shimmer absolute inset-0" aria-hidden="true" />}
        <span className="ap-card-gold-edge" aria-hidden="true" />
      </div>

      <div className="ap-card-body flex flex-1 flex-col px-5 py-5">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
          {product.category}
        </p>

        <h3 className="ap-card-title mt-1.5 font-display text-[19px] font-medium tracking-wide text-[#1a1a1a]">
          {product.name}
        </h3>

        {visibleApplications.length > 0 && (
          <p className="mt-2 text-[12px] font-light tracking-wide text-[#7a8792]">
            {visibleApplications.join(" • ")}
            {extraCount > 0 ? ` +${extraCount}` : ""}
          </p>
        )}

        {product.quartzThickness && (
          <p className="mt-2 text-[11px] font-medium tracking-[0.15em] text-[#5c564d] uppercase">
            {product.quartzThickness}
          </p>
        )}

        <span className="ap-card-arrow-row mt-auto inline-flex items-center gap-2 self-start pt-6 text-[12px] font-medium tracking-[0.15em] text-[#1a1a1a] uppercase">
          View Product
          <ArrowRight size={14} className="ap-card-arrow" />
        </span>
      </div>
    </Link>
  );
};

export default StoneCard;
