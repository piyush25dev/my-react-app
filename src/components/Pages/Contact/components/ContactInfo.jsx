import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { contactData } from "../../../Data/contactData";
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#496c90",
      }}
    >
      {/* Offices */}
      {contactData.offices.map((office, index) => (
        <Box
          key={office.title}
          sx={{
            mb: {
              xs: 5,
              md: index === contactData.offices.length - 1 ? 3 : 5,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              lineHeight: 1.15,
              fontWeight: 400,
              color: "#66778a",
              mb: 0.8,
              fontFamily: "Arial, sans-serif",
            }}
          >
            {office.title}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                md: "14px",
              },
              lineHeight: 1.65,
              color: "#161414",
              fontFamily: "Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <span
              style={{
                fontSize: "18px",
                color: "#777373",
                fontFamily: "nimbus-sans, sans-serif",
              }}
            >
              {office.company}
            </span>
            <br />

            {office.address.map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                {lineIndex !== office.address.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      ))}

      {/* Email */}
      <Box sx={{ mb: { xs: 5, md: 3 } }}>
        <Typography
          sx={{
            fontSize: "15px",
            letterSpacing: "1px",
            color: "#8e7b67",
            mb: 1.5,
            textTransform: "uppercase",
          }}
        >
          E-MAIL
        </Typography>

        {contactData.emails.map((email) => (
          <Link
            key={email}
            href={`mailto:${email}`}
            underline="none"
            sx={{
              display: "block",
              width: "fit-content",
              color: "#315b82",
              fontSize: "16px",
              lineHeight: 1.7,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {email}
          </Link>
        ))}
      </Box>

      {/* Phone */}
      <Box>
        <Typography
          sx={{
            fontSize: "15px",
            letterSpacing: "1px",
            color: "#8e7b67",
            mb: 1.5,
            textTransform: "uppercase",
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
                gap: 1.5,
                mb: 0.5,
              }}
            >
              {/* Phone */}
              <Link
                href={`tel:${cleanPhone}`}
                underline="none"
                sx={{
                  color: "#315b82",
                  fontSize: "16px",
                  lineHeight: 1.7,

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Tel: {phone.number}
              </Link>

              {/* WhatsApp */}
              {phone.whatsapp && (
                <Link
                  href={`https://wa.me/${cleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp ${phone.number}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                    transition: "transform 200ms ease",

                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                </Link>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ContactInfo;
