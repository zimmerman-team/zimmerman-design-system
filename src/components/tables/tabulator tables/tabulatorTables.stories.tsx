import type { Meta, StoryObj } from "@storybook/react";
import TabulatorTable from "./tabulatorTables";
import { withRouter } from "storybook-addon-remix-react-router";
import {
  TABLE_VARIATION_1_DATA,
  TABLE_VARIATION_1_COLUMNS,
  TABLE_VARIATION_2_DATA,
  TABLE_VARIATION_2_COLUMNS,
  TABLE_VARIATION_3_DATA,
  TABLE_VARIATION_3_COLUMNS,
  TABLE_VARIATION_4_DATA,
  TABLE_VARIATION_4_COLUMNS,
  TABLE_VARIATION_5_DATA,
  TABLE_VARIATION_5_COLUMNS,
  TABLE_VARIATION_6_DATA,
  TABLE_VARIATION_6_COLUMNS,
  TABLE_VARIATION_7_DATA,
  TABLE_VARIATION_7_COLUMNS,
  TABLE_VARIATION_8_DATA,
  TABLE_VARIATION_8_COLUMNS,
  TABLE_VARIATION_9_DATA,
  TABLE_VARIATION_9_COLUMNS,
  TABLE_VARIATION_10_DATA,
  TABLE_VARIATION_10_COLUMNS,
  TABLE_VARIATION_11_DATA,
  TABLE_VARIATION_11_COLUMNS,
  TABLE_VARIATION_12_DATA,
  TABLE_VARIATION_12_COLUMNS,
} from "./data";

const meta = {
  title: "Example/Table/Tabulator Tables",
  component: TabulatorTable,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    data: { control: "object" },
    columns: { control: "object" },
    dataTree: { control: "boolean" },
    search: { control: "boolean" },
    dataTreeBranchElement: { control: "object" },
    dataTreeStartExpanded: { control: "boolean" },
    extraColumns: { control: "object" },
    columnBackground: { control: "color" },
    firstColumnBackground: { control: "color" },
    firstCellBackground: { control: "color" },
    rowHoverBorderColor: { control: "color" },
    boxWidth: { control: "text" },
    minHeight: { control: "text" },
    borderStyle: { control: "text" },
    borderColor: { control: "color" },
    columnHeaderTitleFontSize: { control: "text" },
    columnHeaderTitleFontWeight: { control: "text" },
    columnHeaderTitleColor: { control: "color" },
    rowHoverBackground: { control: "color" },
    cellFontSize: { control: "text" },
    cellFocusOutline: { control: "text" },
    cellActiveOutline: { control: "text" },
    sx: { control: "object" },
  },
} satisfies Meta<typeof TabulatorTable>;

export default meta;
type StoryType = StoryObj<typeof meta>;

export const Variant1: StoryType = {
    args: {
      id: "table-variant-1",
      data: TABLE_VARIATION_10_DATA,
      columns: TABLE_VARIATION_10_COLUMNS,
      dataTree: false,
      search: false,
      columnHeaderTitleColor: "#333",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
      sx: {
        backgroundColor: '#f0f0f0',
        height: 'auto', 
      },
    },
  };
  
  export const Variant2: StoryType = {
    args: {
      id: "table-variant-2",
      data: TABLE_VARIATION_11_DATA,
      columns: TABLE_VARIATION_11_COLUMNS,
      dataTree: true,
      dataTreeStartExpanded: true,
      columnHeaderTitleColor: "#333",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
      sx: {
        backgroundColor: '#f0f0f0',
        height: 'auto', 
      },
    },
  };
  
  export const Variant3: StoryType = {
    args: {
      id: "table-variant-3",
      dataTree: true,
      dataTreeBranchElement: false,
      data: TABLE_VARIATION_12_DATA,
      columns: TABLE_VARIATION_12_COLUMNS,
      columnHeaderTitleColor: "#333",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
      sx: {
        backgroundColor: '#f0f0f0',
        height: 'auto', // Use CSS for height
      },
    },
  };
  
  export const Variant4: StoryType = {
    args: {
      id: "table-variant-4",
      dataTree: true,
      data: TABLE_VARIATION_11_DATA,
      columns: TABLE_VARIATION_11_COLUMNS.slice(0, 1),
      extraColumns: TABLE_VARIATION_11_COLUMNS.slice(
        1,
        TABLE_VARIATION_11_COLUMNS.length - 1
      ),
      columnHeaderTitleColor: "#333",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
      sx: {
        backgroundColor: '#f0f0f0',
        height: 'auto', // Use CSS for height
      },
    },
  };

export const Variant5: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_5_DATA,
    columns: TABLE_VARIATION_5_COLUMNS,
  },
};

export const Variant6: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_6_DATA,
    columns: TABLE_VARIATION_6_COLUMNS,
  },
};

export const Variant7: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_7_DATA,
    columns: TABLE_VARIATION_7_COLUMNS,
  },
};

export const Variant8: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_8_DATA,
    columns: TABLE_VARIATION_8_COLUMNS,
  },
};

export const Variant9: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    dataTreeStartExpanded: true,
    data: TABLE_VARIATION_9_DATA,
    columns: TABLE_VARIATION_9_COLUMNS,
  },
};

export const Variant10: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    dataTreeStartExpanded: true,
    data: TABLE_VARIATION_10_DATA,
    columns: TABLE_VARIATION_10_COLUMNS,
  },
};

export const Variant11: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_11_DATA,
    columns: TABLE_VARIATION_11_COLUMNS,
  },
};

export const Variant12: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: TABLE_VARIATION_12_DATA,
    columns: TABLE_VARIATION_12_COLUMNS,
  },
};
