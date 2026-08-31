import { Box, Container, Typography } from "@mui/material";
import minesData from "../../../Data/MinesData";
import ProcessStep from "./ProcessStep";

const ProcessFlow = () => {
  const steps = minesData?.processFlow?.steps || [];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f7f5",
        py: {
          xs: "70px",
          sm: "90px",
          md: "120px",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* HEADING */}
        <Box
          sx={{
            mb: {
              xs: "55px",
              md: "80px",
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: {
                xs: "32px",
                sm: "40px",
                md: "50px",
              },
              fontWeight: 400,
              color: "#181818",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {minesData.processFlow.title}
          </Typography>

          <Box
            sx={{
              width: "55px",
              height: "1px",
              backgroundColor: "#aa947c",
              mt: "24px",
            }}
          />
        </Box>

        {/* PROCESS STEPS */}
        <Box>
          {steps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessFlow;