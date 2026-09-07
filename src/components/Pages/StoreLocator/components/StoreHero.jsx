import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StoreHero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#eee9e1",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/images/background/store-locator.png"
        alt="Vaastu Store Locator"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      {/* Very subtle overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          boxSizing: "border-box",

          px: {
            xs: 3,
            sm: 5,
            md: 7,
            lg: 11,
            xl: 12,
          },

          py: {
            xs: 5,
            sm: 6,
            md: 4,
            lg: 4.5,
          },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Breadcrumb */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: {
              xs: 2.5,
              md: 2,
            },
          }}
        >
          <Typography
            component="button"
            onClick={() => navigate("/")}
            sx={{
              border: 0,
              padding: 0,
              background: "transparent",
              cursor: "pointer",

              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "11px",
                md: "13px",
              },
              lineHeight: 1.4,
              fontWeight: 400,
              color: "#282725",

              "&:hover": {
                color: "#8a7358",
              },
            }}
          >
            Home
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "11px",
                md: "13px",
              },
              color: "#6f6a63",
            }}
          >
            /
          </Typography>

          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "11px",
                md: "13px",
              },
              fontWeight: 400,
              color: "#282725",
            }}
          >
            Store Locator
          </Typography>
        </Box>

        {/* Main Heading */}
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: {
              xs: "40px",
              sm: "48px",
              md: "54px",
              lg: "58px",
            },
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-1.5px",
            color: "#151515",
            mb: {
              xs: 2,
              md: 1.5,
            },
          }}
        >
          Store Locator
        </Typography>

        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "10px",
              md: "12px",
            },
            lineHeight: 1.5,
            fontWeight: 500,
            letterSpacing: {
              xs: "4px",
              md: "5px",
            },
            color: "#625b53",
            textTransform: "uppercase",
            mb: {
              xs: 2,
              md: 1.5,
            },
          }}
        >
          Visit Our Showrooms
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "580px",
              md: "570px",
            },

            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "13px",
              md: "15px",
            },
            lineHeight: 1.55,
            fontWeight: 400,
            color: "#363431",
          }}
        >
          Explore our showrooms across Hyderabad. Experience our exclusive
          collection of Italian marble, granite and natural stones in person.
        </Typography>
      </Box>
    </Box>
  );
};

export default StoreHero;