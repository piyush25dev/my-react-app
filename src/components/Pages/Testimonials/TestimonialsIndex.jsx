import { Box, Container, Grid, Typography } from "@mui/material";
import { testimonialData } from "../../Data/testimonialData";
import TestimonialCard from "./components/TestimonialCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const TestimonialsIndex = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative background element */}
      <Box
        sx={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170,148,124,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Breadcrumb */}
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
          position: "relative",
          zIndex: 1,
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
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#162b3d",
              transform: "translateX(-2px)",
            },
          }}
        >
          HOME
        </Typography>
        
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
            color: "#162b3d",
            fontWeight: 500,
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
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header with decorative elements */}
        <Box
          sx={{
            pb: {
              xs: "50px",
              md: "80px",
            },
            position: "relative",
          }}
        >
          {/* Decorative line */}
          <Box
            sx={{
              width: "60px",
              height: "2px",
              backgroundColor: "#aa947c",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                md: "14px",
              },
              letterSpacing: "3px",
              color: "#8f7964",
              textTransform: "uppercase",
              fontWeight: 500,
              mb: 1,
            }}
          >
            Testimonials
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "30px",
                sm: "36px",
                md: "42px",
                lg: "48px",
              },
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#162b3d",
              maxWidth: "700px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -15,
                left: 0,
                width: "80px",
                height: "3px",
                background: "linear-gradient(90deg, #aa947c, #d6d0ca)",
                borderRadius: "2px",
              },
            }}
          >
            What our customers say
          </Typography>

          {/* Decorative quote icon */}
          <Icon
            icon="mdi:format-quote-open"
            style={{
              position: "absolute",
              right: 20,
              bottom: 20,
              fontSize: "80px",
              color: "rgba(170,148,124,0.08)",
              transform: "rotate(180deg)",
            }}
          />
        </Box>

        {/* Testimonials Grid */}
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

        {/* Bottom decorative element */}
        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: i === 0 ? "#aa947c" : "#d6d0ca",
                opacity: i === 0 ? 1 : 0.3,
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 1,
                  backgroundColor: "#aa947c",
                  transform: "scale(1.2)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsIndex;