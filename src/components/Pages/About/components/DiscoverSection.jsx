import { Box, Container, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import { discoverData } from "../../../Data/About";

const DiscoverSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: {
          xs: 4,
          sm: 5,
          md: 6,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: {
              xs: 4,
              sm: 3,
              md: 3.5,
            },
          }}
        >
          {discoverData.map((item) => (
            <DiscoverCard
              key={item.id}
              item={item}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};


const DiscoverCard = ({ item }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
      {/* =================================================
          IMAGE
      ================================================= */}
      <Box
        sx={{
          width: "100%",
          aspectRatio: {
            xs: "1.5 / 1",
            sm: "1.35 / 1",
            md: "1.17 / 1",
          },
          overflow: "hidden",
          backgroundColor: "#eee",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            display: "block",

            width: "100%",
            height: "100%",

            objectFit: "cover",

            transition:
              "transform 500ms ease",

            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        />
      </Box>


      {/* =================================================
          CONTENT
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "flex-end",
          gap: 2,
          mt: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        {/* =============================================
            TITLE / SUBTITLE
        ============================================= */}
        <Box
          sx={{
            minWidth: 0,
          }}
        >
          <Typography
            component="h3"
            sx={{
              margin: 0,
              color: "#151515",
              fontFamily:
                "Arial, sans-serif",
              fontSize: {
                xs: "20px",
                sm: "19px",
                md: "21px",
              },
              fontWeight: 400,

              lineHeight: 1.15,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              margin: 0,
              color: "#557596",
              fontFamily:
                "Arial, sans-serif",
              fontSize: {
                xs: "17px",
                sm: "16px",
                md: "17px",
              },
              fontWeight: 400,
              lineHeight: 1.25,

              mt: "2px",
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
       {/* =============================================
            DISCOVER
        ============================================= */}
        <Box
          component="button"
          onClick={item.onClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 1,
              md: 1.5,
            },
            flexShrink: 0,
            border: 0,
            outline: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            color: "#aa8f76",
            "&:hover .discover-arrow": {
              transform:
                "translateX(4px)",
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily:
                "Arial, sans-serif",

              fontSize: {
                xs: "11px",
                md: "12px",
              },
              letterSpacing:
                "1.7px",
              fontWeight: 400,
              whiteSpace: "nowrap",
              color: "inherit",
            }}
          >
            DISCOVER
          </Typography>

          <Icon
            className="discover-arrow"
            icon="mdi:chevron-right"
            width={21}
            height={21}
            style={{
              color: "#777",
              transition:
                "transform 200ms ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverSection;