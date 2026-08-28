import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

const GalleryHero = () => {
//   const navigate = useNavigate();

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
        //   onClick={() => navigate("/collection")}
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
          Antolini Collection
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
          Exclusive Collection
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
            lg: "500px",
          },
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          component="img"
          src="/images/gallery/thumb.jpg"
          alt="Exclusive Collection"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
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

        {/* =========================================
            TITLE
        ========================================= */}

        <Typography
          component="h1"
          sx={{
            position: "absolute",

            left: {
              xs: "24px",
              sm: "8%",
              md: "9%",
            },

            top: "50%",

            transform:
              "translateY(-50%)",

            margin: 0,

            color: "#fff",

            fontFamily:
              "Arial, sans-serif",

            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "52px",
              lg: "58px",
            },

            fontWeight: 400,

            lineHeight: 1.1,

            letterSpacing: {
              xs: "0.5px",
              md: "1.5px",
            },

            whiteSpace: "nowrap",

            textShadow:
              "0 1px 8px rgba(0,0,0,0.2)",
          }}
        >
          Exclusive Collection
        </Typography>

        {/* =========================================
            MATERIAL
        ========================================= */}

        <Typography
          component="p"
          sx={{
            position: "absolute",

            right: {
              xs: "16px",
              sm: "25px",
              md: "35px",
            },

            bottom: {
              xs: "12px",
              sm: "16px",
              md: "18px",
            },

            margin: 0,

            color: "#fff",

            fontFamily:
              "Arial, sans-serif",

            fontSize: {
              xs: "9px",
              sm: "11px",
              md: "13px",
            },

            fontWeight: 400,

            whiteSpace: "nowrap",

            textShadow:
              "0 1px 5px rgba(0,0,0,0.4)",
          }}
        >
          Material: Amazonite®
        </Typography>
      </Box>
    </Box>
  );
};

export default GalleryHero;