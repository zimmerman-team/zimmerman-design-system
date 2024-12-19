import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { mySearchInput } from "./mySearchInput";
import { ReactComponent as ExplorerSearchIcon } from "../../assets/vectors/ExplorerSearchIcon.svg";
import colors from "../../theme/colorsSeaerchInput";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const meta = {
  title: "Example/Search  Input",
  component: mySearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof mySearchInput>;

export default meta;
type Story = StoryObj<typeof mySearchInput>;

// AIDA search input
export const AIDASearchInput: Story = {
  args: {
    placeholder: "Search",
    startAdornment: <ExplorerSearchIcon />,
    showBorder: true,
    gap: "4px",
    display: "flex",
    alignItems: "center",
    background: colors.secondary.disableButton,
    padding: "4px 8px",
    borderRadius: "5px",
    width: "100%",
    inputBorder: "none",
    inputWidth: "255px",
    inputOutline: "none",
    inputBackground: "transparent",
    inputLineHeight: "20px",
    inputFontSize: "14px",
    inputColor: colors.secondary.grayText,
    inputPlaceholderFontSize: colors.secondary.grayText,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=1545-368913&t=NBjQ0fD59Wjtejp8-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=1545-368913&t=NBjQ0fD59Wjtejp8-4",
      },
    ],
  },
};

// Openaid search input
export const OpenaidSearchInput: Story = {
  args: {
    endAdornment: (
      <Box
        sx={{
          right: "8px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          backgroundColor: colors.secondary.grayLight,
          boxShadow: "0px 2px 3px 0px rgba(97, 97, 97, 0.20) inset",
        }}
      >
        <ExplorerSearchIcon
          style={{
            fill: colors.primary.white,
            transform: "rotate(90deg)",
          }}
        />
      </Box>
    ),
    showBorder: false,
    placeholder: "Search",
    inputFontSize: 16,
    inputBorderRadius: 30,
    inputColor: colors.primary.blue,
    inputBackground: "rgba(227, 227, 227, 0.5)",
    inputBoxShadow: "0px 2px 3px 0px rgba(97, 97, 97, 0.20) inset",
    inputOpacity: 1,
    inputWidth: "600px",
    inputpadding: "6px 40px 6px 22px",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257366&t=bv9BC7T69S3II3az-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257366&t=bv9BC7T69S3II3az-4",
      },
    ],
  },
};

// Data explorer search input
export const DataExplorerInput: Story = {
  args: {
    endAdornment: (
      <ExplorerSearchIcon
        style={{
          color: colors.primary.black,
          transform: "rotate(90deg)",
        }}
      />
    ),
    placeholder: "E.g Kenya",
    display: "flex",
    padding: "8px 20px",
    position: "relative",
    borderRadius: "8px",
    background: "#F1F3F4",
    width: "100%",
    inputWidth: "100%",
    inputFontSize: "14px",
    inputOutline: "none",
    inputFontWeight: 400,
    inputBorder: "none",
    inputBackground: "#F1F3F4",
    inputColor: colors.primary.black,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=4948-263242&t=NOLx3NFpHxY7gK5x-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=4948-263242&t=NOLx3NFpHxY7gK5x-4",
      },
    ],
  },
};

// Search Input with both icons
export const WithBothIcons: StoryObj = {
  args: {
    placeholder: "Search with both icons",
    startAdornment: <SearchIcon />,
    endAdornment: (
      <IconButton
        size="small"
        aria-label="clear search"
        onClick={() => console.log("clear search")}
        sx={{
          padding: "4px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ClearIcon />
      </IconButton>
    ),
  },
};
