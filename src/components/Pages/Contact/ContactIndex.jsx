import { Box, Container, Grid, Typography } from "@mui/material";
import ContactInfo from "./components/ContactInfo";
import ContactHero from "./components/ContactHero";

const ContactIndex = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <ContactHero />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          mt: 2,
          p: 0,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            width: "100%",
            m: 0,
          }}
        >
          {/* LEFT - DON'T CHANGE THIS */}
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <ContactInfo />
          </Grid>

          {/* RIGHT - IMAGE */}
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
            sx={{
              minWidth: 0,
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  md: "calc(100% + max(0px, (100vw - 1400px) / 2))",
                },
                height: {
                  xs: "350px",
                  md: "100%",
                },
                overflow: "hidden",
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src="/images/contact/contact-info.png"
                alt="Vaastu natural stone interior"
                sx={{
                  display: "block",
                  width: "100%",
                  height: {
                    xs: "350px",
                    md: "100%",
                  },
                  minHeight: {
                    md: "650px",
                  },
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: {
                    xs: "50%",
                    sm: "50%",
                    md: "22%",
                  },
                  right: {
                    xs: "8%",
                    sm: "14%",
                    md: "0%",
                    lg: "10%",
                  },
                  transform: {
                    xs: "translateY(-50%)",
                    sm: "translateY(-50%)",
                    md: "none",
                  },
                  width: {
                    xs: "150px",
                    sm: "180px",
                    md: "180px",
                    lg: "200px",
                  },
                  color: "#1a1714",
                }}
              >
                {/* MAIN TITLE */}
                <Typography
                  component="h2"
                  sx={{
                    fontFamily:
                      '"Playfair Display", Georgia, "Times New Roman", serif',
                    fontSize: {
                      xs: "30px",
                      sm: "34px",
                      md: "38px",
                      lg: "40px",
                    },
                    fontWeight: 400,
                    lineHeight: 1.02,
                    letterSpacing: "-1.2px",
                    color: "#171411",
                    m: 0,
                  }}
                >
                  More
                  <br />
                  Than Stone
                </Typography>

                {/* TOP DIVIDER */}
                <Box
                  sx={{
                    width: "42px",
                    height: "2px",
                    backgroundColor: "rgba(80, 65, 50, 0.45)",
                    mt: {
                      xs: "18px",
                      md: "20px",
                    },
                    mb: {
                      xs: "18px",
                      md: "20px",
                    },
                  }}
                />

                {/* TAGLINE */}
                <Box>
                  {[
                    "PEOPLE",
                    "SPACES",
                    "MATERIALS",
                    "A BRIGHTER",
                    "TOMORROW",
                  ].map((text) => (
                    <Typography
                      key={text}
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: {
                          xs: "9px",
                          sm: "10px",
                          md: "10px",
                        },
                        fontWeight: 600,
                        letterSpacing: {
                          xs: "2px",
                          md: "2.4px",
                        },
                        lineHeight: 2,
                        color: "rgba(55, 48, 42, 0.75)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>

                {/* BOTTOM DIVIDER */}
                <Box
                  sx={{
                    width: "28px",
                    height: "2px",
                    backgroundColor: "rgba(80, 65, 50, 0.35)",
                    mt: {
                      xs: "16px",
                      md: "18px",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactIndex;