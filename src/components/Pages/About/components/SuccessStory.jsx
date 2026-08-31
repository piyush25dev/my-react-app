import { Box, Typography } from "@mui/material";

const SuccessStory = ({
  eyebrow = "MORE THAN 60 YEARS",
  title = "A company success story",
  description = `The story of Antolini Luigi® & C. stretches back over 60 years.
The company has been at the forefront of developments in natural stone processing and new technologies, constantly evolving along the way and never overlooking the importance of quality.`,
  image = "/images/about/girish.png",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflow: "hidden",
        mb: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          position: { xs: "unset", md: "relative" },
          width: "100%",
          minHeight: "619px",

          "@media (max-width: 900px)": {
            minHeight: "auto",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <Box
          sx={{
            position: { xs: "unset", md: "absolute" },

            left: "13.8%",
            top: "50%",

            transform: "translateY(-50%)",

            width: "24%",

            "@media (max-width: 1200px)": {
              left: "8%",
              width: "29%",
            },

            "@media (max-width: 900px)": {
              position: "relative",
              left: 0,
              top: 0,
              transform: "none",

              width: "100%",

              padding: "50px 20px 40px",
              order: 1,
            },

            "@media (max-width: 640px)": {
              padding: "40px 16px 30px",
            },

            "@media (max-width: 480px)": {
              padding: 0,
            },
          }}
        >
          {/* EYEBROW */}

          <Typography
            sx={{
              fontSize: "11px",
              lineHeight: 1.2,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#4d7297",
              fontWeight: 400,
              mb: "27px",
              "@media (max-width: 768px)": {
                fontSize: "10px",
                mb: "20px",
              },
              "@media (max-width: 480px)": {
                fontSize: "9px",
                mb: "16px",
                letterSpacing: "0.5px",
                p: 2,
              },
            }}
          >
            {eyebrow}
          </Typography>

          {/* TITLE */}
          <Typography
            component="h1"
            sx={{
              fontSize: "25px",
              lineHeight: 1.2,
              fontWeight: 400,
              color: "#202020",
              margin: 0,
              mb: "53px",
              "@media (max-width: 768px)": {
                fontSize: "20px",
                mb: "40px",
              },
              "@media (max-width: 480px)": {
                fontSize: "18px",
                mb: "2px",
                p: 2,
              },
            }}
          >
            {title}
          </Typography>

          {/* DIVIDER */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#d4d0cc",
              mb: "32px",
              "@media (max-width: 768px)": {
                mb: "24px",
              },
              "@media (max-width: 480px)": {
                mb: "10px",
              },
            }}
          />

          {/* DESCRIPTION */}

          <Typography
            sx={{
              whiteSpace: "pre-line",
              fontSize: "16px",
              lineHeight: 1.35,
              fontWeight: 400,
              color: "#5c7186",
              maxWidth: "430px",
              "@media (max-width: 768px)": {
                fontSize: "14px",
                lineHeight: 1.5,
                maxWidth: "100%",
              },
              "@media (max-width: 480px)": {
                fontSize: "13px",
                lineHeight: 1.45,
                p: 2,
              },
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* =========================================
            IMAGE
        ========================================= */}

        <Box
          sx={{
            position: "absolute",
            left: "37.85%",
            top: "73px",
            width: "62.15%",
            height: "546px",
            overflow: "hidden",
            "@media (max-width: 1200px)": {
              left: "38%",
              width: "62%",
              height: "calc(100vh - 100px)",
            },
            "@media (max-width: 900px)": {
              position: "relative",
              left: 0,
              top: 0,
              width: "100%",
              height: "400px",
              order: 2,
            },
            "@media (max-width: 768px)": {
              height: "350px",
            },
            "@media (max-width: 640px)": {
              height: "300px",
            },
            "@media (max-width: 480px)": {
              height: "250px",
            },
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessStory;
