import { Box, Container, Grid, Typography } from "@mui/material";
import minesData from "../../../Data/MinesData";

const MineLocations = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: {
          xs: "60px",
          sm: "80px",
          md: "110px",
        },
      }}
    >
      <Container maxWidth={false} sx={{maxWidth: "1400px"}}>
        {minesData.mines.map((mine, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <Grid
              container
              key={mine.id}
              sx={{
                mb:
                  index === minesData.mines.length - 1
                    ? 0
                    : {
                        xs: "70px",
                        md: "120px",
                      },
              }}
            >
              {/* IMAGE */}

              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  order: {
                    xs: 1,
                    md: isReverse ? 2 : 1,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: {
                      xs: "280px",
                      sm: "380px",
                      md: "480px",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={mine.image}
                    alt={mine.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",

                      transition: "transform 600ms ease",

                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  />
                </Box>
              </Grid>

              {/* CONTENT */}

              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  order: {
                    xs: 2,
                    md: isReverse ? 1 : 2,
                  },
                }}
              >
                <Box
                  sx={{
                    px: {
                      xs: 0,
                      sm: "30px",
                      md: isReverse ? "80px" : "70px",
                      lg: isReverse ? "120px" : "100px",
                    },

                    py: {
                      xs: "30px",
                      md: 0,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "28px",
                        md: "38px",
                        lg: "44px",
                      },
                      fontWeight: 400,
                      color: "#181818",
                      lineHeight: 1.2,
                      mb: "28px",
                    }}
                  >
                    {mine.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "15px",
                        md: "17px",
                      },
                      lineHeight: 1.7,
                      color: "#5c6f82",
                      maxWidth: "520px",
                    }}
                  >
                    {mine.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
};

export default MineLocations;