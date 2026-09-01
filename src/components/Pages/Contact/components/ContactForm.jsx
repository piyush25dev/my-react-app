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

  const [errors, setErrors] = useState({});

  const [accepted, setAccepted] = useState(false);
  const [acceptedError, setAcceptedError] = useState("");

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters.";
        } else if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) {
          error = "Please enter a valid name.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
        ) {
          error = "Please enter a valid email address.";
        }
        break;

      case "mobile":
        if (!value.trim()) {
          error = "Mobile number is required.";
        } else if (!/^[6-9]\d{9}$/.test(value.trim())) {
          error = "Please enter a valid 10-digit mobile number.";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required.";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters.";
        }
        break;

      default:
        break;
    }

    return error;
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    // Mobile: allow only numbers
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));

      const error = validateField(name, numericValue);

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };


  const handleBlur = (event) => {
    const { name, value } = event.target;

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };


  const handleAcceptedChange = (event) => {
    const checked = event.target.checked;

    setAccepted(checked);

    if (checked) {
      setAcceptedError("");
    } else {
      setAcceptedError(
        "Please accept the Privacy Policy and Terms & Conditions."
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (!accepted) {
      setAcceptedError(
        "Please accept the Privacy Policy and Terms & Conditions."
      );
    } else {
      setAcceptedError("");
    }

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0 || !accepted) {
      return;
    }

    // API CALL

    console.log("Form Data:", formData);

    // Add your API call here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        width: "100%",
      }}
    >

      <Box sx={{ mb: { xs: 5, md: 6 } }}>
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.name && (
          <Typography
            sx={{
              mt: 1,
              fontSize: {
                xs: "12px",
                md: "13px",
              },
              color: "#9d8974",
            }}
          >
            {errors.name}
          </Typography>
        )}
      </Box>

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
        {/* EMAIL */}
        <Box>
          <FormField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.email && (
            <Typography
              sx={{
                mt: 1,
                fontSize: {
                  xs: "12px",
                  md: "13px",
                },
                color: "#9d8974",
              }}
            >
              {errors.email}
            </Typography>
          )}
        </Box>

        {/* MOBILE */}

        <Box>
          <FormField
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              maxLength: 10,
              inputMode: "numeric",
            }}
          />

          {errors.mobile && (
            <Typography
              sx={{
                mt: 1,
                fontSize: {
                  xs: "12px",
                  md: "13px",
                },
                color: "#9d8974",
              }}
            >
              {errors.mobile}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ mb: { xs: 4, md: 5 } }}>
        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
          rows={6}
          fullWidth
        />

        {errors.message && (
          <Typography
            sx={{
              mt: 1,
              fontSize: {
                xs: "12px",
                md: "13px",
              },
              color: "#9d8974",
            }}
          >
            {errors.message}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: {
            xs: 1,
            md: 1.5,
          },
          mb: 1,
        }}
      >
        <Checkbox
          checked={accepted}
          onChange={handleAcceptedChange}
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
              <Icon
                icon="mdi:check"
                width="20"
                height="20"
                color="#fff"
              />
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

      {/* PRIVACY ERROR */}

      {acceptedError && (
        <Typography
          sx={{
            mt: 1,
            mb: 2,
            fontSize: {
              xs: "12px",
              md: "13px",
            },
            color: "#9d8974",
          }}
        >
          {acceptedError}
        </Typography>
      )}

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