import type { Meta, StoryObj } from "@storybook/react";
import React, { lazy } from "react";
import { fn, userEvent, within, expect } from "@storybook/test";
import Button from "./button";
import Share from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";
// import HeaderSignInViewGoogle from '../../svgs/HeaderSignInViewGoogle.svg';
// import { ReactComponent as GoogleIcon } from "./HeaderSignInViewGoogle.svg";
// import GoogleIcon from "@mui/icons-material/Google";
import { ReactComponent as GoogleIcon } from "../../assets/vectors/HeaderSignInViewGoogle.svg";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from '@mui/icons-material/ExpandLess';
import colors from '../../theme/colors';
import { LinkedIn, Microsoft } from "@mui/icons-material";
import Add from "@mui/icons-material/Add";
import {useState} from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
// import GoogleIcon from "./GoogleIcon.tsx";



/**
 * Storybook metadata for the Button component
 */
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * AIDA Explorer Button
 */
export const AIDAExplorerButton: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=1558-371876&t=HZkq8tIk68Zpdhux-4",
    },
  },
  args:{
    variant: "contained",
    background :"#3B6CD3",
    icon: {
      component: <ArrowForward />,
      position: "right",
    },
    label: "AIDA Explorer",
    color: colors.primary.white,
    padding: "10px 15px",
    width: "max-content",
    fontSize: "18px",
    lineHeight: "normal",
  },
}

/**
 * Used for the Aida Header Product Button
 * @param Button args
 * @returns Button with updated icon state
 */
const ToggleAidaIconButton = ({ ...args }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev); 
  };

  return (
    <Button
      {...args}
      onClick={handleClick}
      borderColor={expanded ? colors.secondary.iconGray : "transparent"}
      background={expanded ? colors.secondary.disableButton : colors.primary.white}
      icon= {{
        component: expanded ? <ExpandLess /> : <ExpandMore />,
        position: "right",
      }}
    >
      {args.label}
    </Button>
  );
};

/**
 * AIDA Header Product Button
 */
export const AIDAHeaderProductButton: Story = {
  render: (args) => <ToggleAidaIconButton {...args} />, 
  args: {
    label: "Product",
    fontSize: "14px",
    fontWeight: "700",
    color: colors.text.title,
    background: colors.primary.white,
    border: "1px solid transparent",
    height: "32px",
    css: {
      "&:hover": {
        backgroundColor:"#EBEBEB",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2969-370244&t=UWDlwi3KDi9FEr1G-4",
    },
  },
};

/**
 * AIDA Sign In Button Google
 */
export const AIDASignInGoogleButton: Story = {

  args :{
    gap: "10px",
    width: "300px", // should be 190 
    height: "32px",
    display: "flex",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "5px",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    color: "#FFFFFF",
    background: "#3B6CD3",
    css: {
      "&:hover": {
        backgroundColor: colors.shades.blue[400],
      },
    },
    icon: {
      component: <GoogleIcon />,
      position: "left",
    },
    onClick: fn(),
    label: "Sign in with Google",

  }
}

/**
 * AIDA Sign In Button LinkedIn
 */
export const AIDASignInLinkedINButton: Story = {
  args :{
    gap: "10px",
    width: "300px",
    height: "32px",
    display: "flex",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "5px",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    color: colors.primary.white,
    background: "#3B6CD3",
    // ":hover": {
    //   background: colors.shades.blue[400],
    // },
    icon: {
      component: <LinkedIn />,
      position: "left",
    },
    onClick: fn(),
    label: "Sign in with LinkedIn",

  }
}

/**
 * AIDA Sign In Button Facebook
 */
export const AIDASignInFacebookButton: Story = {
  args :{
    gap: "10px",
    width: "300px",
    height: "32px",
    display: "flex",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "5px",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    color: colors.primary.white,
    background: "#3B6CD3",
    // ":hover": {
    //   background: colors.shades.blue[400],
    // },
    icon: {
      component: <Microsoft />,
      position: "left",
    },
    onClick: fn(),
    label: "Sign in with Microsoft",

  }
}

/**
 * AIDA Open Aid Add Filter Button
 */
export const OpenAidAddfilterButton: Story = {
  args:{
    color: "primary",
    background: colors.primary.blue,
    variant: "contained",
    right: "0",
    zIndex: "2",
    width: "133px",
    height: "35px",
    fontSize: "14px",
    fontWeight: "700",
    padding: "4px 8px",
    icon: {
      component: <Add />,
      position: "left",
    },
    position: "absolute",
    borderRadius: "26px",
    textTransform: "none",
    transition: "visibility 0.25s linear, opacity 0.25s linear",
    label: "Add filter",

    onClick: fn(),
  },
}
/**
 * AIDA Open Aid Year Display Button in a Graph
 */
export const OpenAidYearDisplayGraphButton: Story = {
  args: {
    height: "32px",
    fontSize: "14px",
    fontWeight: "400",
    padding: "7px 12px",
    borderRadius: "4px",
    textTransform: "none",
    border: "1px solid #DFE3E5",
    color: "#000",
    label: "2024-2025",
    background: "white",
    css: {
      "&:hover": {
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
      },
    },
  },
  render: (args) => {
    const [isClicked, setIsClicked] = React.useState(false);
    
    return (
      <Button
        {...args}
        border={isClicked ? "1px solid black" : "1px solid #DFE3E5"}
        color={isClicked ? "white" : "#000"}
        background={isClicked ? "black" : "white"}
        onClick={(e) => {
          setIsClicked(!isClicked);
          args.onClick?.(e);
        }}
      />
    );
  }
};

/**
 * AIDA LogOut Button
 */
export const AIDALogOutButton: Story = {
  args: {
    gap: "10px",
    height: "32px",
    display: "flex",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "5px",
    alignItems: "center",
    textTransform: "none",
    justifyContent: "center",
    color: colors.primary.white,
    background: colors.secondary.red,
    css: {
      "&:hover": {
        backgroundColor: colors.secondary.darkRed,
      },
    },
    icon: {
      component: <LogoutIcon />,
      position: "left",
    },
    onClick: fn(),
    label: "Log Out",
  },
};

