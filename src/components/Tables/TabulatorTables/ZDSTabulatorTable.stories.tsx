import TabulatorTable from "./ZDSTabulatorTable";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import {
  TABLE_VARIATION_1_COLUMNS,
  TABLE_VARIATION_2_COLUMNS,
  TABLE_VARIATION_3_COLUMNS,
  TABLE_VARIATION_4_COLUMNS,
  TABLE_VARIATION_5_COLUMNS,
  TABLE_VARIATION_6_COLUMNS,
  TABLE_VARIATION_7_COLUMNS,
  TABLE_VARIATION_8_COLUMNS,
  TABLE_VARIATION_9_COLUMNS,
  TABLE_VARIATION_10_COLUMNS,
  TABLE_VARIATION_11_COLUMNS,
  TABLE_VARIATION_12_COLUMNS,
} from "./data";
import tableVariation1Data from "./data/table_variation_1_data.json";
import tableVariation2Data from "./data/table_variation_2_data.json";
import tableVariation3Data from "./data/table_variation_3_data.json";
import tableVariation4Data from "./data/table_variation_4_data.json";
import tableVariation5Data from "./data/table_variation_5_data.json";
import tableVariation6Data from "./data/table_variation_6_data.json";
import tableVariation7Data from "./data/table_variation_7_data.json";
import tableVariation8Data from "./data/table_variation_8_data.json";
import tableVariation9Data from "./data/table_variation_9_data.json";
import tableVariation10Data from "./data/table_variation_10_data.json";
import tableVariation11Data from "./data/table_variation_11_data.json";
import tableVariation12Data from "./data/table_variation_12_data.json";

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
    data: tableVariation1Data,
    columns: TABLE_VARIATION_1_COLUMNS,
    dataTree: true,
    search: false,
  },
};

export const Variant2: StoryType = {
  args: {
    id: "table-variant-2",
    data: tableVariation2Data,
    columns: TABLE_VARIATION_2_COLUMNS.slice(0, 7),
    extraColumns: TABLE_VARIATION_2_COLUMNS.slice(
      7,
      TABLE_VARIATION_2_COLUMNS.length - 1
    ),
    dataTree: true,
    dataTreeBranchElement: false,
    search: false,
  },
};

export const Variant3: StoryType = {
  args: {
    id: "table-variant-3",
    dataTree: true,
    dataTreeBranchElement: false,
    data: tableVariation3Data,
    columns: TABLE_VARIATION_3_COLUMNS,
  },
};

export const Variant4: StoryType = {
  args: {
    id: "table-variant-4",
    dataTree: true,
    data: tableVariation4Data,
    columns: TABLE_VARIATION_4_COLUMNS.slice(0, 1),
    extraColumns: TABLE_VARIATION_4_COLUMNS.slice(
      1,
      TABLE_VARIATION_4_COLUMNS.length - 1
    ),
  },
};

export const Variant5: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation5Data,
    columns: TABLE_VARIATION_5_COLUMNS,
  },
};

export const Variant6: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation6Data,
    columns: TABLE_VARIATION_6_COLUMNS,
  },
};

export const Variant7: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation7Data,
    columns: TABLE_VARIATION_7_COLUMNS,
  },
};

export const Variant8: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation8Data,
    columns: TABLE_VARIATION_8_COLUMNS,
  },
};

export const Variant9: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    dataTreeStartExpanded: true,
    data: tableVariation9Data,
    columns: TABLE_VARIATION_9_COLUMNS,
  },
};

export const Variant10: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    dataTreeStartExpanded: true,
    data: tableVariation10Data,
    columns: TABLE_VARIATION_10_COLUMNS,
  },
};

export const Variant11: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation11Data,
    columns: TABLE_VARIATION_11_COLUMNS,
  },
};

export const Variant12: StoryType = {
  args: {
    id: "table",
    dataTree: true,
    data: tableVariation12Data,
    columns: TABLE_VARIATION_12_COLUMNS,
  },
};
