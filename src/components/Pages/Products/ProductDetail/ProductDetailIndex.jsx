import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Send } from "lucide-react";
import { allProducts, getRelatedProducts } from "../AllProducts/allProductsData";
import StoneCard from "../AllProducts/components/StoneCard";
import "../AllProducts/AllProducts.css";
import "./ProductDetail.css";

const FALLBACK_IMAGE = "/images/placeholder-stone.svg";

const ProductImage = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image || FALLBACK_IMAGE);

  return (
    <div className="relative overflow-hidden bg-[#f0ede7]">
      <img
        src={imageSrc}
        alt={`${product.name} - ${product.category}`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          if (imageSrc !== FALLBACK_IMAGE) setImageSrc(FALLBACK_IMAGE);
          setImageLoaded(true);
        }}
        className={`aspect-[4/5] w-full object-cover transition-opacity duration-500 md:aspect-[5/6] ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!imageLoaded && <div className="ap-shimmer absolute inset-0" aria-hidden="true" />}
    </div>
  );
};

const ProductDetailIndex = () => {
  const { id } = useParams();

  const product = useMemo(
    () => allProducts.find((item) => String(item.id) === id),
    [id]
  );

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product, allProducts, 4) : []),
    [product]
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 bg-white px-6 py-32 text-center">
        <p className="font-display text-[28px] font-medium tracking-wide text-[#1a1a1a]">
          PRODUCT NOT FOUND
        </p>
        <p className="text-[13px] font-light text-[#7a8792]">
          This stone may have been removed from the collection.
        </p>
        <Link
          to="/products"
          className="mt-2 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] text-[#8a7358] uppercase"
        >
          <ArrowLeft size={14} />
          Back to Collection
        </Link>
      </div>
    );
  }

  const applications = Array.isArray(product.application)
    ? product.application.filter(Boolean)
    : [];

  const hasDescription = Boolean(product.description && product.description.trim());
  const hasThickness = Boolean(product.quartzThickness);
  const hasGST = Boolean(product.additionalGST && product.additionalGST.trim());
  const hasShipping = Boolean(product.shippingCharges && product.shippingCharges.trim());
  const hasSku = Boolean(product.sku && product.sku.trim());
  const hasProductDetails = hasThickness || hasGST || hasShipping || hasSku;

  return (
    <div className="bg-white">
      <div className="relative z-[60] border-b border-black/10 bg-white px-6 py-5 sm:px-10 md:px-16">
        <Link
          to="/products"
          className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-[#5c564d] uppercase transition-colors duration-300 hover:text-[#8a7358]"
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Collection
        </Link>
      </div>

      <div className="flex flex-col gap-10 px-6 py-10 sm:px-10 md:px-16 md:py-14 lg:flex-row lg:items-start lg:gap-14">
        <div className="pd-image-in lg:w-[55%]">
          <ProductImage key={product.id} product={product} />
        </div>

        <div className="pd-info-in relative z-[60] lg:sticky lg:top-[112px] lg:w-[45%] lg:self-start">
          <p className="text-[12px] font-medium tracking-[0.25em] text-[#8a7358] uppercase">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-[32px] leading-tight font-medium text-[#1a1a1a] md:text-[38px]">
            {product.name}
          </h1>

          {hasDescription ? (
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed font-light text-[#5c5c5c]">
              {product.description}
            </p>
          ) : (
            <div className="mt-5">
              <p className="text-[13px] font-medium tracking-[0.1em] text-[#8a7358] uppercase">
                Details Available on Request
              </p>
            </div>
          )}

          {applications.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
                Application
              </p>
              <div className="flex flex-wrap gap-2">
                {applications.map((application) => (
                  <span
                    key={application}
                    className="border border-black/15 px-3.5 py-2 text-[12px] font-light tracking-wide text-[#3a3a3a] uppercase"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasProductDetails && (
            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-[#8a7358] uppercase">
                Product Details
              </p>
              <dl className="flex flex-col gap-3">
                {hasThickness && (
                  <DetailRow label="Thickness" value={product.quartzThickness} />
                )}
                {hasSku && <DetailRow label="SKU" value={product.sku} />}
                {hasGST && (
                  <DetailRow label="Additional GST" value={product.additionalGST} />
                )}
                {hasShipping && (
                  <DetailRow label="Shipping" value={product.shippingCharges} />
                )}
              </dl>
            </div>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex flex-1 items-center justify-center gap-2 bg-[#1a1a1a] px-6 py-3.5 text-[12px] font-medium tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-[#c6a97c] hover:text-[#1a1a1a]"
            >
              <Send size={14} />
              Enquire Now
            </Link>
            <Link
              to="/store-locator"
              className="group inline-flex flex-1 items-center justify-center gap-2 border border-black/20 px-6 py-3.5 text-[12px] font-medium tracking-[0.2em] text-[#1a1a1a] uppercase transition-colors duration-300 hover:border-[#c6a97c] hover:text-[#8a7358]"
            >
              <MapPin size={14} />
              Visit Showroom
            </Link>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="border-t border-black/10 px-6 py-14 sm:px-10 md:px-16">
          <h2 className="mb-8 font-display text-[24px] font-medium tracking-wide text-[#1a1a1a] md:text-[28px]">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((related, index) => (
              <StoneCard key={related.id} product={related} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-black/5 pb-3">
    <dt className="text-[11px] font-medium tracking-[0.15em] text-[#8a8378] uppercase">
      {label}
    </dt>
    <dd className="text-[14px] font-medium text-[#1a1a1a]">{value}</dd>
  </div>
);

export default ProductDetailIndex;
