import { useState } from "react";
import { Box, Typography, Dialog, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =================================================
          PRODUCT CARD
      ================================================= */}

      <Box
        onClick={handleOpen}
        sx={{
          backgroundColor: "#fff",
          minWidth: 0,
          overflow: "hidden",
          cursor: "pointer",

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

      {/* =================================================
          IMAGE DIALOG
      ================================================= */}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "visible",

              margin: {
                xs: "12px",
                sm: "24px",
              },
            },
          },
        }}
      >
        {/* ================================================
            CLOSE BUTTON
        ================================================= */}

        <IconButton
          onClick={handleClose}
          aria-label="Close image"
          sx={{
            position: "absolute",

            top: {
              xs: "-8px",
              sm: "-16px",
            },

            right: {
              xs: "-8px",
              sm: "-16px",
            },

            zIndex: 10,

            width: {
              xs: "34px",
              sm: "42px",
            },

            height: {
              xs: "34px",
              sm: "42px",
            },

            padding: 0,

            color: "#fff",

            backgroundColor:
              "rgba(0, 0, 0, 0.65)",

            "&:hover": {
              backgroundColor:
                "rgba(0, 0, 0, 0.85)",
            },
          }}
        >
          <Icon
            icon="material-symbols:close"
            width="22"
            height="22"
          />
        </IconButton>

        {/* ================================================
            LARGE IMAGE
        ================================================= */}

        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            display: "block",

            width: "100%",

            maxHeight: {
              xs: "75vh",
              sm: "80vh",
              md: "85vh",
            },

            objectFit: "contain",

            backgroundColor: "#fff",
          }}
        />
      </Dialog>
    </>
  );
};

export default ProductCard;