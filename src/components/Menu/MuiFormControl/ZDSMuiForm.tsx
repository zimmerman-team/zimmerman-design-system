/** @jsxImportSource @emotion/react */
import React from "react";
import { colors } from "theme";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import { SelectFieldProps } from "./interface";

export default function ZDSMuiForm(props: Readonly<SelectFieldProps>) {
  const { id, options } = props;

  return (
    <FormControl
      fullWidth
      sx={{
        ".MuiInputBase-root": {
          width: props.width ?? "100%",
          height: props.height ?? "32px",
          borderRadius: "5px",
          background:
            props.variant === "outlined"
              ? colors.secondary.lightGrey
              : colors.primary.blue,
          border:
            props.variant === "outlined"
              ? `1px solid ${props.borderColor ?? colors.secondary.iconGray}`
              : "none",
        },
        ".MuiInputBase-input": {
          fontSize: "12px",
          fontWeight: props.fontWeight ?? "700",
          lineHeight: "normal",
          textAlign: "start",
          padding: props.variant === "outlined" ? "10px 20px" : "0px 8px",
          color:
            props.variant === "outlined"
              ? colors.text.title
              : colors.primary.white,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderStyle: "none",
        },
        ".MuiSelect-icon": {
          color: colors.primary.white,
        },
        ".MuiMenuItem-root": {
          fontSize: "12px",
          fontWeight: "700",
        },
        ".MuiSelect-paper": {
          background: `colors.primary.green !important`,
          padding: "100px",
          borderRadius: "10px",
          border: `1px solid ${colors.secondary.iconGray}`,
        },
      }}
    >
      {props.label ? (
        <Typography
          lineHeight={"normal"}
          variant="body2"
          fontSize={"12px"}
          component={"label"}
          htmlFor={props.id}
          marginBottom={"5px"}
        >
          {props.label}
        </Typography>
      ) : null}
      <Select
        id={props.id}
        value={props.value as string}
        name={props.name}
        displayEmpty
        multiple={props.multiple}
        IconComponent={props.IconComponent}
        labelId={`${id}-label`}
        onChange={props.onChange}
        renderValue={(selected: string | string[]) => {
          if (props.multiple && typeof selected === "object") {
            if (selected.length === 0) {
              return props.placeholder;
            }

            return props.options
              .filter((v) => selected.includes(v.value))
              .map((v) => v.label)
              .join(", ");
          }
          if (selected === "") {
            return props.placeholder;
          }

          return props.options.find((o) => o.value === selected)?.label;
        }}
        MenuProps={{
          sx: {
            "& ul": {
              background: colors.secondary.lightGrey,
              padding: "10px",
              borderRadius: "10px",
              border: `1px solid ${colors.secondary.iconGray}`,
              maxHeight: "350px",
              overflowY: "scroll",
              marginTop: "8px",
            },
            ".Mui-selected": {
              background: colors.secondary.disableButton,
              borderRadius: "10px",
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              marginBottom: "10px",
              ":hover": {
                borderRadius: "10px",
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
