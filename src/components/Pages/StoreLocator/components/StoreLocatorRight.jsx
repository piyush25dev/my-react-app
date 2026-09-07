import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

const StoreLocatorRight = ({ 
  selectedLocation, 
  mapUrl, 
  onGetDirections,
  onCloseCard,
  isCardVisible = true
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        flex: {
          xs: "none",
          lg: 1,
        },
        minWidth: 0,
        height: {
          xs: "400px",
          sm: "500px",
          md: "600px",
          lg: "740px",
        },
        backgroundColor: "#e9e7e2",
        borderRadius: {
          xs: "8px",
          lg: 0,
        },
        my: {
          xs: 2,
          lg: 0,
        },
        overflow: "hidden",
      }}
    >
      {/* Google Map */}
      <Box
        key={selectedLocation.id}
        component="iframe"
        title={`Google Map - ${selectedLocation.name}`}
        src={mapUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />

      {/* Selected Location Card - Only show if visible */}
      {isCardVisible && (
        <Paper
          elevation={0}
          sx={{
            position: {
              xs: "relative",
              lg: "absolute",
            },
            zIndex: 4,
            mx: {
              xs: "auto",
              lg: 0,
            },
            top: {
              xs: "auto",
              md: 140,
              lg: 140,
            },

            right: {
              xs: "auto",
              md: -250,
              lg: 30,
            },

            width: {
              xs: "calc(100% - 32px)",
              sm: "calc(100% - 48px)",
              md: "260px",
              lg: "305px",
            },

            maxWidth: "100%",

            backgroundColor:
              "rgba(255,255,255,0.98)",

            boxShadow:
              "0 5px 25px rgba(0,0,0,0.15)",

            borderRadius: "8px",
            overflow: "hidden",
            display: {xs: "none", md: "block"},
            
            // Animation for smooth hide/show
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Close Button - Now functional */}
          <IconButton
            onClick={onCloseCard}
            sx={{
              position: "absolute",
              zIndex: 3,
              top: 8,
              right: 8,
              width: 32,
              height: 32,
              backgroundColor:
                "rgba(255,255,255,0.94)",
              color: "#222",

              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            <Icon
              icon="mdi:close"
              width={19}
              height={19}
            />
          </IconButton>

          {/* Showroom image */}
          <Box
            component="img"
            src={selectedLocation.image}
            alt={selectedLocation.name}
            sx={{
              display: "block",
              width: "100%",
              height: {
                xs: "140px",
                sm: "140px",
                lg: "145px",
              },
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <Box
            sx={{
              px: {
                xs: 2,
                sm: 2.2,
                lg: 2.2,
              },
              pt: {
                xs: 1.5,
                sm: 2,
                lg: 2,
              },
              pb: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                fontSize: {
                  xs: "18px",
                  sm: "19px",
                  lg: "19px",
                },
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#171717",
                mb: 0.5,
              }}
            >
              {selectedLocation.name}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: "8px",
                fontWeight: 500,
                letterSpacing: "1.4px",
                color: "#927958",
                textTransform: "uppercase",
                mb: 1.2,
              }}
            >
              VAASTU ITALIAN MARBLE
            </Typography>

            <Box>
              {selectedLocation.address.map(
                (line, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily:
                        "Arial, sans-serif",
                      fontSize: {
                        xs: "10px",
                        sm: "11px",
                        lg: "11px",
                      },
                      lineHeight: 1.5,
                      color: "#4f4b46",
                    }}
                  >
                    {line}
                  </Typography>
                ),
              )}
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1.2,
              }}
            >
              <Icon
                icon="mdi:phone"
                width={14}
                height={14}
                color="#282828"
              />

              <Typography
                sx={{
                  fontFamily:
                    "Arial, sans-serif",
                  fontSize: "10px",
                  color: "#4f4b46",
                }}
              >
                {selectedLocation.id === 1
                  ? "+91 9414109808"
                  : "+91 9391930777"}
              </Typography>
            </Box>

            {/* Instagram */}
            <Box
              component="a"
              href={selectedLocation.instagram}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 0.8,
                textDecoration: "none",
                color: "#4f4b46",
              }}
            >
              <Icon
                icon="mdi:instagram"
                width={14}
                height={14}
              />

              <Typography
                sx={{
                  fontFamily:
                    "Arial, sans-serif",
                  fontSize: "10px",
                  color: "inherit",
                }}
              >
                @vaastuitalianmarble
              </Typography>
            </Box>
          </Box>

          {/* Directions Button */}
          <Button
            fullWidth
            onClick={onGetDirections}
            endIcon={
              <Icon
                icon="mdi:arrow-right"
                width={16}
                height={16}
              />
            }
            sx={{
              mt: 1.5,
              height: {
                xs: 40,
                sm: 40,
                lg: 43,
              },
              borderRadius: 0,
              backgroundColor: "#a88a61",
              color: "#fff",
              fontFamily:
                "Arial, sans-serif",
              fontSize: {
                xs: "9px",
                sm: "9px",
                lg: "10px",
              },
              fontWeight: 500,
              letterSpacing: "1.4px",
              textTransform: "uppercase",

              "&:hover": {
                backgroundColor: "#92754e",
              },
            }}
          />
        </Paper>
      )}
    </Box>
  );
};

export default StoreLocatorRight;