import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import minesData from "../../Data/MinesData";
import MinesHero from "./components/MinesHero";
// import MineLocations from "./components/MineLocations";
import ProcessFlow from "./components/ProcessFlow";
import MinesSection from "./components/MinesSection";

const MinesIndex = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* ================= BREADCRUMB ================= */}

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
          }}
        >
          MINES
        </Typography>
      </Box>

      {/* ================= HERO ================= */}

      <MinesHero />

      {/* ================= INTRO ================= */}

      <Box
        sx={{
          py: {
            xs: "60px",
            md: "100px",
          },
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              textAlign: "center",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "16px",
                md: "20px",
              },

              lineHeight: 1.8,

              color: "#5c6f82",
            }}
          >
            {minesData.intro.description}
          </Typography>

          <Typography
            sx={{
              textAlign: "center",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "16px",
                md: "20px",
              },

              lineHeight: 1.8,

              color: "#5c6f82",

              mt: "10px",
            }}
          >
            {minesData.intro.additionalDescription}
          </Typography>
        </Container>
        <MinesSection />
      </Box>

      {/* ================= MINES ================= */}

      {/* <MineLocations /> */}

      {/* ================= CONCLUSION ================= */}

      <Box
        sx={{
          py: {
            xs: "65px",
            md: "100px",
          },

          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "28px",
                md: "42px",
              },

              fontWeight: 400,

              color: "#181818",

              mb: "30px",

              textAlign: "center",
            }}
          >
            {minesData.conclusion.title}
          </Typography>

          {minesData.conclusion.paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "Arial, sans-serif",

                fontSize: {
                  xs: "15px",
                  md: "17px",
                },

                lineHeight: 1.8,

                color: "#5c6f82",

                textAlign: "center",

                mb:
                  index === minesData.conclusion.paragraphs.length - 1
                    ? 0
                    : "15px",
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Container>
      </Box>

      {/* ================= PROCESS ================= */}

      <ProcessFlow />
    </Box>
  );
};

export default MinesIndex;
