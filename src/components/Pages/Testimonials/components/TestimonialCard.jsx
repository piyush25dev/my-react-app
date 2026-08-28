import { Box, Typography } from "@mui/material";
import {Icon} from "@iconify/react";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <Box
      sx={{
        position: "relative",

        height: "100%",

        borderTop: "1px solid #d6d0ca",

        pt: {
          xs: "28px",
          md: "35px",
        },

        pb: {
          xs: "10px",
          md: "20px",
        },
      }}
    >
      {/* =====================================
          TOP
      ===================================== */}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* NUMBER */}

        <Typography
          sx={{
            fontSize: "13px",
            color: "#a18d78",
            letterSpacing: "1.5px",
            fontWeight: 400,
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>

        {/* QUOTE ICON */}

        <Icon
          icon="mdi:format-quote-open"
          style={{
            fontSize: "32px",
            color: "#aa947c",
          }}
        />
      </Box>

      {/* =====================================
          MESSAGE
      ===================================== */}

      <Typography
        component="blockquote"
        sx={{
          margin: 0,

          mt: {
            xs: "25px",
            md: "30px",
          },

          maxWidth: "650px",

          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "22px",
          },

          lineHeight: 1.55,

          fontWeight: 300,

          color: "#5e7488",

          fontFamily: "Arial, sans-serif",
        }}
      >
        “{testimonial.message}”
      </Typography>

      {/* =====================================
          CUSTOMER
      ===================================== */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          gap: {
            xs: "16px",
            md: "20px",
          },

          mt: {
            xs: "30px",
            md: "40px",
          },
        }}
      >
        {/* IMAGE */}

        <Box
          sx={{
            width: {
              xs: "55px",
              md: "65px",
            },

            height: {
              xs: "55px",
              md: "65px",
            },

            borderRadius: "50%",

            overflow: "hidden",

            backgroundColor: "#eee",

            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={testimonial.image}
            alt={testimonial.name}
            sx={{
              width: "100%",
              height: "100%",

              objectFit: "cover",

              display: "block",
            }}
          />
        </Box>

        {/* NAME */}

        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "17px",
              },

              color: "#263d50",

              fontWeight: 400,

              lineHeight: 1.3,
            }}
          >
            {testimonial.name}
          </Typography>

          <Typography
            sx={{
              mt: "5px",

              fontSize: "11px",

              color: "#aa947c",

              letterSpacing: "1.5px",

              textTransform: "uppercase",
            }}
          >
            Customer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;