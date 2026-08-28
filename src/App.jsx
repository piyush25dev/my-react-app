import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ContactIndex from "./components/Pages/Contact/ContactIndex";
import TestimonialsIndex from "./components/Pages/Testimonials/TestimonialsIndex";
import AboutIndex from "./components/Pages/About/AboutIndex";
import GalleryIndex from "./components/Pages/Gallery/GalleryIndex";
import HomeIndex from "./components/Pages/Home/HomeIndex";
// import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<MainLayout/>}> */}
          {/* Home */}
          <Route path="/" element={<HomeIndex />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactIndex />} />

          {/* Testimonials */}
          <Route path="/testimonials" element={<TestimonialsIndex />} />

          {/* About */}
          <Route path="/about" element={<AboutIndex />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryIndex />} />

          {/* 404 */}
          <Route path="*" element={<Navigate to="/contact" replace />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
