import { Box, Container, Grid, Typography } from "@mui/material";
import { testimonialData } from "../../Data/testimonialData";
import TestimonialCard from "./components/TestimonialCard";
import { useNavigate } from "react-router-dom";

const TestimonialsIndex = () => {
  const navigate = useNavigate();

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
          TESTIMONIALS
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          maxWidth: "1700px",
          mx: "auto",
          px: {
            xs: "20px",
            sm: "40px",
            md: "70px",
            lg: "80px",
          },
        }}
      >
        {/* =====================================
            HEADER
        ===================================== */}

        <Box
          sx={{
            pb: {
              xs: "50px",
              md: "80px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                md: "14px",
              },

              letterSpacing: "2px",
              color: "#8f7964",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Testimonials
          </Typography>

          <Typography
            component="h1"
            sx={{
              mt: "22px",

              fontSize: {
                xs: "30px",
                sm: "36px",
                md: "42px",
              },

              fontWeight: 400,
              lineHeight: 1.15,
              color: "#162b3d",
            }}
          >
            What our customers say
          </Typography>
        </Box>

        {/* =====================================
            TESTIMONIALS
        ===================================== */}

        <Grid
          container
          columnSpacing={{
            xs: 0,
            md: 7,
            lg: 10,
          }}
          rowSpacing={{
            xs: 7,
            md: 3,
          }}
          sx={{
            alignItems: "stretch",
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsIndex;
