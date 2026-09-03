import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Icon } from "@iconify/react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      const windowHeight = window.innerHeight;

      const scrollableHeight =
        documentHeight - windowHeight;

      const progress =
        scrollableHeight > 0
          ? (scrollTop / scrollableHeight) * 100
          : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Show scroll button after scrolling 250px
      setVisible(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const     openWhatsApp = () => {
    const phoneNumber = "919414109808";

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* =========================
          WHATSAPP BUTTON
      ========================== */}
      <Box
        component="button"
        type="button"
        onClick={openWhatsApp}
        aria-label="Contact us on WhatsApp"
        sx={{
          position: "fixed",

          right: {
            xs: "16px",
            sm: "24px",
            md: "30px",
          },

          bottom: {
            xs: "72px",
            sm: "80px",
            md: "90px",
          },

          zIndex: 9999,

          width: {
            xs: "35px",
            sm: "36px",
            md: "40px",
          },

          height: {
            xs: "35px",
            sm: "36px",
            md: "40px",
          },

          border: "none",
          borderRadius: "50%",
          backgroundColor: "red",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          cursor: "pointer",
          padding: 0,

          boxShadow:
            "0 4px 15px rgba(0, 0, 0, 0.12)",

          transition: "all 0.25s ease",

          "&:hover": {
            backgroundColor: "red",
            transform: "translateY(-3px)",
            boxShadow:
              "0 7px 20px rgba(0, 0, 0, 0.18)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        <Icon
          icon="akar-icons:whatsapp-fill"
          width={27}
          height={27}
          style={{
            color: "#ffffff",
          }}
        />
      </Box>

      {/* =========================
          SCROLL TO TOP
      ========================== */}
      {visible && (
        <Box
          component="button"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          sx={{
            position: "fixed",

            right: {
              xs: "16px",
              sm: "24px",
              md: "30px",
            },

            bottom: {
              xs: "16px",
              sm: "24px",
              md: "30px",
            },

            zIndex: 9999,

            width: {
              xs: "35px",
              sm: "36px",
              md: "40px",
            },

            height: {
              xs: "35px",
              sm: "36px",
              md: "40px",
            },

            /*
             * Progress border
             */
            border: "none",
            borderRadius: "10%",

            background: `conic-gradient(
              #496c90 ${scrollProgress}%,
              #d9d9d9 ${scrollProgress}% 100%
            )`,

            padding: "2px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            cursor: "pointer",

            boxShadow:
              "0 4px 15px rgba(0, 0, 0, 0.12)",

            transition:
              "transform 0.25s ease, box-shadow 0.25s ease",

            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow:
                "0 7px 20px rgba(0, 0, 0, 0.18)",
            },

            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          {/* Inner white circle */}
          <Box
            sx={{
              width: "100%",
              height: "100%",

              borderRadius: "10%",

              backgroundColor: "#ffffff",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#496c90",
            }}
          >
            <Icon
              icon="mdi:arrow-up"
              width={24}
              height={24}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;