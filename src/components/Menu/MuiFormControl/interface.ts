import { SxProps } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

export default interface FormControlProps {
  fullwidth?: boolean;
  sx?: SxProps;
  variant?: string; //outlined & standard
  height?: string;
  width?: string;
  fontweight?: string;
  padding?: string;
  borderColor?: string;
  fontWeight?: string;
}

export interface SelectFieldProps extends FormControlProps {
  id: string;
  value: string | string[];
  name?: string;
  multiple?: boolean;
  IconComponent?: React.ElementType;
  labelId?: string;
  variant?: "outlined" | "standard";
  onChange?: (event: SelectChangeEvent) => void;
  options: { value: string; label: string | React.ReactNode }[];
  label?: string;
  width?: string;
  placeholder?: string;
}
