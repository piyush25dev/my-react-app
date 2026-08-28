import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./NavBar";

const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Box
        component="main"
         sx={{
          flex: 1,

          // Navbar is fixed, so add space for it
          // on every page except Home.
          pt: isHomePage ? 0 : "90px",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;