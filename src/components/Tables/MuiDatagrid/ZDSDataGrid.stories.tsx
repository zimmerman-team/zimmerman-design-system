import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ZDSDataGrid from "./ZDSDataGrid";
import columns from "./data/columns.json";
import rows from "./data/rows.json";
import { CustomToolbar } from "./const";

// Meta configuration for the DataGrid stories
const meta: Meta<typeof ZDSDataGrid> = {
  title: "Example/Table/DataGrid Tables",
  component: ZDSDataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    arialabel: { control: "text" },
    arialabelledby: { control: "text" },
    hideFooter: { control: "boolean" },
    autoHeight: { control: "boolean" },
    autoPageSize: { control: "boolean" },
    autosizeOnMount: { control: "boolean" },
    checkboxSelection: { control: "boolean" },
    columnHeaderHeight: { control: { type: "number" } },
    rowHeight: { control: { type: "number" } },
    rowSelection: { control: "boolean" },
    headerFontSize: { control: "text" },
    customStyles: { control: "object" },
    slots: { control: "object" },
    slotProps: { control: "object" },
    sx: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof ZDSDataGrid>;

// Default DataGrid story
export const DefaultDataGrid: Story = {
  args: {
    rows,
    columns,
    hideFooter: true,
    rowHeight: 46,
    headerFontSize: "16px",
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
  },
};
// DataGrid story with the custom toolbar
export const DataGridWithCustomToolbar: Story = {
  args: {
    rows,
    columns,
    hideFooter: true,
    rowHeight: 46,
    headerFontSize: "16px",
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
    slots: {
      toolbar: CustomToolbar,
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        showFilterButton: true,
        showAddFileButton: true,
        showColumnsButton: true,
        showSortButton: true,
      },
    },
  },
};

// DataGrid story with checkbox selection
export const DataGridWithCheckboxSelection: Story = {
  args: {
    rows,
    columns,
    hideFooter: true,
    rowHeight: 46,
    headerFontSize: "16px",
    checkboxSelection: true,
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
  },
};

// DataGrid story with pagination
export const DataGridWithPagination: Story = {
  args: {
    rows,
    columns,
    hideFooter: false,
    rowHeight: 46,
    headerFontSize: "16px",
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
  },
};

// DataGrid story with sorting
export const DataGridWithSorting: Story = {
  args: {
    rows,
    columns,
    hideFooter: true,
    rowHeight: 46,
    headerFontSize: "16px",
    sortingOrder: ["asc", "desc"],
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
  },
};
// DataGrid story with filtering
export const DataGridWithFiltering: Story = {
  args: {
    rows,
    columns,
    hideFooter: true,
    rowHeight: 46,
    headerFontSize: "16px",
    filterModel: {
      items: [{ field: "name", operator: "contains", value: "Alice" }],
    },
    customStyles: {
      borderStyle: "solid",
      columnHeaderTitleFontSize: "16px",
      columnHeaderTitleFontWeight: "bold",
      columnHeaderTitleColor: "#333",
      rowHoverBackground: "#f0f0f0",
      cellFontSize: "14px",
      cellFocusOutline: "2px solid blue",
      cellActiveOutline: "2px solid red",
    },
    sx: {
      backgroundColor: "#f0f0f0",
      height: "auto",
    },
  },
};
