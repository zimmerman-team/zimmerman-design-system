import { SxProps } from "@mui/material";
import { LinkProps } from "@mui/material";
import { TypographyProps } from "@mui/material";

export interface BreadCrumbsProps {
  sx?: SxProps;
  items: Array<{
    title: string;
    link?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    linkProps?: SxProps & LinkProps;
    typographyProps?: TypographyProps & SxProps;
  }>;
  separator?: React.ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  expandText?: string;
}
