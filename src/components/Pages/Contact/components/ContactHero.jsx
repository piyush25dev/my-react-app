import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
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
          CONTACT US
        </Typography>
      </Box>

      {/* =========================================
          HERO
      ========================================= */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "280px",
            sm: "360px",
            md: "430px",
            lg: "400px",
          },
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          component="img"
          src="/images/about/group.png"
          alt="Exclusive Collection"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            maxWidth: "none",
            margin: 0,
            padding: 0,
          }}
        />

        {/* =========================================
            OVERLAY
        ========================================= */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.08))",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactHero;