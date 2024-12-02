/** @jsxImportSource @emotion/react */
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu, { MenuProps as MuiMenuProps } from "@mui/material/Menu";
import { SxProps } from "@mui/material";
import { colors } from "../../../theme";
import Divider from "@mui/material/Divider";

// MenuItemProps
interface MenuItemProps {
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

type HorizontalAlignment = "left" | "right" | "center";
type VerticalAlignment = "top" | "center" | "bottom";
// Dropdown Menu Props
interface DropdownProps extends MuiMenuProps {
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

export default function MuiMenu(props: Readonly<DropdownProps>) {
  const {
    id,
    anchorElement,
    onClose,
    items = [],
    elevation,
    transformOrigin,
    anchorOrigin,
    autoFocus,
    keepMounted,
    sx,
    menuItemProps,
    open,
    selected,
    ...otherProps
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Generates styles for menu items including hover states and icons
   * @param item Individual menu item props
   * @returns Combined styles object with defaults and overrides
   */
  const getMenuItemStyles = (item: MenuItemProps) => ({
    height: menuItemProps?.sx?.height ?? "40px",
    fontSize: menuItemProps?.sx?.fontSize ?? "16px",
    padding: menuItemProps?.sx?.padding ?? "4px 12px",
    borderRadius: menuItemProps?.sx?.borderRadius ?? "8px",
    color: menuItemProps?.sx?.color ?? colors.secondary.midnightBlue,
    "&:hover": {
      background:
        menuItemProps?.sx?.["&:hover"]?.background ??
        colors.secondary.blueGrayDark,
    },
    "> a": {
      width: menuItemProps?.sx?.["> a"]?.width ?? "100%",
      textDecoration: menuItemProps?.sx?.["> a"]?.textDecoration ?? "none",
    },
    "&.MuiMenuItem-divider": {
      padding: menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.padding ?? 0,
      height: menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.height ?? "1px",
      margin: menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.margin ?? "12px 0",
      boxShadow:
        menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.boxShadow ?? "none",
      pointerEvents:
        menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.pointerEvents ?? "none",
      backgroundColor:
        menuItemProps?.sx?.["&.MuiMenuItem-divider"]?.backgroundColor ??
        colors.secondary.iconGray,
    },
    "&.Mui-selected": {
      fontWeight: menuItemProps?.sx?.["&.Mui-selected"]?.fontWeight ?? "700",
      background:
        menuItemProps?.sx?.["&.Mui-selected"]?.background ??
        colors.primary.white,
      color: menuItemProps?.sx?.["&.Mui-selected"]?.color,
    },
    "& svg": {
      width: menuItemProps?.sx?.["& svg"]?.width ?? "20px",
      height: menuItemProps?.sx?.["& svg"]?.height ?? "20px",
      fill: menuItemProps?.sx?.["& svg"]?.fill ?? "currentColor",
      marginRight: menuItemProps?.sx?.["& svg"]?.marginRight ?? "0",
      color: menuItemProps?.sx?.["& svg"]?.color ?? colors.secondary.iconGray,
    },
    ...item.sx, // Allow individual item overrides
  });

  return (
    <>
      {/* Anchor Element Wrapper */}
      <div onClick={handleClick}>{anchorElement}</div>

      {/* Dropdown Menu */}
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={elevation}
        transformOrigin={transformOrigin}
        autoFocus={autoFocus}
        keepMounted={keepMounted}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: props.sx?.["& .MuiPaper-root"]?.borderRadius,
            background: props.sx?.["& .MuiPaper-root"]?.background,
            border: props.sx?.["& .MuiPaper-root"]?.border,
            "&::-webkit-scrollbar": {
              width:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar"]?.width,
              borderRadius:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar"]
                  ?.borderRadius,
              background:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar"]
                  ?.background,
            },
            "&::-webkit-scrollbar-track": {
              borderRadius:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar-track"]
                  ?.borderRadius,
              background:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar-track"]
                  ?.background,
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar-thumb"]
                  ?.borderRadius,
              background:
                props.sx?.["& .MuiPaper-root"]?.["&::-webkit-scrollbar-thumb"]
                  ?.background,
            },
          },
          "& .MuiMenu-list": {
            padding: props.sx?.["& .MuiMenu-list"]?.padding,
            maxHeight: props.sx?.["& .MuiMenu-list"]?.maxHeight,
            width: props.sx?.["& .MuiMenu-list"]?.width,
          },
          "@media (max-width: 768px)": {
            display: props.sx?.["@media (max-width: 768px)"]?.display,
          },
          ...sx,
        }}
        {...otherProps}
      >
        {items.map((item, index) => {
          if (item.divider) {
            return (
              <Divider
                key={`divider-${index}`}
                sx={{
                  backgroundColor: colors.secondary.iconGray,
                  margin: "8px 0",
                }}
              />
            );
          }
          if (item.icon !== undefined) {
            return (
              <MenuItem
                key={index}
                selected={selected === item.label}
                onClick={() => {
                  if (item.action) item.action();
                  handleClose();
                }}
                divider={item.divider}
                {...menuItemProps}
                sx={getMenuItemStyles(item)}
              >
                {item.icon}
                {item.link ? <a href={item.link}>{item.label}</a> : item.label}
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={index}
              selected={selected === item.label}
              onClick={() => {
                if (item.action) item.action();
                handleClose();
              }}
              divider={item.divider}
              {...menuItemProps}
              sx={getMenuItemStyles(item)}
            >
              {item.link ? <a href={item.link}>{item.label}</a> : item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
