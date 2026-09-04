import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import {
  indianMarbles,
  indianMarbleCaseStudy,
  italianMarbles,
  italianMarbleCaseStudy,
  indianGranites,
  indianGraniteCaseStudy,
  italianGranites,
} from "../../Data/ProductsData";

const ProductIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // SELECT DATA BASED ON PAGE URL
  // =====================================================

  const productDataMap = {
    "/products/indian-marbles": {
      title: "Indian Marbles",
      products: indianMarbles,
      caseStudy: indianMarbleCaseStudy,
    },

    "/products/italian-marbles": {
      title: "Italian Marbles",
      products: italianMarbles,
      caseStudy: italianMarbleCaseStudy,
    },

    "/products/indian-granite": {
      title: "Indian Granites",
      products: indianGranites,
      caseStudy: indianGraniteCaseStudy,
    },

    "/products/italian-granite": {
      title: "Italian Granites",
      products: italianGranites,
      caseStudy: null,
    },
  };

  const currentData = productDataMap[location.pathname];

  const products = currentData?.products || [];
  const pageTitle = currentData?.title || "";
  const caseStudy = currentData?.caseStudy;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        color: "#253b50",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          px: { xs: "20px", sm: "40px", md: "70px", lg: "86px" },
          py: { xs: "16px", sm: "20px", md: "24px" },
          display: "flex",
          alignItems: "center",
          gap: { xs: "10px", md: "18px" },
          whiteSpace: "nowrap",
        }}
      >
        {" "}
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
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            letterSpacing: { xs: "1px", md: "1.8px" },
            color: "#806c5d",
            fontWeight: 400,
            "&:hover": { color: "#222" },
          }}
        >
          {" "}
          HOME{" "}
        </Typography>{" "}
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "14px", md: "17px" },
            color: "#806c5d",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          {" "}
          /{" "}
        </Typography>{" "}
        <Typography
          component="span"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: { xs: "11px", sm: "12px", md: "13px" },
            letterSpacing: { xs: "1px", md: "1.8px" },
            color: "#806c5d",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          {" "}
          {pageTitle}{" "}
        </Typography>{" "}
      </Box>
      {/* =====================================================
          CASE STUDY - TOP
      ====================================================== */}

      {caseStudy && (
        <Box
          sx={{
            backgroundColor: "#f4f3f1",
            py: {
              xs: 8,
              md: 12,
              lg: 8,
            },
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              px: {
                xs: 3,
                md: 6,
                lg: 8,
              },
            }}
          >
            <Grid
              container
              sx={{
                minHeight: {
                  md: "560px",
                  lg: "650px",
                },
              }}
            >
              {/* IMAGE */}

              <Grid
                size={{
                  xs: 12,
                  md: 7,
                }}
                sx={{
                  order: {
                    xs: 1,
                    md: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    height: {
                      xs: "380px",
                      sm: "480px",
                      md: "100%",
                    },
                    overflow: "hidden",
                  }}
                >
                  {caseStudy.image && (
                    <Box
                      component="img"
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 1s ease",

                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    />
                  )}
                </Box>
              </Grid>

              {/* CONTENT */}

              <Grid
                size={{
                  xs: 12,
                  md: 5,
                }}
                sx={{
                  order: {
                    xs: 2,
                    md: 1,
                  },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    px: {
                      xs: 0,
                      md: 5,
                      lg: 8,
                    },

                    py: {
                      xs: 5,
                      md: 3,
                    },

                    maxWidth: "600px",
                  }}
                >
                  {/* CATEGORY */}

                  <Typography
                    sx={{
                      fontSize: "12px",
                      letterSpacing: "4px",
                      color: "#aa947c",
                      mb: 3,
                      textTransform: "uppercase",
                    }}
                  >
                    {caseStudy.label}
                  </Typography>

                  {/* TITLE */}

                  <Typography
                    component="h1"
                    sx={{
                      fontSize: {
                        xs: "38px",
                        sm: "48px",
                        md: "54px",
                        lg: "62px",
                      },
                      lineHeight: 1.08,
                      fontWeight: 300,
                      color: "#243b52",
                      mb: 3,
                    }}
                  >
                    {caseStudy.title}
                  </Typography>

                  {/* DIVIDER */}

                  <Box
                    sx={{
                      width: "70px",
                      height: "1px",
                      backgroundColor: "#aa947c",
                      mb: 4,
                    }}
                  />

                  {/* DESCRIPTION */}

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "17px",
                        md: "19px",
                      },
                      lineHeight: 1.7,
                      fontWeight: 300,
                      color: "#667789",
                      mb: 3,
                    }}
                  >
                    {caseStudy.description}
                  </Typography>

                  {/* BOTTOM LABEL */}

                  <Box
                    sx={{
                      mt: 5,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "36px",
                        height: "1px",
                        backgroundColor: "#aa947c",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "2px",
                        color: "#aa947c",
                        textTransform: "uppercase",
                      }}
                    >
                      Timeless Stone
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      {/* =====================================================
          INTRO
      ====================================================== */}

      <Box
        sx={{
          py: {
            xs: 8,
            md: 12,
            lg: 15,
          },
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "850px",
              mx: "auto",
              px: {
                xs: 3,
                md: 0,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: "4px",
                color: "#aa947c",
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Natural Stone Collection
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                  lg: "50px",
                },
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#253b50",
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              {pageTitle}
              <br />
              Stone with a story.
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },
                lineHeight: 1.8,
                color: "#7a8792",
                fontWeight: 300,
              }}
            >
              Discover a curated selection of natural stones where every surface
              carries its own pattern, texture and character. From expressive
              marbles to luxurious onyx, each material brings a distinctive
              identity to architecture and interiors.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <Box>
        {products.map((product, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <Box
              key={product.name}
              sx={{
                backgroundColor: index % 2 === 0 ? "#fff" : "#f5f4f2",
              }}
            >
              <Grid
                container
                sx={{
                  minHeight: {
                    md: "620px",
                    lg: "700px",
                  },
                }}
              >
                {/* IMAGE */}

                <Grid
                  size={{
                    xs: 12,
                    md: 7,
                  }}
                  sx={{
                    order: {
                      xs: 1,
                      md: imageLeft ? 1 : 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: {
                        xs: "380px",
                        sm: "500px",
                        md: "100%",
                      },
                      overflow: "hidden",
                    }}
                  >
                    {product.image ? (
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 1s ease",

                          "&:hover": {
                            transform: "scale(1.035)",
                          },
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#e8e5e1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#aa947c",
                            letterSpacing: "2px",
                            fontSize: "12px",
                            textTransform: "uppercase",
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* CONTENT */}

                <Grid
                  size={{
                    xs: 12,
                    md: 5,
                  }}
                  sx={{
                    order: {
                      xs: 2,
                      md: imageLeft ? 2 : 1,
                    },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",

                      px: {
                        xs: 3,
                        sm: 5,
                        md: 6,
                        lg: 9,
                      },

                      py: {
                        xs: 7,
                        md: 6,
                        lg: 8,
                      },
                    }}
                  >
                    {/* Number */}

                    <Typography
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "3px",
                        color: "#aa947c",
                        mb: 3,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    {/* Title */}

                    <Typography
                      component="h2"
                      sx={{
                        fontSize: {
                          xs: "38px",
                          sm: "44px",
                          md: "48px",
                          lg: "56px",
                        },
                        lineHeight: 1.1,
                        fontWeight: 300,
                        color: "#253b50",
                        mb: 3,
                      }}
                    >
                      {product.name}
                    </Typography>

                    {/* Divider */}

                    <Box
                      sx={{
                        width: "60px",
                        height: "1px",
                        backgroundColor: "#aa947c",
                        mb: 4,
                      }}
                    />

                    {/* Description */}

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          md: "18px",
                        },
                        lineHeight: 1.8,
                        color: "#71808d",
                        fontWeight: 300,
                        maxWidth: "500px",
                      }}
                    >
                      {product.description}
                    </Typography>

                    {/* Material details */}

                    <Box
                      sx={{
                        mt: 5,
                        pt: 3,
                        borderTop: "1px solid",
                        borderColor: "rgba(170,148,124,0.3)",
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "500px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "11px",
                            letterSpacing: "2px",
                            color: "#aa947c",
                            mb: 1,
                          }}
                        >
                          MATERIAL
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#596b7c",
                          }}
                        >
                          Natural Stone
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: "11px",
                            letterSpacing: "2px",
                            color: "#aa947c",
                            mb: 1,
                          }}
                        >
                          ORIGIN
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#596b7c",
                          }}
                        >
                          {location.pathname.includes("italian")
                            ? "Italy"
                            : "India"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>

      {/* =====================================================
          CLOSING SECTION
      ====================================================== */}

      <Box
        sx={{
          backgroundColor: "#243b52",
          py: {
            xs: 9,
            md: 13,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              px: {
                xs: 3,
                md: 0,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: "4px",
                color: "#c2ae98",
                mb: 3,
              }}
            >
              VAASHTU MARBLE & GRANITES
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "30px",
                  md: "42px",
                },
                lineHeight: 1.3,
                fontWeight: 300,
                mb: 3,
              }}
            >
              Every surface has a story.
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "16px",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Choose materials that transform your space into something
              timeless, distinctive and truly your own.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductIndex;
