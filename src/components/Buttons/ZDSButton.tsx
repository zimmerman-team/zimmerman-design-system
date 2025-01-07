/** @jsxImportSource @emotion/react */

import { sizeStyles } from "./const";
import ButtonProps from "./interface";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";

/**
 * Button component props
 */
export default function ZDSButton(props: Readonly<ButtonProps>) {
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
    size,
    ...otherProps
  } = props;

  const sizeStyle = sizeStyles[size ?? "medium"];
  /**MUI Button component with its respective components */
  return (
    <Button
      {...otherProps}
      onClick={onClick}
      variant="contained"
      aria-label={props.ariaLabel}
      startIcon={icon?.position === "left" ? icon.component : undefined}
      endIcon={icon?.position === "right" ? icon.component : undefined}
      component={to ? Link : "button"}
      css={css}
      to={to}
      sx={
        {
          gap: gap ?? "0px",
          alignItems: "center",
          display: display ?? "flex",
          width: width,
          lineHeight: lineHeight,
          fontSize: fontSize ?? sizeStyle.fontSize,
          padding: padding ?? sizeStyle.padding,
          fontWeight: "700",
          borderRadius: borderRadius ?? "5px",
          alignContent: alignItems,
          textTransform: textTransform ?? "none",
          justifyContent: justifyContent,
          color: color,
          right: right,
          zIndex: zIndex,
          position: position,
          transition: "all 0.3s ease",
          opacity: opacity,
          visibility: visibility,
          background: background,
          border: border,
          textAlign: textAlign,
          height: height ?? sizeStyle.height,
          "&:hover": css?.["&:hover"],
          "> .MuiButton-icon": {
            margin: 0,
          },
          cursor: "pointer",
          expandable: props.expandable,
          borderColor: borderColor,
        } as SxProps<Theme>
      }
    >
      {label}
    </Button>
  );
}
