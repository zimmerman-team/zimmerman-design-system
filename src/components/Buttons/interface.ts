import { ElementType } from "react";
import { ButtonSize } from "./types";
/**
 * Button component props
 */
export default interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gap?: string;
  label?: string;
  component?: ElementType;
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
  textAlign?: string;
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
  size?: ButtonSize;
}
