/** @jsxImportSource @emotion/react */

import React from "react";
import IconButton from '@mui/material/IconButton';

/**
 * IconButton component props
 */
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gap?: string;
  label?: string;
  color?: string;
  padding?: string;
  fontSize?: string;
  fontFamily?: string;
  height?: string;
  size?: "small" | "medium" | "large"|string;
  marginRight?: string;
  marginLeft?: string;
  ariaLabel?: string;
  textAlign?: "center" | "left" | "right";
  children?: React.ReactNode;
  shareIconType ?: "ShareOutlinedIcon";
  downloadIconType?: "CloudDownloadIcon" | "FileDownloadIcon"| "DownloadForOfflineIcon"| "CloudDownloadOutlinedIcon"|"DownloadForOfflineOutlinedIcon"| "CloudDownloadTwoToneIcon"| "DownloadForOfflineTwoToneIcon"| "DownloadingTwoToneIcon"| "DownloadOutlinedIcon";
  infoIconType?: "InfoOutlinedIcon"|"InfoIcon"|"InfoRoundedIcon"| "InfoTwoToneIcon"|"InfoSharpIcon";
  width?: string;
  borderRadius: "rounded"|"sharp"|"circle"|string;
  boxShadow?: string;
  datacy?: string;
  border?: string;
  background?: string;
}

/**
 * IconButton component props
 */
export default function MyIconButton(props: Readonly<IconButtonProps>) {
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
 * Predefined radius sizes as options for the border radius
 */  
const radiusSize: { [key: string]: string } = {
    rounded: "30px",
    sharp: "5px",
    circle: "50%",
};
 
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
        color:color ?? "black",
        fontFamily: fontFamily ?? '"Inter", sans-serif',
        background: background ??"transparent",
        boxShadow: boxShadow,
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {children}
    </IconButton>
  );
}
