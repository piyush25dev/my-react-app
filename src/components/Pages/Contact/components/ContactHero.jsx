import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Users } from "lucide-react";

const ContactHero = () => {
  const navigate = useNavigate();
  const contactItems = [
    {
      icon: MapPin,
      title: "VISIT OUR",
      subtitle: "SHOWROOMS",
    },
    {
      icon: Phone,
      title: "CALL",
      subtitle: "OUR TEAM",
    },
    {
      icon: Mail,
      title: "EMAIL",
      subtitle: "US ANYTIME",
    },
    {
      icon: Users,
      title: "DISCUSS",
      subtitle: "YOUR PROJECT",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        overflowX: "hidden",
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
            lg: "86px",
          },
          py: {
            xs: "16px",
            sm: "20px",
            md: "24px",
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
          CONTACT US
        </Typography>
      </Box>

      {/* =========================================
          HERO
      ========================================= */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <Box
          component="img"
          src="/images/background/contact-hero.png"
          alt="Vaastu contact showroom"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: {
              xs: "58% center",
              sm: "58% center",
              md: "center",
            },
          }}
        />

        {/* LIGHT OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: {
              xs: `
          linear-gradient(
            180deg,
            rgba(250,246,239,0.92) 0%,
            rgba(250,246,239,0.82) 52%,
            rgba(250,246,239,0.25) 100%
          )
        `,
              md: `
          linear-gradient(
            90deg,
            rgba(250,246,239,0.90) 0%,
            rgba(250,246,239,0.82) 38%,
            rgba(250,246,239,0.15) 65%,
            rgba(250,246,239,0.02) 100%
          )
        `,
            },
          }}
        />

        {/* CONTENT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",

            px: {
              xs: "24px",
              sm: "45px",
              md: "70px",
              lg: "7%",
            },

            py: {
              xs: "50px",
              sm: "55px",
              md: "55px",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            maxWidth: {
              xs: "100%",
              md: "900px",
            },
          }}
        >
          {/* EYEBROW */}
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "10px",
                sm: "11px",
                md: "12px",
              },
              fontWeight: 500,
              letterSpacing: {
                xs: "2.5px",
                md: "3.5px",
              },
              color: "#5f5a52",
              mb: {
                xs: "12px",
                md: "14px",
              },
            }}
          >
            LET&apos;S CONNECT
          </Typography>

          {/* TITLE */}
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: {
                xs: "48px",
                sm: "62px",
                md: "72px",
                lg: "76px",
              },
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-2.5px",
              color: "#111",
              m: 0,
            }}
          >
            Get In Touch
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              mt: {
                xs: "18px",
                md: "20px",
              },
              maxWidth: {
                xs: "100%",
                sm: "600px",
                md: "620px",
              },
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
              },
              lineHeight: 1.5,
              fontWeight: 600,
              color: "#292722",
            }}
          >
            We&apos;d love to hear from you. Visit our showrooms, call us or
            <br />
            reach out via email — our team is here to assist you.
          </Typography>

          {/* GOLD LINE */}
          <Box
            sx={{
              width: {
                xs: "45px",
                md: "58px",
              },
              height: "3px",
              backgroundColor: "#967143",
              mt: {
                xs: "22px",
                md: "28px",
              },
              mb: {
                xs: "24px",
                md: "28px",
              },
            }}
          />

          {/* CONTACT OPTIONS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(4, 1fr)",
              },
              width: "100%",
              maxWidth: {
                xs: "100%",
                sm: "650px",
                md: "690px",
              },
            }}
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: {
                      xs: "10px",
                      sm: "12px",
                    },

                    minHeight: {
                      xs: "80px",
                      sm: "88px",
                    },

                    pl: {
                      xs: index % 2 === 0 ? 0 : "18px",
                      sm: index === 0 ? 0 : "32px",
                    },

                    borderLeft: {
                      xs:
                        index % 2 !== 0
                          ? "1px solid rgba(80,75,68,0.12)"
                          : "none",

                      sm:
                        index !== 0 ? "2px solid rgba(80,75,68,0.12)" : "none",
                    },
                  }}
                >
                  <Icon size={38} strokeWidth={1.5} color="#967143" />

                  <Box sx={{ pt: "2px" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "9px",
                          sm: "10px",
                          md: "11px",
                        },
                        lineHeight: 1.5,
                        fontWeight: 600,
                        letterSpacing: {
                          xs: "1.2px",
                          md: "1.5px",
                        },
                        color: "#34312d",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "9px",
                          sm: "10px",
                          md: "11px",
                        },
                        lineHeight: 1.5,
                        fontWeight: 600,
                        letterSpacing: {
                          xs: "1.2px",
                          md: "1.5px",
                        },
                        color: "#34312d",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHero;
