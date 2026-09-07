import ContactIndex from "./components/Pages/Contact/ContactIndex";
import TestimonialsIndex from "./components/Pages/Testimonials/TestimonialsIndex";
import AboutIndex from "./components/Pages/About/AboutIndex";
import GalleryIndex from "./components/Pages/Gallery/GalleryIndex";
import HomeIndex from "./components/Pages/Home/HomeIndex";
import MainLayout from "./components/Layout/MainLayout";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import AllProductsIndex from "./components/Pages/Products/AllProducts/AllProductsIndex";
import ProductDetailIndex from "./components/Pages/Products/ProductDetail/ProductDetailIndex";
import { allProducts } from "./components/Pages/Products/AllProducts/allProductsData";
import ExoticIndex from "./components/Pages/Exotic/ExoticIndex";
import MinesIndex from "./components/Pages/Mines/MinesIndex";
import ItalianMarbleApplications from "./components/Pages/Products/Applications/ItalianMarbleApplications";
import StoreIndex from "./components/Pages/StoreLocator/StoreIndex";
import ScrollToTop from "./components/Custom/ScrollToTop";
import SelectedProductIndex from "./components/Pages/Products/SelectedProduct/SelectedProductIndex";

const pageTitles = {
  // Home
  "/": "Home | VAASTU",

  // Main pages
  "/about": "About Us | VAASTU",
  "/contact": "Contact Us | VAASTU",
  "/gallery": "Gallery | VAASTU",
  "/testimonials": "Testimonials | VAASTU",
  "/mines": "Mines | VAASTU",
  "/store-locator": "Store Locator | VAASTU",

  // Products
  "/products": "All Products | VAASTU",
  "/products/indian-marbles": "Indian Marbles | VAASTU",
  "/products/italian-marbles": "Italian Marbles | VAASTU",
  "/products/indian-granite": "Indian Granite | VAASTU",
  "/products/italian-granite": "Italian Granite | VAASTU",

  // Applications
  "/application-of-italian-marble":
    "Applications of Italian Marble | VAASTU",

  // Exotic
  "/exotic/antico-gold": "Antico Gold | VAASTU",
  "/exotic/alaska-white": "Alaska White | VAASTU",
};

const getProductDetailTitle = (pathname) => {
  const match = pathname.match(/^\/products\/([^/]+)$/);
  if (!match) return null;

  const product = allProducts.find(
    (item) => String(item.id) === match[1]
  );

  return product ? `${product.name} | VAASTU` : null;
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title =
      pageTitles[location.pathname] ||
      getProductDetailTitle(location.pathname) ||
      "VAASTU";

    document.title = title;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeIndex />} />

          <Route path="/contact" element={<ContactIndex />} />
          <Route path="/store-locator" element={<StoreIndex />} />
          {/* Products */}
          <Route path="/products" element={<AllProductsIndex />} />
          <Route path="/products/:slug" element={<ProductDetailIndex />} />
          <Route path="/products/elevation" element={<SelectedProductIndex />} />
          <Route path="/products/granite" element={<SelectedProductIndex />} />
          <Route path="/products/onyx" element={<SelectedProductIndex />} />
          <Route path="/products/italian-marble" element={<SelectedProductIndex />} />
          <Route path="/products/exotic" element={<SelectedProductIndex />} />
          <Route path="/products/quartz" element={<SelectedProductIndex />} />
          <Route path="/application-of-italian-marble" element={<ItalianMarbleApplications />} />
          {/* Exotic */}
          <Route path="/exotic/antico-gold" element={<ExoticIndex />} />
          <Route path="/exotic/alaska-white" element={<ExoticIndex />} />


          <Route path="/mines" element={<MinesIndex />} />


          <Route path="/testimonials" element={<TestimonialsIndex />} />

          <Route path="/about" element={<AboutIndex />} />

          <Route path="/gallery" element={<GalleryIndex />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
