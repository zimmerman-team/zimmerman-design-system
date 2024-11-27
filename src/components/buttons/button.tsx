/** @jsxImportSource @emotion/react */

import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gap?: string;
  label: string;
  color?: string;
  filled: boolean;
  padding?: string;
  fontSize?: string;
  fontFamily?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  radius: "rounded" | "sharp" | "circle";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  icon?: {
    component: React.ReactNode;
    position: "left" | "right";
  };
}

export default function MyButton(props: Readonly<ButtonProps>) {
  const {
    gap,
    size,
    icon,
    label,
    color,
    filled,
    radius,
    padding,
    onClick,
    fontSize,
    fontFamily,
    textTransform,
    backgroundColor,
    ...otherProps // HTML5 button attributes
  } = props;

  const radiusSize = {
    rounded: "30px",
    sharp: "5px",
    circle: "50%",
  };
  const buttonWidth = {
    small: "100px",
    medium: "200px",
    large: "300px",
  };
  const buttonHeight = {
    small: "30px",
    medium: "40px",
    large: "50px",
  };

  return (
    <Button
      {...otherProps}
      onClick={onClick}
      startIcon={icon && icon.position === "left" ? icon.component : undefined}
      endIcon={icon && icon.position === "right" ? icon.component : undefined}
      sx={{
        display: "flex",
        outline: "none",
        gap: gap ?? "5px",
        whiteSpace: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        width: buttonWidth[size!],
        height: buttonHeight[size!],
        fontSize: fontSize ?? "14px",
        padding: padding ?? "7px 24px",
        borderRadius: radiusSize[radius],
        color: filled ? color : backgroundColor,
        textTransform: textTransform ?? "lowercase",
        fontFamily: fontFamily ?? '"Inter", sans-serif',
        backgroundColor: filled ? backgroundColor : "transparent",
        border: !filled ? `1px solid ${backgroundColor}` : "none",
        flexDirection: icon?.position === "left" ? "row" : "row-reverse",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {label}
    </Button>
  );
}
