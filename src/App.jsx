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

const pageTitles = {
  "/": "Home | VAASTU",
  "/about": "About | VAASTU",
  "/collection": "Collection | VAASTU",
  "/collection/exclusive": "Exclusive Collection | VAASTU",
  "/contact": "Contact | VAASTU",
  "/gallery": "Gallery | VAASTU",
  "/testimonials": "Testimonials | VAASTU",
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Antolini";

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
