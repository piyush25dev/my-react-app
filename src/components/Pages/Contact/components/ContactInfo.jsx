import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { contactData } from "../../../Data/contactData";
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        color: "#1a1a1a",
        py: {
          xs: "15px",
          sm: "15px",
          md: "15px",
        },
        boxSizing: "border-box",
      }}
    >
      {/* =========================================
          SECTION HEADER
      ========================================= */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          mb: {
            xs: "30px",
            md: "25px",
          },
          p: {xs: 2, md: 0},
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "11px",
              md: "12px",
            },
            fontWeight: 500,
            letterSpacing: {
              xs: "2px",
              md: "2.5px",
            },
            color: "#738396",
            textTransform: "uppercase",
            mb: "10px",
          }}
        >
          OUR LOCATIONS
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: {
              xs: "38px",
              sm: "46px",
              md: "52px",
            },
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-1.5px",
            color: "#111",
            m: 0,
          }}
        >
          Visit Our Showrooms
        </Typography>

        <Typography
          sx={{
            mt: "10px",
            maxWidth: "700px",
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "16px",
            },
            lineHeight: 1.7,
            fontWeight: 500,
            color: "#242424",
          }}
        >
          Explore our exclusive collection of marbles and granites at our
          showrooms in Hyderabad.<br/> Our team will be happy to assist you.
        </Typography>
      </Box>

      {/* =========================================
          SHOWROOM CARDS
      ========================================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: {
            xs: "25px",
            md: "25px",
          },
          width: "100%",
          p: {xs: 2, md: 0}
        }}
      >
        {contactData.offices.map((office) => (
          <Box
            key={office.title}
            sx={{
              minWidth: 0,
              backgroundColor: "#faf8f5",
            }}
          >
            {/* SHOWROOM IMAGE */}
            <Box
              sx={{
                width: "100%",
                aspectRatio: {
                  xs: "16 / 9",
                  md: "1.9 / 1",
                },
                overflow: "hidden",
                backgroundColor: "#eeeae4",
              }}
            >
              <Box
                component="img"
                src={office.image}
                alt={office.title}
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 500ms ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>

            {/* CARD CONTENT */}
            <Box
              sx={{
                px: {
                  xs: "20px",
                  sm: "22px",
                  md: "20px",
                },
                py: {
                  xs: "20px",
                  md: "19px",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily:
                    '"Playfair Display", Georgia, serif',
                  fontSize: {
                    xs: "22px",
                    sm: "24px",
                    md: "25px",
                  },
                  lineHeight: 1.15,
                  fontWeight: 400,
                  color: "#111",
                  mb: "16px",
                }}
              >
                {office.title}
              </Typography>

              {/* ADDRESS */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Icon
                  icon="solar:map-point-linear"
                  width="26"
                  height="26"
                  color="#9a7650"
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      lineHeight: 1.55,
                      fontWeight: 400,
                      color: "#59616a",
                    }}
                  >
                    {office.company}
                  </Typography>

                  <Typography
                    sx={{
                      mt: "1px",
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      lineHeight: 1.55,
                      fontWeight: 400,
                      color: "#59616a",
                    }}
                  >
                    {office.address.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== office.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* =========================================
          CONTACT DETAILS
      ========================================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, minmax(0, 1fr))",
          },
          width: "100%",
          mt: {
            xs: "35px",
            md: "38px",
          },
          p: {xs: 2, md: 0}
        }}
      >
        {/* EMAIL */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "15px",
            py: {
              xs: "12px",
              sm: 0,
            },
            pr: {
              sm: "25px",
            },
          }}
        >
          <Icon
            icon="solar:letter-linear"
            width="32"
            height="32"
            color="#9a7650"
          />

          <Box>
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                color: "#333",
                mb: "6px",
              }}
            >
              EMAIL
            </Typography>

            {contactData.emails.map((email) => (
              <Link
                key={email}
                href={`mailto:${email}`}
                underline="none"
                sx={{
                  display: "block",
                  width: "fit-content",
                  fontFamily: "Arial, sans-serif",
                  fontSize: {
                    xs: "12px",
                    md: "13px",
                  },
                  lineHeight: 1.7,
                  color: "#59616a",
                  "&:hover": {
                    color: "#9a7650",
                  },
                }}
              >
                {email}
              </Link>
            ))}
          </Box>
        </Box>

        {/* PHONE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "15px",
            py: {
              xs: "12px",
              sm: 0,
            },
            px: {
              sm: "25px",
            },
            borderLeft: {
              xs: "none",
              sm: "1px solid rgba(0,0,0,0.08)",
            },
            borderRight: {
              xs: "none",
              sm: "1px solid rgba(0,0,0,0.08)",
            },
          }}
        >
          <Icon
            icon="solar:phone-linear"
            width="32"
            height="32"
            color="#9a7650"
          />

          <Box>
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                color: "#333",
                mb: "6px",
              }}
            >
              PHONE NO
            </Typography>

            {contactData.phones.map((phone) => {
              const cleanPhone = phone.number.replace(/\D/g, "");

              return (
                <Box
                  key={phone.number}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    lineHeight: 1.7,
                  }}
                >
                  <Link
                    href={`tel:${cleanPhone}`}
                    underline="none"
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: {
                        xs: "12px",
                        md: "13px",
                      },
                      color: "#59616a",
                      "&:hover": {
                        color: "#9a7650",
                      },
                    }}
                  >
                    {phone.number}
                  </Link>

                  {phone.whatsapp && (
                    <Link
                      href={`https://wa.me/${cleanPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        icon="logos:whatsapp-icon"
                        width="18"
                        height="18"
                      />
                    </Link>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* WORKING HOURS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "15px",
            py: {
              xs: "12px",
              sm: 0,
            },
            pl: {
              sm: "25px",
            },
          }}
        >
          <Icon
            icon="solar:clock-circle-linear"
            width="32"
            height="32"
            color="#9a7650"
          />

          <Box>
            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                color: "#333",
                mb: "6px",
              }}
            >
              WORKING HOURS
            </Typography>

            <Typography
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: {
                  xs: "12px",
                  md: "13px",
                },
                lineHeight: 1.7,
                color: "#59616a",
              }}
            >
              Mon - Sat: 9:00 AM - 7:00 PM
              <br />
              Sunday: By Appointment
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;