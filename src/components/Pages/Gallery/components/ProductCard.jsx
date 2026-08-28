import { Box, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",

        minWidth: 0,

        overflow: "hidden",

        transition: "transform 200ms ease",

        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* ================================================
          IMAGE CONTAINER
      ================================================= */}

      <Box
        sx={{
          padding: {
            xs: "12px",
            sm: "14px",
            md: "16px",
          },

          pb: {
            xs: "10px",
            md: "12px",
          },
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            display: "block",

            width: "100%",

            aspectRatio: "1.82 / 1",

            objectFit: "cover",

            backgroundColor: "#eee",
          }}
        />
      </Box>

      {/* ================================================
          PRODUCT NAME
      ================================================= */}

      <Box
        sx={{
          px: {
            xs: "12px",
            sm: "14px",
            md: "16px",
          },

          pb: {
            xs: "20px",
            sm: "24px",
            md: "26px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "13px",
              md: "14px",
            },

            letterSpacing: "1.5px",

            color: "#ad9078",

            textTransform: "uppercase",

            fontWeight: 400,
          }}
        >
          {product.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;