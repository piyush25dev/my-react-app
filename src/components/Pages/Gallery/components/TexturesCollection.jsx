import { Box, Typography } from "@mui/material";

const TexturesCollection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: {
            xs: "35px",
            sm: "45px",
            md: "66px",
          },
          paddingBottom: {
            xs: "35px",
            sm: "45px",
            md: "34px",
          },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              sm: "92%",
              md: "84%",
              lg: "1320px",
            },
            margin: "0 auto",
            height: {
              xs: "260px",
              sm: "330px",
              md: "430px",
              lg: "500px",
            },
            overflow: "hidden",
            backgroundColor: "#111",
            maxWidth: "100%",
          }}
        >
          <Box
            component="img"
            src="/images/about/story2.png"
            alt="Vaastu Textures+ Collection"
            sx={{
              position: "absolute",

              inset: 0,

              width: "100%",
              height: "100%",

              display: "block",

              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%)",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* TITLE */}

            <Typography
              component="h1"
              sx={{
                margin: 0,
                fontFamily:
                  "Arial, sans-serif",
                fontSize: {
                  xs: "21px",
                  sm: "27px",
                  md: "32px",
                  lg: "29px",
                },
                fontWeight: 400,
                lineHeight: 1.2,

                letterSpacing: {
                  xs: "2px",
                  sm: "3px",
                  md: "4px",
                },

                whiteSpace: {
                  xs: "normal",
                  sm: "nowrap",
                },

                textShadow:
                  "0 1px 5px rgba(0,0,0,0.35)",
              }}
            >
              Vaastu® Textures+ Collection
            </Typography>

            {/* SUBTITLE */}

            <Typography
              component="p"
              sx={{
                margin: 0,

                marginTop: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },

                fontFamily:
                  "Arial, sans-serif",

                fontSize: {
                  xs: "8px",
                  sm: "9px",
                  md: "10px",
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: "2px",
                  sm: "2.5px",
                  md: "3px",
                },

                lineHeight: 1.2,

                textTransform: "uppercase",

                whiteSpace: "nowrap",

                textShadow:
                  "0 1px 4px rgba(0,0,0,0.4)",
              }}
            >
              Discover Our Collection
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TexturesCollection;