import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { italianMarbles } from "../../../Data/ProductsData";

const ItalianMarbleApplications = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");

  // Create filters dynamically from product data
  const filters = useMemo(() => {
    return ["All", ...italianMarbles.map((item) => item.name)];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return italianMarbles;
    }

    return italianMarbles.filter(
      (item) => item.name === activeFilter
    );
  }, [activeFilter]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        overflowX: "hidden",
      }}
    >
      {/* =========================
          BREADCRUMB
      ========================== */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
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
            xs: "10px",
            md: "18px",
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
              md: "13px",
            },
            letterSpacing: {
              xs: "1px",
              md: "1.8px",
            },
            color: "#806c5d",
            fontWeight: 400,
            "&:hover": {
              color: "#222",
            },
          }}
        >
          HOME
        </Typography>

        <Typography
          component="span"
          sx={{
            fontSize: {
              xs: "14px",
              md: "17px",
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
              md: "13px",
            },
            letterSpacing: {
              xs: "1px",
              md: "1.8px",
            },
            color: "#806c5d",
            fontWeight: 400,
          }}
        >
          ITALIAN MARBLES
        </Typography>
      </Box>

      {/* =========================
          PAGE HEADER + FILTERS
      ========================== */}
      <Box
        sx={{
          backgroundColor: "#fff",
          px: {
            xs: "20px",
            sm: "40px",
            md: "70px",
            lg: "86px",
          },
          pt: {
            xs: "35px",
            sm: "45px",
            md: "55px",
          },
          pb: {
            xs: "35px",
            sm: "45px",
            md: "55px",
          },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              margin: 0,
              color: "#111",
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "42px",
                lg: "48px",
              },
              fontWeight: 400,
              lineHeight: 1.15,
              textAlign: "center",
              letterSpacing: {
                xs: "0.5px",
                md: "1px",
              },
            }}
          >
            ITALIAN MARBLES
          </Typography>

          {/* Underline */}
          <Box
            sx={{
              width: {
                xs: "170px",
                sm: "230px",
                md: "330px",
              },
              height: "5px",
              backgroundColor: "#dedede",
              mt: "12px",
            }}
          />
        </Box>

        {/* =========================
            FILTER BUTTONS
        ========================== */}
        <Box
          sx={{
            mt: {
              xs: "30px",
              md: "45px",
            },
            width: "100%",
            overflowX: "auto",

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                md: "center",
              },
              alignItems: "center",
              gap: {
                xs: "10px",
                md: "20px",
              },
              minWidth: "max-content",
              px: {
                xs: "2px",
                md: 0,
              },
            }}
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <Box
                  key={filter}
                  component="button"
                  onClick={() => setActiveFilter(filter)}
                  sx={{
                    border: "1px solid",
                    borderColor: isActive
                      ? "#222"
                      : "#ff8bdedede8b",
                    backgroundColor: isActive
                      ? "#222"
                      : "#fff",
                    color: isActive
                      ? "#fff"
                      : "#444",

                    minHeight: {
                      xs: "44px",
                      sm: "48px",
                    },

                    px: {
                      xs: "18px",
                      sm: "22px",
                      md: "25px",
                    },

                    cursor: "pointer",

                    fontFamily: "Arial, sans-serif",

                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "16px",
                    },

                    fontWeight: 400,

                    textTransform: "none",

                    whiteSpace: "nowrap",

                    transition: "all 0.25s ease",

                    "&:hover": {
                      backgroundColor: "#222",
                      color: "#fff",
                      borderColor: "#222",
                    },
                  }}
                >
                  {filter}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* =========================
          PRODUCT GRID
      ========================== */}
      <Box
        sx={{
          width: "100%",
          px: {
            xs: "20px",
            sm: "35px",
            md: "50px",
            lg: "70px",
          },
          py: {
            xs: "30px",
            sm: "40px",
            md: "55px",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: {
              xs: "20px",
              sm: "25px",
              md: "30px",
            },
          }}
        >
          {filteredProducts.map((product) => (
            <Box
              key={product.name}
              sx={{
                backgroundColor: "#fff",
                p: {
                  xs: "14px",
                  sm: "16px",
                  md: "20px",
                },

                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 12px 35px rgba(0,0,0,0.10)",
                },
              }}
            >
              {/* Product Image */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1.55 / 1",
                  overflow: "hidden",
                  backgroundColor: "#eee",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",

                    transition:
                      "transform 0.5s ease",

                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                />
              </Box>

              {/* Product Name */}
              <Typography
                component="h2"
                sx={{
                  margin: 0,
                  mt: "17px",
                  color: "#806c5d",
                  fontFamily: "Arial, sans-serif",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                  },
                  fontWeight: 400,
                  letterSpacing: {
                    xs: "1px",
                    md: "1.5px",
                  },
                  textTransform: "uppercase",
                }}
              >
                {product.name}
              </Typography>

              {/* Optional description */}
              {product.description && (
                <Typography
                  sx={{
                    mt: "10px",
                    color: "#777",
                    fontFamily: "Arial, sans-serif",
                    fontSize: {
                      xs: "13px",
                      md: "14px",
                    },
                    lineHeight: 1.7,
                    fontWeight: 300,

                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        {/* No products */}
        {filteredProducts.length === 0 && (
          <Box
            sx={{
              py: "80px",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#777",
                fontSize: "16px",
              }}
            >
              No Italian marble found.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ItalianMarbleApplications;