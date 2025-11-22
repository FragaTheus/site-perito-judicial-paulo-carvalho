import { extendTheme } from "@mui/joy";
const color = {
  100: "#F4CE2C",
  200: "#F7DC6F",
  300: "#E4B801",
  400: "#2C2C2C",
  500: "#888888",
  600: "#AAAAAA",
  700: "#ffffff",
  800: "#121212",
  900: "transparent",
};

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          //colors
          100: color[100],
          200: color[200],
          300: color[300],
          400: color[400],
          500: color[500],
          600: color[600],
          700: color[700],
          800: color[800],
          900: color[900],
          //defaultComponentColors
          outlinedBg: color[900],
          outlinedColor: color[700],
          outlinedBorder: color[100],
          outlinedHoverBg: color[100],
          outlinedHoverColor: color[800],
          outlinedActiveBg: color[200],
          solidBg: color[100],
          solidColor: color[700],
          solidHoverBg: color[300],
          solidHoverColor: color[800],
          solidActiveBg: color[200],
          plainBg: color[900],
          plainColor: color[100],
          plainHoverBg: color[900],
          plainHoverColor: color[200],
          plainActiveBg: color[900],
          plainActiveColor: color[300],
        },
        background: {
          body: "#F3F4F6",
          surface: "#ffffff",
        },
        text: {
          primary: "#121212",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: color[100],
          200: color[200],
          300: color[300],
          400: color[400],
          500: color[500],
          600: color[600],
          700: color[700],
          800: color[800],
          900: color[900],
          //defaultComponentColors
          outlinedBg: color[900],
          outlinedColor: color[700],
          outlinedBorder: color[100],
          outlinedHoverBg: color[100],
          outlinedHoverColor: color[800],
          outlinedActiveBg: color[200],
          solidBg: color[100],
          solidColor: color[700],
          solidHoverBg: color[300],
          solidHoverColor: color[800],
          solidActiveBg: color[200],
          plainBg: color[900],
          plainColor: color[100],
          plainHoverBg: color[900],
          plainHoverColor: color[200],
          plainActiveBg: color[900],
          plainActiveColor: color[300],
        },

        background: {
          body: "#333333",
          surface: "#121212",
        },
        text: { primary: "#ffffff" },
      },
    },
  },
  fontFamily: {
  display: '"Playfair Display", serif',
  body: '"Montserrat", sans-serif',
},
typography: {
  h1: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
    fontWeight: 800,
    fontFamily: '"Montserrat", sans-serif',
    color: "#ffffff",
  },
  h2: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)", 
    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif',
    color: "#ffffff",
  },
  h3: {
    fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", 
    fontWeight: 500,
    fontFamily: '"Montserrat", sans-serif',
    color: "#ffffff",
  },
  h4: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", 
    fontWeight: 400,
    fontFamily: '"Montserrat", sans-serif',
    color: "#ffffff",
  },

  "title-lg": {
    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
  },
  "title-md": {
    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
  },
  "title-sm": {
    fontSize: "clamp(1rem, 2vw, 1.4rem)",
    fontFamily: '"Montserrat", sans-serif',
  },

  "body-lg": {
    fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
    fontFamily: '"Montserrat", sans-serif',
  },
  "body-md": {
    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
  },
  "body-sm": {
    fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
    fontFamily: '"Montserrat", sans-serif',
  },
},
});
