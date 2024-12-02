/** @jsxImportSource @emotion/react */
import React from "react";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import colors from "../../theme/colorsSeaerchInput";
import { SxProps, Theme } from "@mui/material";

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
interface SearchInputProps extends Boxprops {
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

export function MySearchInput(props: Readonly<SearchInputProps>) {
  const {
    display,
    background = colors.secondary.disableButton,
    padding = "4px 8px",
    width = "100%",
    placeholder = "Search...",
    showBorder,
    value,
    onChange,
    shape = "circle",
    gap,
    borderRadius,
    position,
  } = props;

  // Helper function to get border radius based on shape
  const getBorderRadius = (borderShape?: "circle" | "rounded" | "sharp") => {
    switch (borderShape) {
      case "circle":
        return "50%";
      case "rounded":
        return "30px";
      default:
        return "5px";
    }
  };
  return (
    <Box
      sx={
        {
          display: display,
          alignItems: "center",
          border: showBorder ? "1px solid #A1AEBD" : "none",
          backgroundColor: background,
          gap: gap,
          position: position,
          padding: padding,
          borderRadius: borderRadius ?? getBorderRadius(shape),
          width: width,
        } as SxProps<Theme>
      }
    >
      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        startAdornment={props.startAdornment}
        endAdornment={props.endAdornment}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        aria-label={props.ariaLabel}
        sx={{
          width: props.inputWidth,
          border: props.inputBorder,
          outline: props.inputOutline,
          background: props.inputBackground,
          lineHeight: props.inputLineHeight,
          fontSize: props.inputFontSize,
          borderRadius: props.inputBorderRadius,
          color: props.inputColor,
          boxShadow: props.inputBoxShadow,
          opacity: props.inputOpacity,
          fontWeight: props.inputFontWeight,
          padding: props.inputpadding,
          "& .MuiInputBase-input": {
            paddingLeft: props.startAdornment ? "8px" : "0",
          },
        }}
        inputProps={{
          style: {
            textIndent: props.startAdornment ? "8px" : "0",
          },
        }}
      />
    </Box>
  );
}
