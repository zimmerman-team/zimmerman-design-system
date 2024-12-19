import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
<<<<<<< Updated upstream:src/components/Menu/MuiMenu/ZDSDropdown.stories.tsx
import MyDropdown from "./ZDSDropdown";
import { colors } from "../../../theme";
=======
import MyDropdown from "./myDropdown";
import { colors } from "theme";
>>>>>>> Stashed changes:src/components/Menu/MuiMenu/mydropdown.stories.tsx
import IconButton from "@mui/material/IconButton";
import MenuRounded from "@mui/icons-material/MenuRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

const meta: Meta<typeof MyDropdown> = {
  title: "Example/Dropdown/MUI-Menu",
  component: MyDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    anchorEl: { control: "object" },
    anchorElement: { control: "object" },
    onClose: { action: "closed" },
    items: { control: "object" },
    elevation: { control: "number" },
    transformOrigin: { control: "object" },
    autoFocus: { control: "boolean" },
    keepMounted: { control: "boolean" },
    sx: { control: "object" },
    menuItemProps: { control: "object" },
  },
};
export default meta;
type StoryType = StoryObj<typeof meta>;
//OpenAidDropdown
export const OpenAidDropdown: StoryType = {
  args: {
    id: "pages-menu",
    anchorElement: (
      <IconButton
        aria-label="menu button"
        sx={{ color: colors.secondary.midnightBlue }}
      >
        <MenuRounded />
      </IconButton>
    ),
    items: [
      {
        label: "Data Summary",
        action: () => console.log("Data Summary clicked"),
      },
      {
        label: "Disbursements Overview",
        action: () => console.log("Disbursements Overview clicked"),
      },
      { label: "Priorities", action: () => console.log("Priorities clicked") },
      { label: "Sectors", action: () => console.log("Sectors clicked") },
      {
        label: "Countries & Regions",
        action: () => console.log("Countries & Regions clicked"),
      },
      {
        label: "Organisations",
        action: () => console.log("Organisations clicked"),
      },
      { label: "Activities", action: () => console.log("Activities clicked") },
      { divider: true },
      {
        label: "About this site",
        action: () => console.log("About this site clicked"),
      },
      {
        label: "About Open Aid",
        action: () => console.log("About Open Aid clicked"),
      },
      { divider: true },
      { label: "Feedback", action: () => console.log("Feedback clicked") },
      {
        label: "Accessibility",
        action: () => console.log("Accessibility clicked"),
      },
    ],
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    onClose: () => {},
    disableScrollLock: true,

    sx: {
      "& .MuiPaper-root": {
        width: "240px",
        padding: "8px",
        borderRadius: "12px",
        background: colors.primary.white,
        boxShadow:
          "0px 4px 8px 0px rgba(97, 97, 97, 0.18), 0px 2px 4px 0px rgba(97, 97, 97, 0.18)",
      },
      "& .MuiMenu-list": {
        padding: 0,
      },
      "@media (max-width: 768px)": {
        display: "none",
      },
    },
    menuItemProps: {
      sx: {
        height: "40px",
        fontSize: "16px",
        padding: "4px 12px",
        borderRadius: "8px",
        color: colors.secondary.midnightBlue,
        "&:hover": {
          background: colors.secondary.blueGrayDark,
        },
        "> a": {
          width: "100%",
          textDecoration: "none",
        },
        "&.MuiMenuItem-divider": {
          padding: 0,
          height: "1px",
          margin: "12px 0",
          boxShadow: "none",
          pointerEvents: "none",
          backgroundColor: colors.secondary.iconGray,
        },
        "&.Mui-selected": {
          fontWeight: "bold",
          background: "#FFC0CB",
        },
      },
    },
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=6410-276271&t=AR8QHB5BZiod5OHq-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=6410-276271&t=AR8QHB5BZiod5OHq-4",
      },
    ],
  },
};

// Data Explorer Dropdown
//TODO:MAKE IT DYNAMIC
export const DataExplorerDropdown: StoryType = {
  args: {
    anchorElement: (
      <Button
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
          },
          "& .MuiButton-endIcon": {
            color: "black",
          },
        }}
      >
        2023-2024
      </Button>
    ),
    items: [
      {
        label: "2021-2022",
      },
      {
        label: "2020-2021",
      },
      {
        label: "2019-2020",
      },
    ],
    elevation: 0,
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    autoFocus: false,
    sx: {
      "& .MuiPaper-root": {
        width: 200,
        borderRadius: "4px",
        background: "#fff",
        border: `1px solid ${"#DFE3E5"}`,
        "&::-webkit-scrollbar": {
          width: 5,
          borderRadius: "2",
          background: "transparent",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "2",
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "2",
          background: "#000",
        },
      },
      "& .MuiMenu-list": {
        padding: 4,
        maxHeight: 280,
      },
    },
    menuItemProps: {
      sx: {
        width: "100%",
        fontSize: "14px",
        padding: "2px 4px",
        borderRadius: "4px",
        color: "#000",
        "& svg": {
          marginRight: "8px",
          filter: "invert(1)",
        },
        "&:hover": {
          color: "#ffffff",
          background: "#FFF",
        },
        "@media (max-width: 767px)": {
          height: "auto",
          minHeight: "32px",
        },
      },
    },
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=6000-186681&t=o2z1XhZ3yrBk16Ym-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=6000-186681&t=o2z1XhZ3yrBk16Ym-4",
      },
    ],
  },
};

export const AcountDropdown: StoryType = {
  args: {
    anchorElement: (
      <Button
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
          },
          "& .MuiButton-endIcon": {
            color: "black",
          },
        }}
      >
        Select an option
      </Button>
    ),
    items: [
      {
        label: "Profile",
        icon: <AccountCircleIcon />,
        action: () => console.log("Profile clicked"),
      },
      {
        label: "Settings",
        icon: <SettingsIcon />,
        action: () => console.log("Settings clicked"),
      },
      { divider: true },
      {
        label: "Logout",
        icon: <LogoutIcon />,
        action: () => console.log("Logout clicked"),
      },
    ],
    elevation: 0,
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    autoFocus: false,
    sx: {
      "& .MuiPaper-root": {
        width: 200,
        borderRadius: "4px",
        background: "#fff",
        border: `1px solid ${"#DFE3E5"}`,
        "&::-webkit-scrollbar": {
          width: 5,
          borderRadius: "2",
          background: "transparent",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "2",
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "2",
          background: "#000",
        },
      },
      "& .MuiMenu-list": {
        padding: 4,
        maxHeight: 280,
      },
    },
    menuItemProps: {
      sx: {
        width: "100%",
        fontSize: "14px",
        padding: "2px 4px",
        borderRadius: "4px",
        color: "#000",
        "& svg": {
          marginRight: "8px",
          filter: "invert(1)",
        },
        "&:hover": {
          color: "#ffffff",
          background: "#FFF",
        },
        "@media (max-width: 767px)": {
          height: "auto",
          minHeight: "32px",
        },
      },
    },
  },
};
