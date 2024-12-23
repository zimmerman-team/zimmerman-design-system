/** @jsxImportSource @emotion/react */
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { SxProps } from "@mui/material";
import { colors } from "theme";
import Divider from "@mui/material/Divider";
import MenuItemProps from "./interface";
import { DropdownProps } from "./interface";

export default function MyDropdown(props: Readonly<DropdownProps>) {
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
                  if (item.action) {
                    item.action();
                  }
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
                if (item.action) {
                  item.action();
                }
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
