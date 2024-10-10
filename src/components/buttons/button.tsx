/** @jsxImportSource @emotion/react */

import React, { ElementType } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
/**
 * Button component props
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gap?: string;
  label?: string;
  component?:ElementType;
  expandable?: boolean;
  link?: string;
  display?: string;
  borderRadius?: string;
  textTransform?: string;
  opacity?: string;
  visibility?: string;
  ariaLabel?: string;
  alignItems?: string;
  variant?: "contained" | "outlined" | "text";
  background?: string; 
  icon?: {
    component: React.ReactNode;
    position: "left" | "right";
  };
  color?: string;
  padding?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  to?: string;
  border?: string;
  height?: string;
  justifyContent?: string;
  right?: string;
  zIndex?: string;
  position?: string;
  transition?: string;
  textAlign?: string ;
  css?: {
    "&:hover"?: {
      backgroundColor?: string;
      color?: string;
      cursor?: string;
      fontWeight?: string;
      background?: string;
    };
  };
  borderColor?: string;
}

/**
 * Button component props
 */
export default function MyButton(props: Readonly<ButtonProps>) {
  const {
    gap,
    display,
    icon,
    label,
    color,
    component,
    padding,
    onClick,
    fontSize,
    width,
    height,
    variant,
    background,
    to,
    right,
    zIndex,
    alignItems,
    lineHeight,
    border,
    borderRadius,
    textTransform,
    justifyContent,
    position,
    opacity,
    visibility,
    fontWeight,
    css,
    borderColor,
    textAlign,
    ...otherProps
  } = props;

  /**MUI Button component with its respective components */
  return (
    <Button
      {...otherProps}
      onClick={onClick}
      variant="contained"
      aria-label={props.ariaLabel}
      startIcon={icon?.position === "left" ? icon.component : undefined}
      endIcon={icon?.position === "right" ? icon.component : undefined}
      component={to ? Link : 'button'}
      css={css}
      to={to}
      sx={{
        gap: gap ?? "0px",
        alignItems: "center",
        display: display ?? "flex",
        width: width,
        lineHeight: lineHeight,
        fontSize: fontSize ?? "14px",
        padding: padding ?? "7px 24px",
        fontWeight: "700",
        borderRadius:borderRadius ?? "5px",
        alignContent: alignItems,
        textTransform: textTransform ?? "none",
        justifyContent:justifyContent,
        color:color,
        right: right,
        zIndex: zIndex,
        position: position,
        transition: "all 0.3s ease",
        opacity: opacity,
        visibility: visibility,
        background: background,
        border: border,
        textAlign: textAlign,
        height:height,
       "&:hover": css?.["&:hover"],
       "> .MuiButton-icon": {
          margin: 0,
        },
        cursor: "pointer",
        expandable: props.expandable, 
        borderColor: borderColor,
      } as SxProps<Theme>}
    >
      {label}
    </Button>
  );
}
