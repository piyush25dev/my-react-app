import StoneCard from "../../AllProducts/components/StoneCard";

const SkeletonCard = () => (
  <div className="flex flex-col border border-black/10 bg-white" aria-hidden="true">
    <div className="ap-shimmer aspect-[4/5] w-full" />
    <div className="flex flex-col gap-3 px-5 py-5">
      <div className="ap-shimmer h-3 w-1/3" />
      <div className="ap-shimmer h-4 w-2/3" />
    </div>
  </div>
);

const ProductGrid = ({ products, isLoading, onLoadMore, hasMore }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 border border-black/10 bg-white px-6 py-20 text-center">
        <p className="font-display text-[24px] font-medium tracking-wide text-[#1a1a1a]">
          NO STONES FOUND
        </p>
        <p className="text-[13px] font-light text-[#7a8792]">
          Try another category.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <StoneCard key={product.id} product={product} index={index % 12} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={onLoadMore}
            className="group inline-flex items-center gap-3 border border-black/20 px-8 py-3.5 text-[12px] font-medium tracking-[0.2em] text-[#1a1a1a] uppercase transition-colors duration-300 hover:border-[#c6a97c] hover:bg-[#1a1a1a] hover:text-white"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
