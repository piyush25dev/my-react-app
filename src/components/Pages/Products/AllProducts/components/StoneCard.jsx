import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { createSlug } from "../../../../../utils/createSlug";

const FALLBACK_IMAGE = "/images/placeholder-stone.svg";
const MAX_VISIBLE_APPLICATIONS = 3;
const WHATSAPP_NUMBER = "919391930777";

const StoneCard = ({ product, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image || FALLBACK_IMAGE);

  const applications = Array.isArray(product.application)
    ? product.application.filter(Boolean)
    : [];

  const visibleApplications = applications.slice(0, MAX_VISIBLE_APPLICATIONS);
  const extraCount = applications.length - visibleApplications.length;

  const productSlug = createSlug(product.name);

  const handleImageError = () => {
    if (imageSrc !== FALLBACK_IMAGE) {
      setImageSrc(FALLBACK_IMAGE);
    }
    setImageLoaded(true);
  };

  const handleWhatsAppEnquiry = (e) => {
    // Prevent the card/product Link from being triggered
    e.preventDefault();
    e.stopPropagation();

    const productUrl = `${window.location.origin}/products/${productSlug}`;

    const message = `Hi, I am interested in your product from your *Online Store* - *${product.name}*. Quantity: *1* Product Link: ${productUrl} Please provide more details.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="ap-card ap-card-enter group relative flex flex-col border border-black/10 bg-white focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#c6a97c]"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      {/* Product Link */}

      <div className="relative overflow-hidden bg-[#f0ede7]">
        <img
          src={imageSrc}
          alt={`${product.name} - ${product.category}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          className={`ap-card-image aspect-[3/4] sm:aspect-[4/5] w-full object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 group-hover:scale-[1.02]" : "opacity-0"
          }`}
        />

        {!imageLoaded && (
          <div className="ap-shimmer absolute inset-0" aria-hidden="true" />
        )}

        {/* Enquiry overlay */}
        <button
          type="button"
          onClick={handleWhatsAppEnquiry}
          className="
      absolute inset-0 z-10
      flex items-center justify-center
      bg-black/0
      text-white
      opacity-0
      transition-all duration-300
      group-hover:bg-black/35
      group-hover:opacity-100
      focus-visible:bg-black/35
      focus-visible:opacity-100
      focus-visible:outline-none
      cursor-pointer
    "
        >
          <span
            className="
        translate-y-3
        border border-white/70
        bg-[#a3282e]
        px-5 py-3
        text-[10px] font-medium
        tracking-[0.18em]
        uppercase
        shadow-lg
        transition-transform duration-300
        group-hover:translate-y-0
      "
          >
            Enquiry Now
          </span>
        </button>

        <span className="ap-card-gold-edge" aria-hidden="true" />
      </div>

      <div className="ap-card-body flex flex-1 flex-col px-3 py-3 sm:px-5 sm:py-5">
        <p className="text-[10px] font-medium tracking-[0.2em] text-[#8a7358] uppercase sm:text-[11px]">
          {product.category}
        </p>

        <h3 className="ap-card-title mt-1 line-clamp-2 font-display text-[16px] font-medium tracking-wide text-[#1a1a1a] sm:mt-1.5 sm:text-[19px]">
          {product.name}
        </h3>

        {visibleApplications.length > 0 && (
          <div className="mt-1.5 flex items-start justify-between gap-2 sm:mt-2">
            <p className="min-w-0 text-[11px] font-light tracking-wide text-[#7a8792] sm:text-[12px]">
              {visibleApplications.join(" • ")}
              {extraCount > 0 ? ` +${extraCount}` : ""}
            </p>

            {product.quartzThickness && (
              <p className="shrink-0 text-right text-[10px] font-medium tracking-[0.15em] text-[#5c564d] uppercase sm:text-[11px]">
                {product.quartzThickness}
              </p>
            )}
          </div>
        )}
        <Link
          to={`/products/${productSlug}`}
          className="flex flex-1 flex-col"
          aria-label={`View details for ${product.name}`}
        >
          <span className="ap-card-arrow-row mt-auto inline-flex items-center gap-1.5 self-start pt-3 text-[11px] font-medium tracking-[0.15em] text-[#1a1a1a] uppercase sm:gap-2 sm:pt-6 sm:text-[12px]">
            View Product
            <ArrowRight
              size={12}
              className="ap-card-arrow sm:h-[14px] sm:w-[14px]"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StoneCard;
