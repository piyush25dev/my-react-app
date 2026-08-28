import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { teamSliderData } from "../../../Data/About";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = teamSliderData[currentIndex];
  const totalSlides = teamSliderData.length;

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const progress =
    totalSlides > 0
      ? ((currentIndex + 1) / totalSlides) * 100
      : 0;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        mb: {
          xs: 0,
          md: 10,
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          minHeight: "480px",
          "& > *": {
            minWidth: 0,
          },
           "@media (max-width: 900px)": {
            gridTemplateColumns: "1fr",
            minHeight: "auto",
          },
        }}
      >
        {/* =========================================
            LEFT IMAGE
        ========================================= */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minWidth: 0,
           minHeight: "480px",
            overflow: "hidden",
            "@media (max-width: 900px)": {
              minHeight: "auto",
              height: "auto",
              aspectRatio: "16 / 9",
            },
            "@media (max-width: 600px)": {
              aspectRatio: "16 / 10",
            },
          }}
        >
          <Box
            component="img"
            src="/images/about/group.png"
            alt="Antolini team"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
            }}
          />
        </Box>
        {/* =========================================
            RIGHT SLIDER
        ========================================= */}
        <TeamSlider
          slide={currentSlide}
          progress={progress}
          onNext={goNext}
          onPrev={goPrev}
        />
      </Box>
    </Box>
  );
};

const TeamSlider = ({
  slide,
  progress,
  onNext,
  onPrev,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        minHeight: "480px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        paddingTop: "30px",
        paddingBottom: "25px",
         overflow: "hidden",
        "@media (max-width: 1200px)": {
          paddingTop: "25px",
          paddingBottom: "25px",
        },
        /*
         * Tablet
         */
        "@media (max-width: 900px)": {
          minHeight: "580px",
          paddingTop: "30px",
          paddingBottom: "30px",
        },
        /*
         * Mobile
         */
        "@media (max-width: 600px)": {
          minHeight: "360px",
          paddingTop: "20px",
          paddingBottom: "20px",
        },
      }}
    >
      {/* =========================================
          PROGRESS BAR
      ========================================= */}
      <Box
        sx={{
          width: "64%",
          height: "3px",
          flexShrink: 0,
          backgroundColor: "#d7d3ce",
          position: "relative",
          marginBottom: "50px",
          "@media (max-width: 1200px)": {
            width: "70%",
            marginBottom: "40px",
          },
          "@media (max-width: 900px)": {
            width: "75%",
            marginBottom: "35px",
          },
          "@media (max-width: 600px)": {
            width: "80%",
            marginBottom: "25px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "3px",
            width: `${progress}%`,
            backgroundColor: "#a7957f",
            transition:
              "width 400ms ease",
          }}
        />
      </Box>
      {/* =========================================
          IMAGE + BUTTONS
      ========================================= */}
      <Box
        sx={{
          width: "100%",
           flex: "1 1 auto",
          minHeight: 0,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
              overflow: "hidden",
          "@media (max-width: 600px)": {
            minHeight: "210px",
          },
        }}
      >
        {/* =========================================
            PREVIOUS BUTTON
        ========================================= */}

        <SliderButton
          direction="prev"
          onClick={onPrev}
        />

        {/* =========================================
            IMAGE
        ========================================= */}

        <Box
          sx={{
            width: "68%",
            /*
             * Let width determine image height.
             */
            aspectRatio: "1.42 / 1",
            maxHeight: "100%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 1,
            /*
             * Prevent the image from forcing
             * the parent wider.
             */
            minWidth: 0,
            "@media (max-width: 1200px)": {
              width: "65%",
            },
            "@media (max-width: 900px)": {
              width: "70%",
            },
            "@media (max-width: 600px)": {
              width: "72%",
              aspectRatio: "1.35 / 1",
            },
          }}
        >
          <Box
            key={slide.id}
            component="img"
            src={slide.image}
            alt={slide.title}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              animation:
                "teamSlideIn 500ms ease",
              "@keyframes teamSlideIn": {
                from: {
                  opacity: 0,
                  transform:
                    "translateX(20px)",
                },

                to: {
                  opacity: 1,
                  transform:
                    "translateX(0)",
                },
              },
            }}
          />
        </Box>

        {/* =========================================
            NEXT BUTTON
        ========================================= */}

        <SliderButton
          direction="next"
          onClick={onNext}
        />
      </Box>
      {/* =========================================
          CAPTION
      ======================================== */}
      <Typography
        sx={{
          flexShrink: 0,
          marginTop: "38px",
          fontSize: "14px",
          letterSpacing: "2.5px",
          color: "#a4866e",
          fontWeight: 400,
          textTransform: "uppercase",
          lineHeight: 1.2,
          textAlign: "center",
          maxWidth: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "@media (max-width: 1200px)": {
            marginTop: "30px",
          },
          "@media (max-width: 900px)": {
            marginTop: "30px",
          },
          "@media (max-width: 600px)": {
            marginTop: "20px",
            fontSize: "11px",
            letterSpacing: "2px",
            maxWidth: "85%",
          },
        }}
      >
        {slide.title}
      </Typography>
    </Box>
  );
};
/* =========================================================
   SLIDER BUTTON
========================================================= */
const SliderButton = ({
  direction,
  onClick,
}) => {
  const isPrev = direction === "prev";

  return (
    <Box
      component="button"
      onClick={onClick}
      aria-label={
        isPrev
          ? "Previous image"
          : "Next image"
      }
      sx={{
        position: "absolute",

        top: "50%",

        transform:
          "translateY(-50%)",

        ...(isPrev
          ? {
              left: "7%",
            }
          : {
              right: "7%",
            }),

        width: "60px",
        height: "60px",

        borderRadius: "50%",

        border:
          "1px solid #ae9b85",

        backgroundColor:
          "transparent",

        color: "#a38f79",

        cursor: "pointer",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        padding: 0,
        margin: 0,

        boxSizing: "border-box",

        transition:
          "all 250ms ease",

        zIndex: 5,

        flexShrink: 0,

        "&:hover": {
          backgroundColor:
            "#a7957f",

          color: "#fff",
        },

        "&:focus-visible": {
          outline:
            "2px solid #a7957f",

          outlineOffset: "3px",
        },

        /* TABLET */
        "@media (max-width: 1200px)": {
          width: "52px",
          height: "52px",

          ...(isPrev
            ? {
                left: "5%",
              }
            : {
                right: "5%",
              }),
        },

        /* MOBILE */
        "@media (max-width: 600px)": {
          width: "34px",
          height: "34px",

          ...(isPrev
            ? {
                left: "3%",
              }
            : {
                right: "3%",
              }),
        },

        /* VERY SMALL MOBILE */
        "@media (max-width: 400px)": {
          width: "30px",
          height: "30px",

          ...(isPrev
            ? {
                left: "2%",
              }
            : {
                right: "2%",
              }),
        },
      }}
    >
      {isPrev ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <Icon
            icon="iconamoon:arrow-left-2"
            width="13"
            height="13"
          />

          <Typography
            component="span"
            sx={{
              fontSize: "12px",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "0.2px",

              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            PREV
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "12px",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "0.2px",

              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            NEXT
          </Typography>

          <Icon
            icon="iconamoon:arrow-right-2"
            width="13"
            height="13"
          />
        </Box>
      )}
    </Box>
  );
};

export default TeamSection;