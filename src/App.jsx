import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ContactIndex from "./components/Pages/Contact/ContactIndex";
import TestimonialsIndex from "./components/Pages/Testimonials/TestimonialsIndex";
import AboutIndex from "./components/Pages/About/AboutIndex";
import GalleryIndex from "./components/Pages/Gallery/GalleryIndex";
import HomeIndex from "./components/Pages/Home/HomeIndex";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeIndex />} />

          <Route path="/contact" element={<ContactIndex />} />

          <Route
            path="/testimonials"
            element={<TestimonialsIndex />}
          />

          <Route
            path="/about"
            element={<AboutIndex />} 
          />

          <Route
            path="/gallery"
            element={<GalleryIndex />}
          />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;