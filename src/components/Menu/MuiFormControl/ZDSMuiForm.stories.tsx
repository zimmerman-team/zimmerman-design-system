import React from "react";
import { ArrowDown } from "./const";
import data from "./data/mockdata.json";
import { ZDSFormComponent } from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import ZDSMuiForm from "./ZDSMuiForm";

const meta = {
  title: "Example/Dropdown/MUI-FormControl",
  component: ZDSFormComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ZDSFormComponent>;

export default meta;
type StoryType = StoryObj<typeof meta>;

export const AIDAPrimary: StoryType = {
  args: {
    id: "select-field",
    onChange: () => {},
    options: data.primarySelect.options,
    value: "option-1",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
      },
    ],
  },
};

export const AIDAOutlined: StoryType = {
  args: {
    id: "select-field",
    onChange: () => {},
    options: data.numberedSelect.options,
    value: "option-1",
    variant: "outlined",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-MAIN?node-id=2413-43104",
      },
    ],
  },
};

export const AIDASelectMonth: StoryType = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState("january");

    return (
      <ZDSMuiForm
        {...args}
        value={selectedValue}
        onChange={(event) => {
          setSelectedValue(event.target.value);
          // You can keep the original onChange if needed
          args.onChange?.(event);
        }}
      />
    );
  },
  args: {
    id: "select-month",
    onChange: () => {},
    options: data.monthSelect.options,
    IconComponent: (props) => <ArrowDown {...props} stroke="black" />,
    variant: "outlined",
    width: "300px",
    height: "40px",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=5363-21933&t=3oO3wnK985shYT1C-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/vgdX46lAwjQwfV6YyEfaG4/AIDA-V3-Main-Design?node-id=5363-21933&t=3oO3wnK985shYT1C-4",
      },
    ],
  },
};

export const MultipleSelection: StoryType = {
  args: {
    id: "select-field-multiple",
    onChange: () => {},
    options: data.primarySelect.options,
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
    options: data.primarySelect.options,
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
    options: data.primarySelect.options,
    value: [],
    label: "Select with Custom Icon",
    placeholder: "Select an option",
    variant: "outlined",
    width: "300px",
    height: "40px",
    IconComponent: (props) => <ArrowDown {...props} stroke="red" />,
  },
};
