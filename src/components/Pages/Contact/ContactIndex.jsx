import { Box, Container, Grid, Typography } from "@mui/material";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";

const ContactIndex = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <ContactHero/>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          my: 3,
        }}
      >
        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              md: "15px",
            },
            letterSpacing: "1.5px",
            color: "#5f7287",
            fontWeight: 400,
            textTransform: "uppercase",
            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          CONTACT VAASTU
        </Typography>

        {/* MAIN CONTENT */}
        <Grid
          container
          columnSpacing={{
            xs: 0,
            md: 8,
            lg: 10,
            xl: 12,
          }}
          rowSpacing={{
            xs: 6,
            md: 0,
          }}        >
          {/* LEFT - CONTACT INFORMATION */}
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <ContactInfo />
          </Grid>

          {/* RIGHT - CONTACT FORM */}
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactIndex;