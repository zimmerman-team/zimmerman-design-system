/**
 * IconButton component props
 */
export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gap?: string;
  label?: string;
  color?: string;
  padding?: string;
  fontSize?: string;
  fontFamily?: string;
  height?: string;
  size?: "small" | "medium" | "large" | string;
  marginRight?: string;
  marginLeft?: string;
  ariaLabel?: string;
  textAlign?: "center" | "left" | "right";
  children?: React.ReactNode;
  width?: string;
  borderRadius: "rounded" | "sharp" | "circle" | string;
  boxShadow?: string;
  datacy?: string;
  border?: string;
  background?: string;
}
