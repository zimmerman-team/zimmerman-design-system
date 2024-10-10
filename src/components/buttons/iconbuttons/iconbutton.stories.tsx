import type { Meta, StoryObj } from "@storybook/react";
import React, { lazy } from "react";
import { fn, userEvent, within, expect } from "@storybook/test";
import IconButton from "./iconbutton";
import { SxProps } from "@mui/system";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone';
import DownloadingTwoToneIcon from '@mui/icons-material/DownloadingTwoTone';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { Cloud } from "@mui/icons-material";
import Share from "@mui/icons-material/Share";
import { Icon } from "@mui/material";
import CloudDownload from "@mui/icons-material/CloudDownload";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";
import IconSearch from "@mui/icons-material/Search";
import colors from "../../../theme/colors";

// MUI Download Icons
const downloadIcons = {
  CloudDownloadIcon: <CloudDownloadIcon />,
  FileDownloadIcon: <FileDownloadIcon />,
  DownloadForOfflineIcon: <DownloadForOfflineIcon />,
  CloudDownloadOutlinedIcon: <CloudDownloadOutlinedIcon />,
  DownloadForOfflineOutlinedIcon: <DownloadForOfflineOutlinedIcon />,
  CloudDownloadTwoToneIcon: <CloudDownloadTwoToneIcon />,
  DownloadForOfflineTwoToneIcon: <DownloadForOfflineTwoToneIcon />,
  DownloadingTwoToneIcon: <DownloadingTwoToneIcon />,
  DownloadOutlinedIcon: <DownloadOutlinedIcon />,
};

// MUI Share Icons
const shareIcons = {
   ShareOutlinedIcon: <ShareOutlinedIcon />,
   ShareIcon: <Share />,
};

// MUI Info Icons 
const infoIcons = {
  InfoIcon: <InfoIcon />,
  InfoOutlinedIcon: <InfoOutlinedIcon />,
  InfoRoundedIcon: <InfoRoundedIcon />,
  InfoTwoToneIcon: <InfoTwoToneIcon />,
  InfoSharpIcon: <InfoSharpIcon/>,
};


/**
 * Storybook metadata for a button with just an icon 
 */
const meta = {
  title: "Example/Button/SingleIconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    downloadIconType: {
      options: ['CloudDownloadIcon', 'FileDownloadIcon','DownloadForOfflineIcon','CloudDownloadOutlinedIcon','DownloadForOfflineOutlinedIcon','CloudDownloadTwoToneIcon','DownloadForOfflineTwoToneIcon','DownloadingTwoToneIcon','DownloadOutlinedIcon'],
      control: {
        type: 'select',
      },
    },
    shareIconType: {
      options: ['ShareOutlinedIcon'],
      control: {
        type: 'select',
      },
    },
    infoIconType: {
      options: ['InfoOutlinedIcon','InfoIcon','InfoRoundedIcon','InfoTwoToneIcon','InfoSharpIcon'],
      control: {
        type: 'select',
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * OpenAid Share Icon Button
 */
export const OpenAidShareButton: Story = {
  args: {
    width: "34px",
    height: "34px",
    padding: "5px",
    borderRadius: "circle",
    background: colors.primary.white,
    color: colors.primary.blue,
    boxShadow: colors.shadows.section,
    marginRight: "0px",
    onClick: fn(),
    children: <Icon component={Share} />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
     
    },
  },
  render: (args) => <IconButton {...args} />,
};

/**
 * OpenAid Download Icon Button
 */
export const OpenAidDownloadButton: Story = {
  args: {
    width: "34px",
    height: "34px",
    padding: "5px",
    borderRadius: "circle",
    textAlign: "center",
    border: colors.primary.blue,
    boxShadow: colors.shadows.section,
    background: colors.primary.white,
    color: colors.primary.blue,
    marginRight: "0px",
    onClick: fn(),
    children: <Icon component={CloudDownload} />,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
     
    },
  },
  render: (args) => <IconButton {...args} />,
}

/**
 * OpenAid Select Language Icon Button
 */
export const OpenAidSelectLanguageButton: Story = {
   args: {
    width: "34px",
    height: "34px",
    padding: "5px",
    borderRadius: "circle",
    textAlign: "center",
    size: "medium",
    border: colors.primary.blue,
    boxShadow: colors.shadows.section,
    background: colors.primary.white,
    color: colors.primary.blue,
    marginRight: "0px",
    onClick: fn(),
    children: <Icon component={LanguageRounded} 
    sx={{
      width: "30px",
      height: "30px",
    }} />,
   }
  }
/**
 * OpenAid Menu Icon Button
 */  
export const  OpenAidMenuButton :Story={
    args: {
      width: "34px",
      height: "34px",
      padding: "5px",
      borderRadius: "circle",
      border:colors.primary.blue,
      boxShadow: colors.shadows.section,
      background: colors.primary.white,
      color: colors.primary.blue,
      marginRight: "0px",
      onClick: fn(),
      children: <Icon component={MenuRounded} 
      sx={{
        width: "30px",
        height: "30px",
      }} />,
    }
  }
/**
 * Data Explorer Search Icon Button
 */  
export const DataExplorerSearchButton: Story = {
    args:{
      datacy: "header-search-btn",
      onClick: fn(),
      padding: "0",
      marginLeft: "10px",
      background: colors.primary.black, 
      color: colors.primary.white,
      borderRadius: "50%", 
      children: <IconSearch sx={{
        "> svg": {
          transform: "scale(0.7)",
          color: colors.primary.white,
        },
      }} />,
    }
  } 
  
  
