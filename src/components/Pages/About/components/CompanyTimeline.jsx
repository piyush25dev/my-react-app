import { useLayoutEffect, useRef, useState } from "react";

import { Box, Container, Typography } from "@mui/material";

import { timelineData } from "../../../Data/About";

// Calculate responsive spacing based on viewport
const getEventGap = () => {
  const vw = Math.min(window.innerWidth, 1500);
  return Math.max(vw * 0.045, 40); // 4.5% of container max-width, min 40px
};

const getInitialTop = () => {
  const vw = Math.min(window.innerWidth, 1500);
  return Math.max(vw * 0.045, 40);
};

const CompanyTimeline = () => {
  const itemRefs = useRef([]);

  const [positions, setPositions] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [spacing, setSpacing] = useState({
    EVENT_GAP: getEventGap(),
    INITIAL_TOP: getInitialTop(),
  });

  useLayoutEffect(() => {
    const calculatePositions = () => {
      // Recalculate spacing on every resize/zoom
      const EVENT_GAP = getEventGap();
      const INITIAL_TOP = getInitialTop();

      setSpacing({ EVENT_GAP, INITIAL_TOP });

      const newPositions = [];

      if (!timelineData.length) return;

      /*
       * =====================================================
       * FIRST EVENT
       * =====================================================
       */

      const firstElement = itemRefs.current[0];

      if (!firstElement) return;

      /*
       * First event always starts here.
       */
      newPositions[0] = INITIAL_TOP;

      /*
       * =====================================================
       * FIRST TRANSITION
       *
       * Special rule:
       *
       * 2008 text       -> pushes 2009
       * 2008 image      -> does NOT push 2009
       * =====================================================
       */

      const firstFlow = firstElement.querySelector("[data-timeline-flow]");

      const firstFlowHeight = firstFlow?.offsetHeight || 0;

      if (timelineData.length > 1) {
        newPositions[1] = INITIAL_TOP + firstFlowHeight + EVENT_GAP;
      }

      /*
       * =====================================================
       * INDEPENDENT LEFT / RIGHT FLOWS
       *
       * LEFT:
       * 2009 -> 2011 -> 2013
       *
       * RIGHT:
       * 2008 -> 2010 -> 2012
       * =====================================================
       */

      let lastLeftPosition = null;
      let lastRightPosition = null;

      let lastLeftElement = null;
      let lastRightElement = null;

      /*
       * =====================================================
       * FIRST ITEM
       * =====================================================
       */

      if (timelineData[0]?.side === "left") {
        lastLeftPosition = INITIAL_TOP;
        lastLeftElement = firstElement;
      } else {
        lastRightPosition = INITIAL_TOP;
        lastRightElement = firstElement;
      }

      /*
       * =====================================================
       * SECOND ITEM
       * =====================================================
       */

      if (timelineData.length > 1) {
        const secondElement = itemRefs.current[1];

        if (timelineData[1]?.side === "left") {
          lastLeftPosition = newPositions[1];

          lastLeftElement = secondElement;
        } else {
          lastRightPosition = newPositions[1];

          lastRightElement = secondElement;
        }
      }

      /*
       * =====================================================
       * REMAINING ITEMS
       *
       * From here onward, the COMPLETE item height
       * (including image) determines the next item
       * on the SAME side.
       * =====================================================
       */

      for (let i = 2; i < timelineData.length; i++) {
        const element = itemRefs.current[i];

        if (!element) continue;

        const item = timelineData[i];

        /*
         * -----------------------------------------------
         * LEFT SIDE
         * -----------------------------------------------
         */

        if (item.side === "left") {
          if (lastLeftElement && lastLeftPosition !== null) {
            newPositions[i] =
              lastLeftPosition + lastLeftElement.offsetHeight + EVENT_GAP;
          } else {
            newPositions[i] = INITIAL_TOP;
          }

          lastLeftPosition = newPositions[i];

          lastLeftElement = element;
        } else {

        /*
         * -----------------------------------------------
         * RIGHT SIDE
         * -----------------------------------------------
         */
          if (lastRightElement && lastRightPosition !== null) {
            newPositions[i] =
              lastRightPosition + lastRightElement.offsetHeight + EVENT_GAP;
          } else {
            newPositions[i] = INITIAL_TOP;
          }

          lastRightPosition = newPositions[i];

          lastRightElement = element;
        }
      }

      /*
       * =====================================================
       * UPDATE EVENT POSITIONS
       * =====================================================
       */

      setPositions(newPositions);

      /*
       * =====================================================
       * CENTER LINE HEIGHT
       *
       * The line:
       *
       * - starts at the first dot
       * - ends at the bottom of the LAST event
       *
       * This includes the last image.
       * =====================================================
       */

      const lastIndex = timelineData.length - 1;

      const lastElement = itemRefs.current[lastIndex];

      if (lastElement) {
        const lastBottom = newPositions[lastIndex] + lastElement.offsetHeight;

        const calculatedLineHeight = lastBottom - INITIAL_TOP;

        setLineHeight(Math.max(calculatedLineHeight, 0));
      }
    };

    /*
     * Initial calculation
     */
    calculatePositions();

    /*
     * Recalculate on resize AND zoom
     */
    window.addEventListener("resize", calculatePositions);

    /*
     * Recalculate after images load
     */
    const images = document.querySelectorAll("[data-company-timeline] img");

    images.forEach((image) => {
      image.addEventListener("load", calculatePositions);
    });

    return () => {
      window.removeEventListener("resize", calculatePositions);

      images.forEach((image) => {
        image.removeEventListener("load", calculatePositions);
      });
    };
  }, []);

  /*
   * =====================================================
   * TIMELINE CONTAINER HEIGHT
   *
   * Need enough space for the final image.
   * =====================================================
   */

  const timelineHeight = Math.max(lineHeight + spacing.INITIAL_TOP + 100, 500);

  return (
    <Container maxWidth="lg">
      <Box
        data-company-timeline
        sx={{
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              position: "relative",

              minHeight: `${timelineHeight}px`,
              /*
               * =================================================
               * CENTER VERTICAL LINE
               * Starts at the first dot.
               * Ends at the bottom of the last content.
               * =================================================
               */
              "&::before": {
                content: '""',
                position: "absolute",
                top: `${spacing.INITIAL_TOP}px`,
                height: `${lineHeight}px`,
                left: "50%",
                width: "1px",
                backgroundColor: "#d1cdc8",
                transform: "translateX(-50%)",
                zIndex: 1,
                "@media (max-width: 768px)": {
                  display: "none",
                },
              },
            }}
          >
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id || index}
                item={item}
                top={positions[index] ?? spacing.INITIAL_TOP}
                itemRef={(element) => {
                  itemRefs.current[index] = element;
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

/* =========================================================
   TIMELINE ITEM
========================================================= */

const TimelineItem = ({ item, top, itemRef }) => {
  const isLeft = item.side === "left";

  return (
    <Box
      ref={itemRef}
      sx={{
        position: "absolute",

        top: `${top}px`,

        left: 0,
        right: 0,

        width: "100%",

        "@media (max-width: 768px)": {
          position: "static",
          top: "auto",
          marginBottom: "40px",
        },
      }}
    >
      {/* =================================================
          HORIZONTAL LINE
      ================================================= */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: "1px",
          backgroundColor: "#d1cdc8",
          zIndex: 1,
          ...(isLeft
            ? {
                left: 0,
                width: "50%",
              }
            : {
                left: "50%",
                width: "50%",
              }),
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      />

      {/* =================================================
          CENTER DOT
      ================================================= */}

      <Box
        sx={{
          position: "absolute",
          top: "-7px",
          left: "50%",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#aa987f",
          transform: "translateX(-50%)",
          zIndex: 5,
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <Box
        sx={{
          position: "relative",
          boxSizing: "border-box",
          ...(isLeft
            ? {
                width: "50%",
                marginLeft: 0,
                paddingRight: { xs: "20px", sm: "20px", lg: "100px" },
              }
            : {
                width: "50%",
                marginLeft: "50%",
                paddingLeft: { xs: "20px", sm: "20px", lg: "100px" },
              }),
          "@media (max-width: 768px)": {
            width: "auto",
            marginLeft: 0,
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        {/* =================================================
            FLOW CONTENT

            Year + description.

            For the FIRST event this is the ONLY
            content used to position the next event.
        ================================================= */}
        <Box data-timeline-flow>
          {/* YEAR */}
          <Typography
            component="h2"
            sx={{
              margin: 0,
              marginTop: { xs: 10, md: 0 },
              transform: "translateY(-32px)",
              fontSize: {
                xs: "27px",
                md: "27px",
              },
              lineHeight: 1,
              fontWeight: 400,
              color: "#151515",
              whiteSpace: "nowrap",
              fontFamily: "Arial, sans-serif",
              borderBottom: {xs: "1px solid #d1cdc8", md: "none"},
            }}
          >
            {item.year}
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              margin: 0,
              marginTop: { xs: -2, md: "76px" },
              maxWidth: { xs: "100%", md: "560px" },
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              lineHeight: 1.25,
              fontWeight: 400,
              color: "#4d7297",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {item.description}
          </Typography>
        </Box>

        {item.image && (
          <Box
            component="img"
            src={item.image}
            alt={item.year}
            sx={{
              display: "block",
              width: "100%",
              maxWidth: { xs: "100%", md: "560px" },
              height: "auto",
              objectFit: "cover",
              marginTop: "20px",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CompanyTimeline;