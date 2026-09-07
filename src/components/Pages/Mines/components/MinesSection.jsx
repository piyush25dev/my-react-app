import { Box, Container, Grid, Typography } from "@mui/material";
import minesData from "../../../Data/MinesData";

const MinesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: {
          xs: "20px",
          sm: "25px",
          md: "30px",
        },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          // px: {
          //   xs: "20px",
          //   sm: "35px",
          //   md: "50px",
          //   lg: "70px",
          //   xl: "80px",
          // },
        }}
      >
        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
        >
          {minesData.mines.map((mine, index) => (
            <Grid
              size={{xs: 12, md: 6}}
              xs={12}
              sm={11}
              md={6}
              key={mine.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "600px",
                    md: "580px",
                    lg: "700px",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: {
                      xs: "16 / 10",
                      sm: "16 / 10",
                      md: "4 / 3",
                    },
                    overflow: "hidden",
                    backgroundColor: "#f3f3f3",
                  }}
                >
                  <Box
                    component="img"
                    src={mine.image}
                    alt={mine.name}
                    loading="lazy"
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 700ms cubic-bezier(0.2, 0.65, 0.3, 1)",

                      "&:hover": {
                        transform: "scale(1.04)",
                      },
                    }}
                  />

                  {/* IMAGE OVERLAY */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.12))",
                      pointerEvents: "none",
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    pt: {
                      xs: "22px",
                      sm: "25px",
                      md: "28px",
                    },
                    px: {
                      xs: "2px",
                      sm: "4px",
                      md: 0,
                    },
                  }}
                >
                  {/* NUMBER */}
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "11px",
                        sm: "12px",
                        md: "13px",
                      },
                      letterSpacing: {
                        xs: "1.5px",
                        md: "2px",
                      },
                      color: "#aa947c",
                      mb: {
                        xs: "9px",
                        md: "12px",
                      },
                    }}
                  >
                    0{index + 1}
                  </Typography>

                  {/* TITLE */}
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "26px",
                        sm: "30px",
                        md: "34px",
                        lg: "38px",
                      },
                      fontWeight: 400,
                      color: "#181818",
                      lineHeight: 1.2,
                      m: 0,
                    }}
                  >
                    {mine.name}
                  </Typography>

                  {/* DECORATIVE LINE */}
                  <Box
                    sx={{
                      width: {
                        xs: "40px",
                        md: "50px",
                      },
                      height: "1px",
                      backgroundColor: "#aa947c",
                      my: {
                        xs: "18px",
                        sm: "20px",
                        md: "22px",
                      },
                    }}
                  />

                  {/* DESCRIPTION */}
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "14px",
                        sm: "15px",
                        md: "16px",
                        lg: "17px",
                      },
                      lineHeight: {
                        xs: 1.7,
                        md: 1.8,
                      },
                      fontWeight: 300,
                      color: "#777",
                      maxWidth: "600px",
                      m: 0,
                    }}
                  >
                    {mine.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MinesSection;