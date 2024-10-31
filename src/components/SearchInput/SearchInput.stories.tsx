import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// import SearchIcon from '@mui/icons-material/Search';
import { MySearchInput } from './SearchInput';
import { ReactComponent as ExplorerSearchIcon } from "../../assets/vectors/ExplorerSearchIcon.svg";
import  colors  from "../../theme/colors";
import { Box } from '@mui/material';
import { typography } from '@mui/system';


const meta = {
  title: 'Example/SearchInput',
  component: MySearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MySearchInput>;

export default meta;
type Story = StoryObj<typeof MySearchInput>;

// Basic search input
export const Default: Story = {
  args: {
    placeholder: 'Search...',
    width: '200px',
  },
};

// AIDA search input
export const AIDASearchInput: Story = {
  args: {
    placeholder: 'Search',
    startAdornment: <ExplorerSearchIcon />,
    showBorder: true,
    gap: '4px',
    display: 'flex',
    alignItems: 'center',
    background: colors.secondary.disableButton, 
    padding: '4px 8px',
    borderRadius: '5px',
    width: '100%',
    inputBorder: 'none',
    inputWidth: '255px',
    inputOutline: 'none',
    inputBackground: 'transparent',
    inputLineHeight: '20px',
    inputFontSize: '14px',
    inputColor: colors.secondary.grayText,
    inputPlaceholderFontSize: colors.secondary.grayText,
  },
};

// Openaid search input
export const OpenaidSearchInput: Story = {
  args:{
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
    placeholder: 'Search',
    inputFontSize: 16,
    inputBorderRadius: 30,
    inputColor: colors.primary.blue,
    inputBackground: "rgba(227, 227, 227, 0.5)",
    inputBoxShadow: "0px 2px 3px 0px rgba(97, 97, 97, 0.20) inset",
    inputOpacity: 1,
    inputWidth:"600px",
    inputpadding: "6px 40px 6px 22px",    
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
    placeholder: 'E.g Kenya',
    display: 'flex',
    padding: '8px 20px',
    position: 'relative',
    borderRadius: '8px',
    background: "#F1F3F4",
    width: '100%',
    inputWidth: '100%',
    inputFontSize: '14px',
    inputOutline: 'none',
    inputFontWeight: 400,
    inputBorder: 'none',
    inputBackground: "#F1F3F4",
    inputColor: colors.primary.black,
  },
};
