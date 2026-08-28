import { Box, TextField, Typography } from "@mui/material";

const FormField = ({
  label,
  name,
  value,
  onChange,
  multiline = false,
  required = true,
  rows = 5,
  fullWidth = false,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        gridColumn: fullWidth ? "1 / -1" : "auto",
      }}
    >
      <TextField
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        placeholder="Write ..."
        variant="standard"
        sx={{
          "& .MuiInputBase-root": {
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "17px",
              md: "14px",
            },
            color: "#4d7297",
            padding: 0,

            ...(multiline && {
              minHeight: "100px",
              alignItems: "flex-start",
              paddingTop: "0px",
            }),
          },

          "& .MuiInputBase-input": {
            padding: "0 0 12px 0",
            height: 25,
          },

          "& textarea": {
            padding: "0 !important",
            lineHeight: 1.45,
          },

          "& input::placeholder, & textarea::placeholder": {
            color: "#c9c9c9",
            opacity: 1,
            fontSize: {
              xs: "17px",
              md: "24px",
            },
          },

          "& .MuiInput-underline:before": {
            borderBottom: "1px solid #aa947c",
          },

          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "1px solid #aa947c",
          },

          "& .MuiInput-underline:after": {
            borderBottom: "1px solid #aa947c",
          },
        }}
      />

      <Typography
        sx={{
          mt: 1.3,
          fontSize: {
            xs: "12px",
            md: "12px",
          },
          letterSpacing: "1px",
          color: "#60758b",
          textTransform: "uppercase",
        }}
      >
        {label} {required && "*"}
      </Typography>
    </Box>
  );
};

export default FormField;