import { Box, Typography } from "@mui/material";

const MinesHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "280px",
          sm: "360px",
          md: "450px",
          lg: "520px",
        },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/images/about/story1.png"
        alt="Mines"
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.55))",
        }}
      />

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
          transform: "translateY(-50%)",
          margin: 0,

          color: "#fff",
          fontFamily: "Arial, sans-serif",

          fontSize: {
            xs: "34px",
            sm: "44px",
            md: "56px",
            lg: "64px",
          },

          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Mines
      </Typography>
    </Box>
  );
};

export default MinesHero;