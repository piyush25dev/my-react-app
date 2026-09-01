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
import ProductIndex from "./components/Pages/Products/ProductIndex";
import ExoticIndex from "./components/Pages/Exotic/ExoticIndex";
import MinesIndex from "./components/Pages/Mines/MinesIndex";
import ItalianMarbleApplications from "./components/Pages/Products/Applications/ItalianMarbleApplications";

const pageTitles = {
  // Home
  "/": "Home | VAASTU",

  // Main pages
  "/about": "About Us | VAASTU",
  "/contact": "Contact Us | VAASTU",
  "/gallery": "Gallery | VAASTU",
  "/testimonials": "Testimonials | VAASTU",
  "/mines": "Mines | VAASTU",

  // Products
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

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "VAASTU";

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
          {/* Products */}
          <Route path="/products/indian-marbles" element={<ProductIndex />} />
          <Route path="/products/italian-marbles" element={<ProductIndex />} />
          <Route path="/products/indian-granite" element={<ProductIndex />} />
          <Route path="/products/italian-granite" element={<ProductIndex />} />
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
    </BrowserRouter>
  );
}

export default App;
