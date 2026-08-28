import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { contactData } from "../../../Data/contactData";

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
            <span style={{fontSize: "18px", color: "#777373", fontFamily: "nimbus-sans, sans-serif"}}>{office.company}</span>
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

        {contactData.phones.map((phone) => (
          <Link
            key={phone}
            href={`tel:${phone.replace(/\s/g, "")}`}
            underline="none"
            sx={{
              display: "block",
              color: "#315b82",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Tel: {phone}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ContactInfo;