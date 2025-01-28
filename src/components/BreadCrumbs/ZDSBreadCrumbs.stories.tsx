import React from "react";
import { colors } from "theme";
import ZDSBreadCrumbs from "./ZDSBreadCrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import type { Meta, StoryObj } from "@storybook/react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { withRouter } from "storybook-addon-remix-react-router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ReactComponent as ChevronIcon } from "assets/AIDA/vectors/BreadcrumbsChevron.svg";

const meta: Meta<typeof ZDSBreadCrumbs> = {
  title: "Example/BreadCrumbs",
  component: ZDSBreadCrumbs,
  parameters: {
    layout: "fullscreen",
    decorators: [withRouter],
  },
  tags: ["autodocs"],
  argTypes: {
    sx: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;
type StoryType = StoryObj<typeof meta>;

export const AidaBreadCrumbs: StoryType = {
  args: {
    items: [
      {
        title: "Home",
        link: "/",
        linkProps: { sx: { color: "black", textDecoration: "none" } },
        typographyProps: { variant: "h6", fontSize: "12px", fontWeight: "400" },
      },
      {
        title: "Page 1",
        link: "/page1",
        linkProps: { sx: { color: "black", textDecoration: "none" } },
        typographyProps: { variant: "h6", fontSize: "12px", fontWeight: "400" },
      },
      {
        title: "Page 2",
        link: "/page2",
        linkProps: { sx: { color: "black" } },
        typographyProps: {
          textDecoration: "underline",
          variant: "h6",
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    ],
    separator: <ChevronIcon />,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=292-9229",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=292-9229",
      },
    ],
  },
};

export const BasicBreadcrumbs: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          sx: { color: "inherit" },
          underline: "hover",
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: { sx: { color: "inherit" }, underline: "hover" },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Breadcrumbs",
        typographyProps: { sx: { color: "text.primary" }, variant: "body1" },
      },
    ],
    separator: "/",
  },
};

export const ActiveLastCrumb: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          sx: { color: "inherit" },
          underline: "hover",
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: { sx: { color: "inherit" }, underline: "hover" },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Breadcrumbs",
        link: "/material-ui/react-breadcrumbs/",
        linkProps: {
          sx: { color: "text.primary" },
          underline: "hover",
          "aria-current": "page",
        },
        typographyProps: { variant: "body1" },
      },
    ],
    separator: "/",
  },
};

export const SeparatorArrow: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          sx: { color: "inherit" },
          underline: "hover",
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: { sx: { color: "inherit" }, underline: "hover" },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Breadcrumbs",
        typographyProps: { sx: { color: "text.primary" }, variant: "body1" },
      },
    ],
    separator: "›",
  },
};

export const SeparatorDash: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          sx: { color: "inherit" },
          underline: "hover",
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: { sx: { color: "inherit" }, underline: "hover" },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Breadcrumbs",
        typographyProps: { sx: { color: "text.primary" }, variant: "body1" },
      },
    ],
    separator: "-",
  },
};

export const SeparatorIcon: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          sx: { color: "inherit" },
          underline: "hover",
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: { sx: { color: "inherit" }, underline: "hover" },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Breadcrumbs",
        typographyProps: { sx: { color: "text.primary" }, variant: "body1" },
      },
    ],
    separator: <NavigateNextIcon fontSize="small" />,
  },
};

export const BreadcrumbsWithIcons: StoryType = {
  args: {
    items: [
      {
        title: "MUI",
        link: "/",
        linkProps: {
          underline: "hover",
          sx: { display: "flex", alignItems: "center", color: "inherit" },
        },
        typographyProps: { variant: "body1" },
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      },
      {
        title: "Core",
        link: "/material-ui/getting-started/installation/",
        linkProps: {
          underline: "hover",
          sx: { display: "flex", alignItems: "center", color: "inherit" },
        },
        typographyProps: { variant: "body1" },
        icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      },
      {
        title: "Breadcrumb",
        typographyProps: {
          sx: { color: "text.primary", display: "flex", alignItems: "center" },
          variant: "body1",
        },
        icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      },
    ],
    separator: "/",
  },
};

export const MaxItemsBreadcrumbs: StoryType = {
  args: {
    items: [
      {
        title: "Home",
        link: "#",
        linkProps: {
          underline: "hover",
          sx: { color: "inherit" },
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Catalog",
        link: "#",
        linkProps: {
          underline: "hover",
          sx: { color: "inherit" },
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Accessories",
        link: "#",
        linkProps: {
          underline: "hover",
          sx: { color: "inherit" },
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "New Collection",
        link: "#",
        linkProps: {
          underline: "hover",
          sx: { color: "inherit" },
        },
        typographyProps: { variant: "body1" },
      },
      {
        title: "Belts",
        typographyProps: { sx: { color: "text.primary" }, variant: "body1" },
      },
    ],
    maxItems: 2,
    separator: "/",
  },
};
