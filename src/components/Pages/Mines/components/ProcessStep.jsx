import { Box, Typography } from "@mui/material";

const ProcessStep = ({ step, index }) => {
  if (!step) return null;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "180px 1fr",
        },
        gap: {
          xs: "25px",
          md: "60px",
        },
        py: {
          xs: "35px",
          md: "50px",
        },
        borderTop: index === 0 ? "1px solid #ddd" : "1px solid #ddd",
      }}
    >
      {/* NUMBER + TITLE */}
      <Box>
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "13px",
              md: "14px",
            },
            letterSpacing: "2px",
            color: "#aa947c",
            mb: "12px",
          }}
        >
          0{step.id}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "24px",
              sm: "28px",
              md: "32px",
            },
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#181818",
            margin: 0,
          }}
        >
          {step.title}
        </Typography>
      </Box>

      {/* DESCRIPTION */}
      <Box>
        {step.description && (
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              lineHeight: 1.8,
              fontWeight: 300,
              color: "#777",
              maxWidth: "850px",
              margin: 0,
            }}
          >
            {step.description}
          </Typography>
        )}

        {step.additionalDescription && (
          <Typography
            sx={{
              mt: "24px",
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              lineHeight: 1.8,
              fontWeight: 300,
              color: "#777",
              maxWidth: "850px",
            }}
          >
            {step.additionalDescription}
          </Typography>
        )}

        {step.additionalDescription2 && (
          <Typography
            sx={{
              mt: "24px",
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              lineHeight: 1.8,
              fontWeight: 300,
              color: "#777",
              maxWidth: "850px",
            }}
          >
            {step.additionalDescription2}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProcessStep;