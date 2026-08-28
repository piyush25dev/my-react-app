import { useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import FormField from "./FormField";
import { contactData } from "../../../Data/contactData";
import { Icon } from "@iconify/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [accepted, setAccepted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!accepted) {
      return;
    }

    console.log("Form Data:", formData);

    // Add your API call here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
      }}
    >
      {/* Name */}
      <Box sx={{ mb: { xs: 5, md: 6 } }}>
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Box>

      {/* Email + Mobile */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          columnGap: {
            xs: 0,
            sm: "85px",
            lg: "90px",
          },
          rowGap: {
            xs: "45px",
            sm: 0,
          },
          mb: {
            xs: 5,
            md: 6,
          },
        }}
      >
        <FormField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormField
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </Box>

      {/* Message */}
      <Box sx={{ mb: { xs: 4, md: 5 } }}>
        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={6}
          fullWidth
        />
      </Box>

      {/* Privacy */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: {
            xs: 1,
            md: 1.5,
          },
          mb: 2,
        }}
      >
        <Checkbox
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
          icon={
            <Box
              sx={{
                width: "20px",
                height: "20px",
                border: "1px solid #aa947c",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            />
          }
          checkedIcon={
            <Box
              sx={{
                width: "20px",
                height: "20px",
                border: "1px solid #aa947c",
                borderRadius: "6px",
                backgroundColor: "#aa947c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <Icon icon="mdi:check" width="20" height="20" color="#fff" />
            </Box>
          }
          sx={{
            padding: 0,
            margin: 0,
            marginTop: "2px",

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              md: "17px",
            },
            lineHeight: 1.5,
            color: "#5c6f82",
          }}
        >
          By submitting the form, I agree to the{" "}
          <Box
            component="a"
            href={contactData.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#5c6f82",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </Box>{" "}
          and Website{" "}
          <Box
            component="a"
            href={contactData.terms}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#5c6f82",
              textDecoration: "underline",
            }}
          >
            Terms & Conditions
          </Box>
          .
        </Typography>
      </Box>

      {/* Required */}
      <Typography
        sx={{
          fontSize: {
            xs: "13px",
            md: "15px",
          },
          color: "#60758b",
          mb: 3,
        }}
      >
        * Required fields
      </Typography>

      {/* Submit */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: {
            xs: 4,
            md: 5,
          },
        }}
      >
        <Button
          type="submit"
          disabled={!accepted}
          disableRipple
          sx={{
            minWidth: "auto",
            padding: 0,
            color: "#9d8974",
            fontSize: {
              xs: "12px",
              md: "14px",
            },
            letterSpacing: "2px",
            fontWeight: 400,
            background: "transparent",

            "&:hover": {
              background: "transparent",
              color: "#6f5d4c",
            },

            "&.Mui-disabled": {
              color: "#b9b0a7",
            },
          }}
        >
          SEND REQUEST
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
