import { catalogueData } from "../../../Data/Gallery";

// catalogueData is the single source of truth for the entire Products
// section — no stripping, no re-shaping. Every field on a product
// (application arrays, quartzThickness, additionalGST, shippingCharges,
// sku, price, productUrl, etc.) stays intact and available to any
// component that imports allProducts.
export const allProducts = catalogueData;

// Fixed display order for the category navigation, matching the
// categories the business actually sells. Any category value present in
// the data but not in this list (data-entry inconsistencies, etc.) is
// still included in "All" and in search/filtering — it just doesn't get
// its own nav pill, since the nav is a curated, known set.
export const CATEGORY_NAV = [
  "Italian Marble",
  "Granite",
  "Imported Granite",
  "Quartz",
  "Quartzite",
  "Onyx",
  "Elevation",
];

export function getCategoryCounts(products) {
  const counts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  return counts;
}

// Unique application values actually present in the data, alphabetically
// sorted. application is always an array on every product — never a
// combined string.
export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
  { value: "price-asc", label: "Price Low–High" },
  { value: "price-desc", label: "Price High–Low" },
];

export function getUniqueApplications(products) {
  const set = new Set();
  products.forEach((product) => {
    (product.application || []).forEach((value) => {
      if (value) set.add(value);
    });
  });
  return [...set].sort((a, b) => a.localeCompare(b));
}

// Unique thickness values actually present in the data, sorted numerically
// by the leading number (e.g. "16 MM" before "20 MM").
export function getUniqueThicknesses(products) {
  const set = new Set();
  products.forEach((product) => {
    if (product.quartzThickness) set.add(product.quartzThickness);
  });
  return [...set].sort((a, b) => parseFloat(a) - parseFloat(b));
}

// Related products: same category first, then same application overlap,
// always excluding the current product, capped at `count`.
export function getRelatedProducts(product, products, count = 4) {
  if (!product) return [];

  const others = products.filter((item) => item.id !== product.id);

  const sameCategory = others.filter(
    (item) => item.category === product.category
  );

  const sameApplication = others.filter(
    (item) =>
      item.category !== product.category &&
      (item.application || []).some((app) =>
        (product.application || []).includes(app)
      )
  );

  const combined = [...sameCategory, ...sameApplication];
  const seen = new Set();
  const unique = [];

  for (const item of combined) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      unique.push(item);
    }
    if (unique.length >= count) break;
  }

  if (unique.length < count) {
    for (const item of others) {
      if (unique.length >= count) break;
      if (!seen.has(item.id)) {
        seen.add(item.id);
        unique.push(item);
      }
    }
  }

  return unique.slice(0, count);
}
