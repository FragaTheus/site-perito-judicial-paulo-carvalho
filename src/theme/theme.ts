import { extendTheme } from "@mui/joy";
const color = {
  100: "#F4CE2C",
  200: "#F7DC6F",
  300: "#E4B801",
  400: "#242323",
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
          body: "#F0F0F0",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  typography: {
    h1: {
      fontSize: "clamp(2.5rem,8vmin,8rem)",
      fontWeight: "800",
      fontFamily: '"Montserrat", sans-serif',
      color: "#ffffff",
    },
    h2: {
      fontSize: "clamp(2rem,6vmin,3rem)",
      fontWeight: "600",
      fontFamily: '"Montserrat", sans-serif',
      color: "#ffffff",
    },
    h3: {
      fontSize: "clamp(1.5rem,5vmin,2.5rem)",
      fontWeight: "300",
      fontFamily: '"Montserrat", sans-serif',
      color: "#ffffff",
    },
    h4: {
      fontSize: "clamp(1.2rem,2vmin,3rem)",
      fontWeight: "300",
      fontFamily: '"Montserrat", sans-serif',
      color: "#ffffff",
    },
    "title-md": {
      fontSize: "clamp(1.2rem,6vmin,6rem)",
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    "title-sm": {
      fontSize: "clamp(1rem,4vmin,5rem)",
      fontFamily: '"Montserrat", sans-serif',
    },
    "body-lg": {
      fontSize: "clamp(0.8rem,3vmin,5rem)",
      fontFamily: '"Montserrat", sans-serif',
    },
    "body-md": {
      fontSize: "clamp(0.6rem,2.5vmin,4rem)",
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    "body-sm": {
      fontSize: "clamp(0.6rem,2.2vmin,3rem)",
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  fontSize: {
    md: "clamp(1rem, 1.5vmin, 2rem)",
    lg: "clamp(1rem, 2vmin, 3rem)",
  },
  radius: {
    sm: "5px",
    md: "10px",
    lg: "25px",
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          width: "80%",
          height: "70%",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "background.surface",
        },
      },
    },
    JoyTypography: {
      defaultProps: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
      },
    },
    JoyCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          padding: "20px",
        },
      },
    },
    JoyCardActions: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "clamp(20px,10vh,100px)",
          borderRadius: "5px",
          display: "flex",
          padding: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: color[400],
        },
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "lg",
          borderCollor: color[900],
        },
      },
    },
  },
});
