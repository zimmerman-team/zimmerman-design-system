interface Boxprops {
  icon?: React.ReactNode;
  placeholder?: string;
  gap?: string;
  showBorder?: boolean;
  fullWidth?: boolean;
  value?: string;
  shape?: "rounded" | "sharp" | "circle";
  background?: string;
  padding?: string;
  width?: string;
  display?: string;
  alignItems?: string;
  border?: string;
  borderRadius?: string;
  position?: string;
}

export default interface SearchInputProps extends Boxprops {
  // InputBase props
  inputWidth?: string;
  inputBorder?: string;
  inputOutline?: string;
  inputBackground?: string;
  inputLineHeight?: string;
  inputFontSize?: string | number;
  inputPlaceholderFontSize?: string;
  inputColor?: string;
  inputBorderRadius?: string | number;
  inputBoxShadow?: string;
  inputOpacity?: number;
  inputFontWeight?: number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  ariaLabel?: string;
  inputpadding?: string;
}
