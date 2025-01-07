import { SxProps } from "@mui/material";
import { VerticalAlignment } from "./type";
import { HorizontalAlignment } from "./type";
import { MenuProps as MuiMenuProps } from "@mui/material/Menu";

// MenuItemProps
export default interface MenuItemProps {
  key?: string;
  label?: string;
  icon?: React.ReactNode;
  code?: string;
  link?: string;
  divider?: boolean;
  action?: () => void;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  sx?: SxProps;
}

// Dropdown Menu Props
export interface DropdownProps extends MuiMenuProps {
  id?: string;
  anchorElement: React.ReactNode;
  selected?: string;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  items?: MenuItemProps[];
  elevation?: number;
  transformOrigin?: {
    vertical: number | VerticalAlignment;
    horizontal: number | HorizontalAlignment;
  };
  anchorOrigin?: {
    vertical: number | VerticalAlignment;
    horizontal: number | HorizontalAlignment;
  };
  autoFocus?: boolean;
  keepMounted?: boolean;
  sx?: {
    "& .MuiPaper-root"?: {
      width?: number | string;
      borderRadius?: string;
      background?: string;
      border?: string;
      padding?: string;
      boxShadow?: string;
      "&::-webkit-scrollbar"?: {
        width?: number;
        borderRadius?: string;
        background?: string;
      };
      "&::-webkit-scrollbar-track"?: {
        borderRadius?: string;
        background?: string;
      };
      "&::-webkit-scrollbar-thumb"?: {
        borderRadius?: string;
        background?: string;
      };
    };
    "& .MuiMenu-list"?: {
      padding?: number;
      width?: string;
      maxHeight?: number;
    };
    "@media (max-width: 768px)"?: {
      display?: string;
    };
  };
  itemsSx?: SxProps;
  menuItemProps?: {
    sx?: {
      width?: string;
      height?: string;
      fontSize?: string;
      padding?: string;
      borderRadius?: string;
      color?: string;
      "&:hover"?: {
        color?: string;
        background?: string;
      };
      "& svg"?: {
        marginRight?: string;
        color?: string;
        width?: string;
        height?: string;
        fill?: string;
        filter?: string;
        gap?: string;
      };
      "> a"?: {
        width?: string;
        textDecoration?: string;
      };
      "&.MuiMenuItem-divider"?: {
        padding?: number;
        height?: string;
        margin?: string;
        boxShadow?: string;
        pointerEvents?: string;
        backgroundColor?: string;
      };
      "&.Mui-selected"?: {
        fontWeight?: string;
        background?: string;
        color?: string;
      };
      "@media (max-width: 767px)"?: {
        height?: string;
        minHeight?: string;
      };
    };
  };
}
