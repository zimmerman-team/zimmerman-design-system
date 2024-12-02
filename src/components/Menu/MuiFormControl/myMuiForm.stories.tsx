import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { formComponent } from "./index";
import { ArrowDown } from "./data";

const meta = {
  title: "Example/Dropdown/MUI-FormControl",
  component: formComponent,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof formComponent>;

export default meta;
type StoryType = StoryObj<typeof meta>;

export const AIDAPrimary: StoryType = {
  args: {
    id: "select-field",
    onChange: () => {},
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
    value: "option-1",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
    },
  },
};

export const AIDAOutlined: StoryType = {
  args: {
    id: "select-field",
    onChange: () => {},
    options: Array.from({ length: 50 }, (_, index) => ({
      label: `Option ${index + 1}`,
      value: `option-${index + 1}`,
    })),
    value: "option-1",
    variant: "outlined",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
    },
  },
};

export const AIDASelectMonth: StoryType = {
  args: {
    id: "select-month",
    onChange: () => {},
    options: [
      { label: "January", value: "january" },
      { label: "February", value: "february" },
      { label: "March", value: "march" },
      { label: "April", value: "april" },
      { label: "May", value: "may" },
      { label: "June", value: "june" },
      { label: "July", value: "july" },
      { label: "August", value: "august" },
      { label: "September", value: "september" },
      { label: "October", value: "october" },
      { label: "November", value: "november" },
      { label: "December", value: "december" },
    ],
    IconComponent: (props) => <ArrowDown {...props} stroke="black" />,
    value: "january",
    variant: "outlined",
    width: "300px",
    height: "40px",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=5363-21933&t=3oO3wnK985shYT1C-4",
    },
  },
};

export const MultipleSelection: StoryType = {
  args: {
    id: "select-field-multiple",
    onChange: () => {},
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
    value: [],
    label: "Multiple Select",
    placeholder: "Select options",
    variant: "outlined",
    multiple: true,
    width: "300px",
    height: "40px",
  },
};

export const CustomStyles: StoryType = {
  args: {
    id: "select-field-custom-styles",
    onChange: () => {},
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
    value: [],
    label: "Custom Styles Select",
    placeholder: "Select an option",
    variant: "outlined",
    width: "300px",
    height: "40px",
    sx: {
      ".MuiInputBase-root": {
        background: "lightblue",
        borderRadius: "10px",
      },
      ".MuiInputBase-input": {
        color: "darkblue",
      },
      ".MuiSelect-icon": {
        color: "darkblue",
      },
    },
  },
};

export const WithIconComponent: StoryType = {
  args: {
    id: "select-field-icon",
    onChange: () => {},
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
    value: [],
    label: "Select with Custom Icon",
    placeholder: "Select an option",
    variant: "outlined",
    width: "300px",
    height: "40px",
    IconComponent: (props) => <ArrowDown {...props} stroke="red" />,
  },
};
