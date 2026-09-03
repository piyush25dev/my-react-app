import { Box, Container, Grid, Typography } from "@mui/material";

const SuccessStory = ({
  eyebrow = "KNOW US BETTER",
  title = "About VMG",
  description = `The Vaastu marble and granites Pvt. Ltd is one among the top manufacturers and sellers of marble and granite, we possess a unique place in the market with a huge customer base. We give the finest granites and marbles from the best of our mines to our customers based on their requirement.
  
   We take care of the customer needs and satisfaction by giving the best of our quality in their budget, and guide them for the best color and pattern that suits their ambience with our experience and knowledge.`,
  image = "/images/about/girish.png",
}) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Grid container spacing={4} sx={{ width: "100%", boxSizing: "border-box" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            
              <Typography
                sx={{
                  fontSize: "11px",
                  lineHeight: 1.2,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#4d7297",
                  fontWeight: 400,
                  mb: "27px",
                  "@media (max-width: 768px)": {
                    fontSize: "10px",
                    mb: "20px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "9px",
                    mb: "16px",
                    letterSpacing: "0.5px",
                  },
                }}
              >
                {eyebrow}
              </Typography>

              {/* TITLE */}
              <Typography
                component="h1"
                sx={{
                  fontSize: "25px",
                  lineHeight: 1.2,
                  fontWeight: 400,
                  color: "#202020",
                  margin: 0,
                  mb: "23px",
                  "@media (max-width: 768px)": {
                    fontSize: "20px",
                    mb: "20px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "18px",
                    mb: "2px",
                  },
                }}
              >
                {title}
              </Typography>
            
            <Box>
                {/* DIVIDER */}
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#d4d0cc",
                    mb: "32px",
                    "@media (max-width: 768px)": {
                      mb: "24px",
                    },
                    "@media (max-width: 480px)": {
                      mb: "10px",
                    },
                  }}
                />

                {/* DESCRIPTION */}

                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                    fontSize: "20px",
                    lineHeight: 1.35,
                    fontWeight: 400,
                    color: "#5c7186",
                    maxWidth: "90%",
                    "@media (max-width: 768px)": {
                      fontSize: "14px",
                      lineHeight: 1.5,
                      maxWidth: "100%",
                    },
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      lineHeight: 1.45,
                    },
                  }}
                >
                  {description}
                </Typography>
              </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "block" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    display: "block",
                    width: { xs: "100%", sm: "unset" },
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center ",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SuccessStory;
