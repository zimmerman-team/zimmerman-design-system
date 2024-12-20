/** @jsxImportSource @emotion/react */

import React from "react";
import IconButton from "@mui/material/IconButton";
import { radiusSize } from "./const";
import { IconButtonProps } from "./interface";
/**
 * IconButton component props
 */
export default function ZDSIconButton(props: Readonly<IconButtonProps>) {
  const {
    gap,
    size,
    label,
    color,
    padding,
    onClick,
    fontSize,
    fontFamily,
    width,
    height,
    borderRadius,
    boxShadow,
    marginRight,
    textAlign,
    children,
    background,
    ...otherProps // HTML5 button attributes
  } = props;

  /**
   * Return the IconButton component
   */
  return (
    <IconButton
      {...otherProps}
      onClick={onClick}
      aria-label={props.ariaLabel}
      style={{ textAlign: textAlign }}
      data-cy={props.datacy}
      children={props.children}
      sx={{
        display: "flex",
        outline: "none",
        gap: gap ?? "0px",
        whiteSpace: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        fontSize: fontSize ?? "14px",
        padding: padding ?? "7px 24px",
        borderRadius: radiusSize[borderRadius],
        color: color ?? "black",
        fontFamily: fontFamily ?? '"Inter", sans-serif',
        background: background ?? "transparent",
        boxShadow: boxShadow,
        ":hover": {
          cursor: "pointer",
        },
      }}
    ></IconButton>
  );
}
