import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

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
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          "& .hover-line": {
            width: "60px",
          },
        },
      }}
    >
      {/* Hover line indicator */}
      <Box
        className="hover-line"
        sx={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "30px",
          height: "2px",
          backgroundColor: "#aa947c",
          transition: "width 0.4s ease",
        }}
      />

      {/* Top section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            color: "#a18d78",
            letterSpacing: "1.5px",
            fontWeight: 400,
            flexShrink: 0,
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#162b3d",
            },
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>

        <Icon
          icon="mdi:format-quote-open"
          style={{
            fontSize: "32px",
            color: "#aa947c",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          className="quote-icon"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            e.currentTarget.style.color = "#806c5d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.color = "#aa947c";
          }}
        />
      </Box>

      {/* Message */}
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
          lineHeight: 1.6,
          fontWeight: 300,
          color: "#5e7488",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          paddingLeft: {
            xs: 0,
            md: "10px",
          },
          borderLeft: {
            xs: "none",
            md: "2px solid rgba(170,148,124,0.2)",
          },
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: "rgba(170,148,124,0.6)",
          },
        }}
      >
        “{testimonial.message}”
      </Typography>

      {/* Customer section */}
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
          pt: {
            xs: "20px",
            md: "25px",
          },
          borderTop: "1px solid rgba(214,208,202,0.3)",
        }}
      >
        {/* Image with ring */}
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "55px",
              md: "65px",
            },
            height: {
              xs: "55px",
              md: "65px",
            },
            flexShrink: 0,
            "&::after": {
              content: '""',
              position: "absolute",
              inset: -3,
              borderRadius: "50%",
              border: "2px solid #aa947c",
              opacity: 0.3,
              transition: "all 0.3s ease",
            },
            "&:hover::after": {
              opacity: 1,
              transform: "scale(1.05)",
            },
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
              borderRadius: "50%",
            }}
          />
        </Box>

        {/* Name and title */}
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "17px",
              },
              color: "#263d50",
              fontWeight: 500,
              lineHeight: 1.3,
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#162b3d",
              },
            }}
          >
            {testimonial.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: "5px",
            }}
          >
            {/* Decorative dot */}
            <Box
              sx={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#aa947c",
              }}
            />
            
            <Typography
              sx={{
                fontSize: "11px",
                color: "#aa947c",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Customer
            </Typography>
          </Box>

          {/* Star rating (optional decorative element) */}
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              mt: 1,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="mdi:star"
                style={{
                  fontSize: "14px",
                  color: i < 4 ? "#aa947c" : "#d6d0ca",
                  opacity: i < 4 ? 1 : 0.4,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;