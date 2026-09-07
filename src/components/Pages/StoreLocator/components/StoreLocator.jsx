import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { storeLocations } from "../../../Data/StoreData";
import { useNavigate } from "react-router-dom";

const StoreLocator = () => {
  const navigate = useNavigate();

  const [selectedLocation, setSelectedLocation] = useState(storeLocations[0]);

  /*
   * Google Maps iframe URL.
   *
   * We use the location address rather than putting the shortened
   * maps.app.goo.gl / g.co URL directly into the iframe.
   */
  const mapUrl = useMemo(() => {
    const query = encodeURIComponent(selectedLocation.mapAddress);

    return `https://www.google.com/maps?q=${query}&output=embed`;
  }, [selectedLocation]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const openGoogleMaps = () => {
    window.open(selectedLocation.mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          px: {
            xs: "20px",
            sm: "40px",
            md: "70px",
            lg: "36px",
          },
          py: {
            xs: "16px",
            sm: "20px",
            md: "40px",
          },
          display: "flex",
          alignItems: "center",
          gap: {
            xs: "12px",
            md: "20px",
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
              md: "14px",
            },

            letterSpacing: {
              xs: "1.2px",
              md: "2px",
            },
            color: "#806c5d",
            fontWeight: 400,
            "&:hover": {
              color: "#333",
            },
          }}
        >
          HOME
        </Typography>
        {/* SLASH */}
        <Typography
          component="span"
          sx={{
            fontSize: {
              xs: "15px",
              md: "18px",
            },
            color: "#806c5d",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          /
        </Typography>
        {/* CURRENT PAGE */}
        <Typography
          component="span"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "11px",
              sm: "12px",
              md: "14px",
            },
            letterSpacing: {
              xs: "1.2px",
              md: "2px",
            },
            color: "#806c5d",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          STORE LOCATOR
        </Typography>
      </Box>
      {/* =========================
          MAIN STORE LOCATOR
      ========================== */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          minHeight: {
            xs: "auto",
            md: "650px",
          },
        }}
      >
        {/* =========================
            LEFT LOCATION PANEL
        ========================== */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "38%",
              lg: "35%",
            },
            minWidth: 0,
            backgroundColor: "#f5f5f3",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              px: {
                xs: 3,
                sm: 4,
                md: 5,
              },
              pt: {
                xs: 4,
                md: 6,
              },
              pb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                  md: "36px",
                },
                fontWeight: 400,
                letterSpacing: "1px",
                color: "#496c90",
                lineHeight: 1.2,
              }}
            >
              STORE LOCATOR
            </Typography>

            <Box
              sx={{
                width: "45px",
                height: "1px",
                backgroundColor: "#a18b72",
                mt: 2,
              }}
            />
          </Box>

          {/* Location list */}
          <Box
            sx={{
              width: "100%",
              flex: 1,
              overflowY: {
                xs: "visible",
                md: "auto",
              },
            }}
          >
            {storeLocations.map((location, index) => {
              const isSelected = selectedLocation.id === location.id;

              return (
                <React.Fragment key={location.id}>
                  <Box
                    onClick={() => handleLocationClick(location)}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      px: {
                        xs: 3,
                        sm: 4,
                        md: 5,
                      },
                      py: {
                        xs: 3,
                        md: 4,
                      },
                      backgroundColor: isSelected ? "#ffffff" : "transparent",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        backgroundColor: "#ffffff",
                      },

                      /*
                       * Selected left border
                       */
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: isSelected ? "4px" : "0px",
                        backgroundColor: "#496c90",
                        transition: "width 0.25s ease",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      {/* Location icon */}
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: {
                            xs: 38,
                            md: 42,
                          },
                          height: {
                            xs: 38,
                            md: 42,
                          },
                          border: "1px solid #a18b72",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 0.3,
                        }}
                      >
                        <Icon
                          icon="mdi:map-marker-outline"
                          width={22}
                          height={22}
                          color="#496c90"
                        />
                      </Box>

                      {/* Location details */}
                      <Box
                        sx={{
                          minWidth: 0,
                          flex: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: {
                              xs: "18px",
                              md: "20px",
                            },
                            fontWeight: 500,
                            color: "#496c90",
                            letterSpacing: "0.5px",
                            mb: 0.6,
                          }}
                        >
                          {location.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "11px",
                            letterSpacing: "1.5px",
                            color: "#a18b72",
                            textTransform: "uppercase",
                            mb: 1.5,
                          }}
                        >
                          {location.type}
                        </Typography>

                        <Box>
                          {location.address.map((line, addressIndex) => (
                            <Typography
                              key={addressIndex}
                              sx={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: {
                                  xs: "12px",
                                  md: "13px",
                                },
                                lineHeight: 1.7,
                                color: "#777",
                              }}
                            >
                              {line}
                            </Typography>
                          ))}
                          <Box
                      component="a"
                      href={selectedLocation.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        mt: 1.5,
                        textDecoration: "none",
                        color: "#496c90",
                        transition: "color 0.2s ease",

                        "&:hover": {
                          color: "#a18b72",
                        },
                      }}
                    >
                      <Icon icon="mdi:instagram" width={18} height={18} />

                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "12px",
                          letterSpacing: "0.3px",
                          color: "inherit",
                        }}
                      >
                        @vaastuitalianmarble
                      </Typography>
                    </Box>
                        </Box>

                        {/* Directions button */}
                        {isSelected && (
                          <Button
                            onClick={(event) => {
                              event.stopPropagation();
                              openGoogleMaps();
                            }}
                            endIcon={
                              <Icon
                                icon="mdi:arrow-top-right"
                                width={16}
                                height={16}
                              />
                            }
                            sx={{
                              mt: 2,
                              p: 0,
                              minWidth: 0,
                              textTransform: "uppercase",
                              fontFamily: "Arial, sans-serif",
                              fontSize: "11px",
                              letterSpacing: "1.2px",
                              fontWeight: 500,
                              color: "#496c90",
                              justifyContent: "flex-start",

                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "#a18b72",
                              },
                            }}
                          >
                            Get Directions
                          </Button>
                        )}
                      </Box>

                      {/* Arrow */}
                      <Icon
                        icon={
                          isSelected ? "mdi:chevron-right" : "mdi:chevron-right"
                        }
                        width={22}
                        height={22}
                        color={isSelected ? "#496c90" : "#aaa"}
                        style={{
                          flexShrink: 0,
                          marginTop: 8,
                        }}
                      />
                    </Stack>
                  </Box>

                  {index < storeLocations.length - 1 && (
                    <Divider
                      sx={{
                        borderColor: "#dedbd5",
                        mx: {
                          xs: 3,
                          sm: 4,
                          md: 5,
                        },
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Box>
        </Box>

        {/* =========================
            RIGHT MAP
        ========================== */}
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: "62%",
              lg: "65%",
            },
            minWidth: 0,
            height: {
              xs: "500px",
              sm: "600px",
              md: "650px",
            },
            backgroundColor: "#e8e8e8",
          }}
        >
          {/* Google Maps */}
          <Box
            component="iframe"
            key={selectedLocation.id}
            title={`Google Map - ${selectedLocation.name}`}
            src={mapUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              display: "block",
            }}
          />

          {/* =========================
              SELECTED LOCATION CARD
          ========================== */}
          <Paper
            elevation={0}
            sx={{
              position: "absolute",
              zIndex: 2,

              left: {
                xs: 16,
                sm: 24,
                md: 30,
              },

              bottom: {
                xs: 16,
                sm: 24,
                md: 30,
              },

              width: {
                xs: "calc(100% - 32px)",
                sm: "360px",
                md: "390px",
              },

              maxWidth: "calc(100% - 32px)",

              backgroundColor: "rgba(255,255,255,0.97)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                px: {
                  xs: 2.5,
                  sm: 3,
                },
                py: {
                  xs: 2.5,
                  sm: 3,
                },
              }}
            >
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "18px",
                        sm: "20px",
                      },
                      color: "#496c90",
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                      mb: 0.5,
                    }}
                  >
                    {selectedLocation.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "1.4px",
                      color: "#a18b72",
                      textTransform: "uppercase",
                      mb: 1.3,
                    }}
                  >
                    {selectedLocation.type}
                  </Typography>

                  <Box>
                    {selectedLocation.address.map((line, index) => (
                      <Typography
                        key={index}
                        sx={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "12px",
                          lineHeight: 1.6,
                          color: "#777",
                        }}
                      >
                        {line}
                      </Typography>
                    ))}

                    {/* Instagram */}
                    <Box
                      component="a"
                      href={selectedLocation.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        mt: 1.5,
                        textDecoration: "none",
                        color: "#496c90",
                        transition: "color 0.2s ease",

                        "&:hover": {
                          color: "#a18b72",
                        },
                      }}
                    >
                      <Icon icon="mdi:instagram" width={18} height={18} />

                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "12px",
                          letterSpacing: "0.3px",
                          color: "inherit",
                        }}
                      >
                        @vaastuitalianmarble
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <IconButton
                  onClick={openGoogleMaps}
                  aria-label="Open Google Maps"
                  sx={{
                    width: 34,
                    height: 34,
                    flexShrink: 0,
                    border: "1px solid #d5d0c9",
                    borderRadius: "50%",
                    color: "#496c90",

                    "&:hover": {
                      backgroundColor: "#496c90",
                      color: "#fff",
                    },
                  }}
                >
                  <Icon icon="mdi:arrow-top-right" width={18} height={18} />
                </IconButton>
              </Stack>
            </Box>

            <Button
              fullWidth
              onClick={openGoogleMaps}
              sx={{
                height: 44,
                borderRadius: 0,
                backgroundColor: "#496c90",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",

                "&:hover": {
                  backgroundColor: "#3d5d7b",
                },
              }}
              endIcon={<Icon icon="mdi:arrow-right" width={18} height={18} />}
            >
              View on Google Maps
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreLocator;
