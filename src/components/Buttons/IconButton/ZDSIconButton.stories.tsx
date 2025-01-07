import { colors } from "theme";
import { Icon } from "@mui/material";
import { fn } from "@storybook/test";
import IconButton from "./ZDSIconButton";
import Share from "@mui/icons-material/Share";
import IconSearch from "@mui/icons-material/Search";
import type { Meta, StoryObj } from "@storybook/react";
import MenuRounded from "@mui/icons-material/MenuRounded";
import CloudDownload from "@mui/icons-material/CloudDownload";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
/**
 * Storybook metadata for a button with just an icon
 */
const meta = {
  title: "Example/Button/Single Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
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
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
      },
    ],
  },
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
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7295-264691&t=jo15UJTsJr465OD6-4",
      },
    ],
  },
};

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
    children: (
      <Icon
        component={LanguageRounded}
        sx={{
          width: "30px",
          height: "30px",
        }}
      />
    ),
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257269&t=uvs9wD4RYJITKMF3-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257269&t=uvs9wD4RYJITKMF3-4",
      },
    ],
  },
};

/**
 * OpenAid Menu Icon Button
 */
export const OpenAidMenuButton: Story = {
  args: {
    width: "34px",
    height: "34px",
    padding: "5px",
    borderRadius: "circle",
    border: colors.primary.blue,
    boxShadow: colors.shadows.section,
    background: colors.primary.white,
    color: colors.primary.blue,
    marginRight: "0px",
    onClick: fn(),
    children: (
      <Icon
        component={MenuRounded}
        sx={{
          width: "30px",
          height: "30px",
        }}
      />
    ),
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257269&t=uvs9wD4RYJITKMF3-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=7038-257269&t=uvs9wD4RYJITKMF3-4",
      },
    ],
  },
};
/**
 * Data Explorer Search Icon Button
 */
export const DataExplorerSearchButton: Story = {
  args: {
    datacy: "header-search-btn",
    onClick: fn(),
    padding: "0",
    marginLeft: "10px",
    background: colors.primary.black,
    color: colors.primary.white,
    borderRadius: "50%",
    children: (
      <IconSearch
        sx={{
          "> svg": {
            transform: "scale(0.7)",
            color: colors.primary.white,
          },
        }}
      />
    ),
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=1889-63700&t=o2z1XhZ3yrBk16Ym-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=1889-63700&t=o2z1XhZ3yrBk16Ym-4",
      },
    ],
  },
};
