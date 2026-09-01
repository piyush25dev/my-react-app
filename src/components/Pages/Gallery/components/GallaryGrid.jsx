import { useMemo, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";

import { catalogueData } from "../../../Data/Gallery";
import ProductCard from "../../../Custom/ProductCard";

const GalleryGrid = () => {
  const [category, setCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedType, setSelectedType] = useState("FULL");

  const filteredProducts = useMemo(() => {
    return catalogueData.filter((product) => {
      const categoryMatch = !category || product.category === category;

      const colorMatch = !selectedColor || product.color === selectedColor;

      const typeMatch =
        selectedType === "FULL" || product.type === selectedType;

      return categoryMatch && colorMatch && typeMatch;
    });
  }, [category, selectedColor, selectedType]);

  const colors = [
    {
      name: "blue",
      value: "#526ba5",
    },
    {
      name: "white",
      value: "#f5f5f5",
    },
    {
      name: "black",
      value: "#292929",
    },
    {
      name: "brown",
      value: "#a68c77",
    },
    {
      name: "yellow",
      value: "#ffc900",
    },
    {
      name: "gray",
      value: "#bec4c8",
    },
    {
      name: "green",
      value: "#a2c52e",
    },
    {
      name: "beige",
      value: "#d7c18e",
    },
    {
      name: "pink",
      value: "#fa9da5",
    },
    {
      name: "red",
      value: "#ee493d",
    },
    {
      name: "purple",
      value: "#9655b7",
    },
  ];

  const categories = [...new Set(catalogueData.map((item) => item.category))];

  // Clear color filter
  const clearColorFilter = () => {
    setSelectedColor(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",

        backgroundColor: "#f1f1f1",

        py: {
          xs: 3,
          sm: 4,
          md: 5,
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
            lg: 5,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "22px",
              sm: "24px",
              md: "26px",
            },
            fontWeight: 400,
            color: "#111",
            whiteSpace: {
              lg: "nowrap",
            },
            flexShrink: 0,
          }}
        >
          Catalogue Exclusive Collection
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "flex-start",
              lg: "flex-start",
            },
            flexWrap: "wrap",
            flex: 1,
            gap: 3,
            pt: 2,
            pb: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#aa9078",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              category
            </Typography>
            <FormControl
              size="small"
              sx={{
                minWidth: {
                  xs: 140,
                  sm: 180,
                },
              }}
            >
              <Select
                value={category}
                displayEmpty
                onChange={(event) => setCategory(event.target.value)}
                sx={{
                  height: "28px",
                  backgroundColor: "#fff",
                  borderRadius: "3px",
                  fontSize: "13px",
                  color: "#5c5047",
                  "& .MuiSelect-select": {
                    py: 0.5,
                    color: "#5c5047",
                  },
                  "& .MuiSelect-icon": {
                    color: "#806c5d",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #CFCAC3",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #CFCAC3",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #CFCAC3",
                  },
                  "&.Mui-focused": {
                    color: "#5c5047",
                  },
                }}
              >
                <MenuItem value="">All categories</MenuItem>
                {categories.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              width: "1px",
              height: "32px",
              backgroundColor: "#d2cbc4",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#aa9078",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              color
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: {
                  xs: 1,
                  sm: 1.4,
                },
                flexWrap: "wrap",
              }}
            >
              {colors.map((color) => (
                <Box
                  key={color.name}
                  onClick={() =>
                    setSelectedColor(
                      selectedColor === color.name ? null : color.name,
                    )
                  }
                  sx={{
                    width: {
                      xs: "16px",
                      sm: "18px",
                    },

                    height: {
                      xs: "16px",
                      sm: "18px",
                    },
                    borderRadius: "50%",
                    backgroundColor: color.value,
                    cursor: "pointer",
                    border: color.name === "white" ? "1px solid #ccc" : "none",
                    boxShadow:
                      selectedColor === color.name
                        ? "0 0 0 2px #fff, 0 0 0 3px #a7957f"
                        : "0 1px 4px rgba(0,0,0,0.15)",
                    transition: "all 180ms ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                    },
                  }}
                />
              ))}

              {/* Reset/Clear Color Button */}
              {selectedColor && (
                <IconButton
                  onClick={clearColorFilter}
                  size="small"
                  sx={{
                    ml: 0.5,
                    width: {
                      xs: "20px",
                      sm: "22px",
                    },
                    height: {
                      xs: "20px",
                      sm: "22px",
                    },
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ddd",
                    "&:hover": {
                      backgroundColor: "#e8e8e8",
                      transform: "rotate(90deg)",
                    },
                    transition: "all 200ms ease",
                    padding: 0,
                  }}
                  aria-label="Clear color filter"
                >
                  <Icon
                    icon="material-symbols:close"
                    width="14"
                    height="14"
                    style={{ color: "#666" }}
                  />
                </IconButton>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              width: "1px",
              height: "32px",
              backgroundColor: "#d2cbc4",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 2,
                sm: 3,
              },
            }}
          >
            {["MATERIAL", "LIFESTYLE"].map((type) => (
              <Typography
                key={type}
                onClick={() =>
                  setSelectedType(type === selectedType ? "FULL" : type)
                }
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                  },
                  letterSpacing: "1.5px",
                  color: selectedType === type ? "#8e7864" : "#b5a69a",
                  cursor: "pointer",
                  fontFamily: "Arial, sans-serif",
                  transition: "color 180ms ease",
                  "&:hover": {
                    color: "#8e7864",
                  },
                }}
              >
                {type}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: "1px",
              height: "32px",
              backgroundColor: "#d2cbc4",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />

          <Box
            onClick={() => setSelectedType("FULL")}
            sx={{
              width: "74px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #a89784",
              cursor: "pointer",
              position: "relative",
              color: "#927d68",
              transition: "all 180ms ease",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "4px",
                border: "1px solid #a89784",
                pointerEvents: "none",
              },
              "&:hover": {
                backgroundColor: "#a89784",
                color: "#fff",
                "&::before": {
                  borderColor: "#fff",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                letterSpacing: "1.5px",
                fontWeight: 400,
                position: "relative",
                zIndex: 1,
              }}
            >
              FULL
            </Typography>
          </Box>
        </Box>

        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

        {filteredProducts.length === 0 && (
          <Box
            sx={{
              py: 10,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#8f8175",
                fontSize: "18px",
              }}
            >
              No products found
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default GalleryGrid;