import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
<<<<<<< Updated upstream:src/components/Buttons/ZDSButton.stories.tsx
import Button from "./ZDSButton";
import { ReactComponent as GoogleIcon } from "../../assets/AIDA/vectors/HeaderSignInViewGoogle.svg";
=======
import Button from "./myButton";
import { ReactComponent as GoogleIcon } from "assets/vectors/jsx/HeaderSignInViewGoogle.svg";
>>>>>>> Stashed changes:src/components/Buttons/myButton.stories.tsx
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import colors from "../../theme/colors";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Add } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

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
  args: {
    variant: "contained",
    background: "#3B6CD3",
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
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=1558-371876&t=HZkq8tIk68Zpdhux-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=1558-371876&t=HZkq8tIk68Zpdhux-4",
      },
    ],
  },
};

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
      background={
        expanded ? colors.secondary.disableButton : colors.primary.white
      }
      icon={{
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
        backgroundColor: "#EBEBEB",
      },
    },
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2969-370244&t=UWDlwi3KDi9FEr1G-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2969-370244&t=UWDlwi3KDi9FEr1G-4",
      },
    ],
  },
};

/**
 * AIDA Sign In Button Google
 */
export const AIDASignInGoogleButton: Story = {
  args: {
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
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=3050-19820&t=MRU2lCADUEXdtGMH-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=3050-19820&t=MRU2lCADUEXdtGMH-4",
      },
    ],
  },
};

/**
 * AIDA Open Aid Add Filter Button
 */
export const OpenAidAddfilterButton: Story = {
  args: {
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
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=8591-116512&t=uvs9wD4RYJITKMF3-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=8591-116512&t=uvs9wD4RYJITKMF3-4",
      },
    ],
  },
};
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
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=4949-269175&t=GTJU1KB97PfgiDTN-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=4949-269175&t=GTJU1KB97PfgiDTN-4",
      },
    ],
  },
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
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=1855-195604&t=C3CM89TvL7w7gKU1-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=1855-195604&t=C3CM89TvL7w7gKU1-4",
      },
    ],
  },
};

/**
 * Small size button
 */
export const SmallButton: Story = {
  args: {
    variant: "contained",
    size: "small",
    children: "Small Button",
    borderRadius: "6px",
    background: "colors.primary.white",
    label: "",
  },
};

/**
 * Medium size button
 */
export const MediumButton: Story = {
  args: {
    variant: "contained",
    size: "medium",
    children: "Small Button",
    borderRadius: "6px",
    background: "colors.primary.white",
    label: "",
  },
};

/**
 * Large size button
 */
export const LargeButton: Story = {
  args: {
    variant: "contained",
    size: "large",
    height: "48px",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "10px",
    background: "colors.primary.white",
    label: "",
  },
};

/**
 * Success  button
 */
export const SuccessButton: Story = {
  args: {
    variant: "contained",
    color: "#f8f8f8",
    label: "Success",
    background: "#2db300",
  },
};

/**
 * Error  button
 */
export const ErrorButton: Story = {
  args: {
    variant: "contained",
    color: "#f7f7f7",
    background: "#f20000",
    label: "Error",
  },
};

/**
 * Rounded pill button
 */
export const PillButton: Story = {
  args: {
    variant: "contained",
    icon: {
      component: <Share />,
      position: "left",
    },
    label: "",
    borderRadius: "24px",
    padding: "8px 24px",
    background: "#ffffff",
    color: "#230000",
  },
};
