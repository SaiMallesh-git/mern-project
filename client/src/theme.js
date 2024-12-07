import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: theme.spacing(2),
          borderWidth: "1.5px",
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
  palette: {
    mode: "light", // Explicitly set to light mode
    primary: {
      main: "#f44336", // Red primary color
    },
    secondary: {
      main: "#2575fc", // Secondary color (blue)
    },
    background: {
      default: "#f0f0f0", // Updated light background color for body
      paper: "#ffffff", // Light paper background color
    },
    text: {
      primary: "#000000", // Dark text for light mode
      secondary: "#555555", // Lighter secondary text color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Font styling
  },
  shape: {
    borderRadius: 8, // Optional, for rounded components like cards, etc.
  },
});

export default theme;
