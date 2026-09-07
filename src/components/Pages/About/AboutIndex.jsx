import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AboutStyles.css";
import AboutHero from "./components/AboutHero";
import Intro from "./components/Intro";
import Journey from "./components/Journey";
// import Leadership from "./components/Leadership";
import Usp from "./components/Usp";
import MissionVision from "./components/MissionVision";
import ShowroomSection from "./components/ShowroomSection";
import LegacyCounters from "./components/LegacyCounters";

const AboutIndex = () => {
  const navigate = useNavigate();

  return (
    <Box> 
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          px: {
            xs: "20px",
            sm: "40px",
            md: "70px",
            lg: "86px",
          },
          py: {
            xs: "16px",
            sm: "20px",
            md: "24px",
            
          },
          display: "flex",
          alignItems: "center",
          gap: {
            xs: "12px",
            md: "20px",
          },

          whiteSpace: "nowrap",
        }}
      >
        <Typography
          component="button"
          onClick={() => navigate("/")}
          sx={{
            border: 0,
            background: "transparent",
            padding: 0,
            margin: 0,

            cursor: "pointer",

            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "11px",
              sm: "12px",
              md: "14px",
            },

            letterSpacing: {
              xs: "1.2px",
              md: "2px",
            },
            color: "#806c5d",
            fontWeight: 400,
            "&:hover": {
              color: "#333",
            },
          }}
        >
          HOME
        </Typography>
        {/* SLASH */}
        <Typography
          component="span"
          sx={{
            fontSize: {
              xs: "15px",
              md: "18px",
            },
            color: "#806c5d",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          /
        </Typography>
        {/* CURRENT PAGE */}
        <Typography
          component="span"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "11px",
              sm: "12px",
              md: "14px",
            },
            letterSpacing: {
              xs: "1.2px",
              md: "2px",
            },
            color: "#806c5d",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          ABOUT US
        </Typography>
      </Box>

      <AboutHero />
      <Intro />
      <Journey />
      {/* <Leadership /> */}
      <Usp />
      <MissionVision />
      <ShowroomSection />
      <LegacyCounters />
    </Box>
  );
};

export default AboutIndex;
