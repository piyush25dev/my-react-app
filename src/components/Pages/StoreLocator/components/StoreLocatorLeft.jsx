import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";

const StoreLocatorLeft = ({ 
  locations, 
  selectedLocation, 
  onLocationClick, 
  onGetDirections 
}) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          lg: "30%",
        },
        flexShrink: 0,
        backgroundColor: "#faf9f6",
        pr: {
          lg: 5.5,
        },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
          },
          fontWeight: 500,
          letterSpacing: "2px",
          color: "#292723",
          textTransform: "uppercase",
          mb: 3,
        }}
      >
        {locations.length} Showrooms
      </Typography>

      {/* Location Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr",
          },
          gap: {
            xs: 2,
            sm: 2,
            lg: 2,
          },
          mb: 3,
        }}
      >
        {locations.map((location) => {
          const isSelected = selectedLocation.id === location.id;

          return (
            <Paper
              key={location.id}
              elevation={0}
              onClick={() => onLocationClick(location)}
              sx={{
                position: "relative",
                width: "100%",
                backgroundColor: "#fff",
                border: isSelected
                  ? "1px solid #cdbfae"
                  : "1px solid #e0ddd7",
                borderRadius: 0,
                cursor: "pointer",
                overflow: "hidden",
                transition: "border-color 250ms ease",
                display: "flex",
                flexDirection: "column",

                "&:hover": {
                  borderColor: "#b8a58d",
                },
              }}
            >
              <Box
                sx={{
                  px: {
                    xs: 2,
                    sm: 2.5,
                    lg: 3,
                  },
                  pt: {
                    xs: 2,
                    sm: 2.5,
                    lg: 2.7,
                  },
                  pb: 2,
                }}
              >
                <Stack
                  direction="row"
                  spacing={{
                    xs: 1.5,
                    sm: 1.5,
                    lg: 1.8,
                  }}
                >
                  {/* Location Icon */}
                  <Box
                    sx={{
                      width: {
                        xs: 38,
                        sm: 40,
                        lg: 46,
                      },
                      height: {
                        xs: 38,
                        sm: 40,
                        lg: 46,
                      },
                      flexShrink: 0,
                      border: "1px solid #cdbfae",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 0.2,
                    }}
                  >
                    <Icon
                      icon="mdi:map-marker"
                      width={18}
                      height={18}
                      color="#171717"
                    />
                  </Box>

                  {/* Main Content */}
                  <Box
                    sx={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily:
                          '"Playfair Display", Georgia, serif',
                        fontSize: {
                          xs: "18px",
                          sm: "19px",
                          lg: "21px",
                        },
                        lineHeight: 1.1,
                        fontWeight: 400,
                        color: "#191919",
                        mb: 0.5,
                      }}
                    >
                      {location.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "8px",
                        fontWeight: 500,
                        letterSpacing: "1.5px",
                        color: "#927958",
                        textTransform: "uppercase",
                        mb: 1,
                      }}
                    >
                      VAASTU ITALIAN MARBLE
                    </Typography>

                    {/* Address */}
                    <Box>
                      {location.address.map(
                        (line, addressIndex) => (
                          <Typography
                            key={addressIndex}
                            sx={{
                              fontFamily:
                                "Arial, sans-serif",
                              fontSize: {
                                xs: "11px",
                                sm: "11px",
                                lg: "12px",
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
                      component="a"
                      href={
                        location.id === 1
                          ? "tel:+919414109808"
                          : "tel:+919391930777"
                      }
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1.2,
                        textDecoration: "none",
                        color: "#4c4a46",
                        width: "fit-content",
                      }}
                    >
                      <Icon
                        icon="mdi:phone"
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
                        {location.id === 1
                          ? "+91 9414109808"
                          : "+91 9391930777"}
                      </Typography>
                    </Box>

                    {/* Instagram */}
                    <Box
                      component="a"
                      href={location.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 0.8,
                        width: "fit-content",
                        textDecoration: "none",
                        color: "#4c4a46",
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

                  {/* Arrow */}
                  <Icon
                    icon="mdi:chevron-right"
                    width={20}
                    height={20}
                    color="#191919"
                    style={{
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                </Stack>
              </Box>

              {/* Get Directions */}
              <Box
                sx={{
                  borderTop: "1px solid #e6e2dc",
                  mt: "auto",
                }}
              >
                <Button
                  fullWidth
                  onClick={(event) => {
                    event.stopPropagation();
                    onGetDirections();
                  }}
                  endIcon={
                    <Icon
                      icon="mdi:arrow-right"
                      width={15}
                      height={15}
                    />
                  }
                  sx={{
                    height: {
                      xs: 40,
                      sm: 40,
                      lg: 45,
                    },
                    borderRadius: 0,
                    backgroundColor: isSelected
                      ? "#f8f5ef"
                      : "#fff",
                    color: "#927958",
                    fontFamily:
                      "Arial, sans-serif",
                    fontSize: {
                      xs: "9px",
                      sm: "9px",
                      lg: "10px",
                    },
                    fontWeight: 500,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",

                    "&:hover": {
                      backgroundColor: "#eee8de",
                    },
                  }}
                >
                  Get Directions
                </Button>
              </Box>
            </Paper>
          );
        })}
      </Box>

      {/* Promotional Card */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "140px",
            sm: "150px",
            lg: "155px",
          },
          overflow: "hidden",
          backgroundColor: "#eeeae2",
        }}
      >
        <Box
          component="img"
          src="/images/background/store-promo.png"
          alt="Visit a showroom near you"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            px: {
              xs: 2.5,
              sm: 3,
              lg: 3,
            },
            py: 2.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "8px",
              fontWeight: 500,
              letterSpacing: "1.6px",
              color: "#8e7960",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Experience Our Stones
          </Typography>

          <Typography
            sx={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              fontSize: {
                xs: "18px",
                sm: "20px",
                lg: "22px",
              },
              lineHeight: 1.08,
              fontWeight: 400,
              color: "#171717",
              maxWidth: "180px",
            }}
          >
            Visit a Showroom
            <br />
            Near You
            <Box
              component="span"
              sx={{
                ml: 1,
                fontFamily: "Arial, sans-serif",
                fontSize: {
                  xs: "18px",
                  lg: "20px",
                },
              }}
            >
              ⟶
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreLocatorLeft;