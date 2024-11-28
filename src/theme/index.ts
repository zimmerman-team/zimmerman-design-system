import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: {
    blue: "#002561",
    gray: "#F8F8F8",
    white: "#FFFFFF",
    lightBlue: "#82C9F0",
    lightBlueGray: "#4F6797",
  },
  secondary: {
    lightGrey: "#f7f7f7",
    iconGray: "#A1AEBD",
    disableButton: "#EBEBEB",
    blueGrayLight: "#ECF1FA",
    blueGrayDark: "#BCC6D6",
    grayDark: "#888888",
    grayLight: "#E3E3E3",
    darkBlueGray: "#4F6797",
    midnightBlue: "#013B82",
  },
  graph: {
    green: {
      900: "#475A51",
      800: "#526B5F",
      700: "#5F8070",
      600: "#6E9884",
      500: "#85AF9B",
      400: "#A4C3B4",
      300: "#BAD2C7",
      200: "#CCDDD5",
      100: "#E2ECE7",
    },
    burgundy: {
      900: "#26131C",
      800: "#2E1521",
      700: "#381727",
      600: "#44192E",
      500: "#561735",
      400: "#A52C67",
      300: "#CF4D8C",
      200: "#DB7AA9",
      100: "#E49BBE",
      50: "#EBB4CF",
    },
    sand: {
      900: "#765E4B",
      800: "#8E6E55",
      700: "#A78164",
      600: "#BB997F",
      500: "#D4B59E",
      400: "#DFC8B6",
      300: "#E7D6C8",
      200: "#EDE0D6",
      100: "#F1E8E0",
    },
    graphite: {
      900: "#060E13",
      800: "#071017",
      700: "#07131C",
      600: "#071722",
      500: "#041C2C",
      400: "#0E5F96",
      300: "#1592E5",
      200: "#4CAEEF",
      100: "#79C2F3",
      50: "#9BD1F6",
    },
    warmYellow: {
      900: "#936429",
      800: "#B4762A",
      700: "#D98B2C",
      600: "#E7A14B",
      500: "#FCBB6D",
      400: "#FDCD92",
      300: "#FDD9AD",
      200: "#FEE3C1",
      100: "#FEEAD1",
    },
    darkGreen: {
      900: "#071716",
      800: "#071D1A",
      700: "#072320",
      600: "#062B27",
      500: "#023833",
      400: "#06A595",
    },
    purple: {
      900: "#201D2C",
      800: "#252135",
      700: "#2B263F",
      600: "#322A4C",
      500: "#382D5E",
      400: "#5D4B9D",
      300: "#8272BC",
      200: "#A195CC",
      100: "#B9B0D9",
    },
    lilac: {
      900: "#635266",
      800: "#765F79",
      700: "#8C6E91",
      600: "#A186A6",
      500: "#BBA1BF",
      400: "#CCB8CF",
      300: "#D9CADB",
      200: "#E2D7E4",
      100: "#E9E1EB",
    },
    coral: {
      900: "#964835",
      800: "#B65138",
      700: "#D06448",
      600: "#E0826A",
      500: "#F4A490",
      400: "#F7BBAC",
      300: "#F9CCC1",
      200: "#FAD9D0",
      100: "#FCE2DC",
    },
    darkGrey: {
      900: "#202020",
      800: "#252525",
      700: "#2C2C2C",
      600: "#343434",
      500: "#3D3D3D",
      400: "#6D6D6D",
      300: "#929292",
      200: "#ADADAD",
      100: "#C2C2C2",
      50: "#D1D1D1",
    },
  },
  shadows: {
    main: "0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
    inner: "0px 3px 3px 0px rgba(0, 0, 0, 0.1) inset",
    section:
      "0px 1.446765661239624px 2.893531322479248px 0px rgba(97, 97, 97, 0.2)",
  },
  text: {
    title: "#0C162A",
    body: "#454545",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.blue,
    },
    secondary: {
      main: colors.secondary.blueGrayLight,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Finlandica",
    h1: {
      fontSize: "64px",
      fontWeight: "400",
      color: colors.primary.blue,
    },
    h2: {
      fontSize: "48px",
      fontWeight: "400",
      color: colors.primary.blue,
    },
    h3: {
      fontSize: "36px",
      fontWeight: "400",
      color: colors.primary.blue,
    },
    h4: {
      fontSize: "32px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    h5: {
      fontSize: "24px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    h6: {
      fontSize: "18px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    body1: {
      fontSize: "16px",
      fontWeight: "400",
      color: colors.primary.blue,
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
      color: colors.primary.blue,
    },
    button: {
      fontSize: "14px",
      fontWeight: "700",
      color: colors.primary.blue,
    },
    overline: {
      fontSize: "12px",
      fontWeight: "400",
      textTransform: "none",
      color: colors.primary.blue,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          "@media (min-width: 920px)": {
            padding: 0,
            marginLeft: "-55px",
          },
          "@media (max-width: 1280px)": {
            width: "100vw",
          },
          "@media (max-width: 920px)": {
            padding: "0 48px",
          },
          "@media (max-width: 768px)": {
            padding: "0 24px",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.primary.blue,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
          boxShadow: colors.shadows.main,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: "100%",
          borderBottom: `3px solid ${colors.primary.gray}`,
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: "50px",
          flexDirection: "row",
        },
        content: {
          margin: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
          display: "flex",
          margin: "15px 0",
          justifyContent: "flex-end",
          ".MuiGrid-container": {
            width: "calc(100% - 50px)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          padding: "4px 0",
          userSelect: "none",
          alignItems: "flex-start",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0 4px 0 0",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "*": {
            borderColor: colors.secondary.grayLight,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          padding: "10px 16px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "10px 16px",
        },
        head: {
          cursor: "pointer",
          fontWeight: "700",
          textWrap: "nowrap",
          borderStyle: "none",
          position: "relative",
          color: colors.primary.blue,
        },
        body: {
          color: colors.primary.blue,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          display: "flex",
          borderStyle: "none",
          padding: "10px 16px",
          justifyContent: "flex-start",
        },
        toolbar: {
          marginLeft: 0,
        },
      },
    },
  },
});

export default theme;
