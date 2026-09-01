import { useState } from "react";
import {
  Box, Typography, Dialog, IconButton,Skeleton } from "@mui/material";
import { Icon } from "@iconify/react";

const ProductCard = ({ product, hasDescription }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dialogImageLoaded, setDialogImageLoaded] = useState(false);

  const handleOpen = () => {
    setDialogImageLoaded(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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

            position: "relative",
          }}
        >
          {/* Image Skeleton */}
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                width: "100%",
                aspectRatio: "1.82 / 1",
                backgroundColor: "#eeeeee",

                "&::after": {
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                },
              }}
            />
          )}

          {/* Actual Image */}
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
            sx={{
              display: imageLoaded ? "block" : "none",
              width: "100%",
              aspectRatio: "1.82 / 1",
              objectFit: "cover",
              backgroundColor: "#eee",
            }}
          />
        </Box>

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
          {/* Title Skeleton */}
          {!imageLoaded ? (
            <>
              <Skeleton
                variant="text"
                animation="wave"
                sx={{
                  width: "55%",
                  height: "25px",
                  mt: "17px",
                }}
              />

              {hasDescription && (
                <Box sx={{ mt: "8px" }}>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                      width: "100%",
                      height: "20px",
                    }}
                  />

                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                      width: "90%",
                      height: "20px",
                    }}
                  />

                  <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                      width: "65%",
                      height: "20px",
                    }}
                  />
                </Box>
              )}
            </>
          ) : (
            <>
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

              {hasDescription && product.description && (
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
            </>
          )}
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
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
        {/* Close Button */}
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
            width: {xs: "34px", sm: "42px"},
            height: {xs: "34px",sm: "42px"},
            padding: 0,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            },
          }}
        >
          <Icon
            icon="material-symbols:close"
            width="22"
            height="22"
          />
        </IconButton>

        {!dialogImageLoaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: "100%",
              height: {
                xs: "60vh",
                sm: "70vh",
                md: "75vh",
              },
              backgroundColor: "#eeeeee",
              "&::after": {
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              },
            }}
          />
        )}

        {/* Dialog Image */}
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          onLoad={() => setDialogImageLoaded(true)}
          onError={() => setDialogImageLoaded(true)}
          sx={{
            display: dialogImageLoaded ? "block" : "none",
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