import { ButtonSize } from "./types";

// Define size configurations
export const sizeStyles: Record<
  ButtonSize,
  {
    padding: string;
    height: string;
    fontSize: string;
  }
> = {
  small: {
    padding: "4px 12px",
    height: "32px",
    fontSize: "14px",
  },
  medium: {
    padding: "8px 16px",
    height: "40px",
    fontSize: "16px",
  },
  large: {
    padding: "12px 24px",
    height: "48px",
    fontSize: "18px",
  },
};
