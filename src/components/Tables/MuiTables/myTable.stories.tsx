// Table.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MyTable from "./myTable";
import { data, headers } from "./data";

// Meta configuration for the MUI Tables stories
const meta: Meta<typeof MyTable> = {
  title: "Example/Table/MUI Tables",
  component: MyTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    borderColor: { control: "color" },
    rowHeight: { control: { type: "number" } },
    hover: { control: "boolean" },
    sortIndicatorColor: { control: "color" },
    componentPadding: { control: "text" },
    componentBorderRadius: { control: "text" },
    componentBackground: { control: "color" },
    componentBoxShadow: { control: "text" },
    headCursor: { control: "text" },
    headFontWeight: { control: "text" },
    headTextWrap: { control: "text" },
    headBorderStyle: { control: "text" },
    headPosition: { control: "text" },
    headColor: { control: "color" },
    bodyColor: { control: "color" },
    paginationDisplay: { control: "text" },
    paginationBorderStyle: { control: "text" },
    paginationPadding: { control: "text" },
    paginationJustifyContent: { control: "text" },
    paginationToolbarMarginLeft: { control: "text" },
    minWidth: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof MyTable>;

// Default MUI Table story
export const DefaultTable: Story = {
  args: {
    data,
    headers,
    rowHeight: 50,
    borderColor: "grey",
    hover: true,
    sortIndicatorColor: "black",
    componentPadding: "10px 16px",
    componentBorderRadius: "4px",
    componentBackground: "#fff",
    componentBoxShadow: "none",
  },
};

// MUI Table story with Pagination
export const PaginatedTable: Story = {
  args: {
    data,
    headers,
    pagination: true,
    rowsPerPage: 2,
    sortable: true,
    sortKey: "Age",
    sortDirection: "desc",
    paginationDisplay: "flex",
    paginationBorderStyle: "none",
    paginationPadding: "10px 16px",
    paginationJustifyContent: "flex-start",
    paginationToolbarMarginLeft: "0",
    onPageChange: (page) => console.log("Page changed to:", page),
    onSortChange: (columnId, direction) =>
      console.log("Sort changed:", columnId, direction),
  },
};
// Mui OpenAidActivitiesTable story
export const OpenAidActivitiesTable: Story = {
  args: {
    data,
    headers,
    sortable: true,
    onSortChange: (columnId, direction) =>
      console.log("Sort changed:", columnId, direction),
    componentWidth: "100%",
    componentOverflow: "hidden",
    componentPadding: "10px 16px",
    componentBorderRadius: "10px",
    componentBackground: "#F8F8F8",
    componentBoxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderColor: "#ECF1FA",
    headCursor: "pointer",
    headFontWeight: "700",
    headTextWrap: "nowrap",
    headBorderStyle: "none",
    headPosition: "relative",
    headColor: "#002561",
    bodyColor: "#002561",
    paginationDisplay: "flex",
    paginationBorderStyle: "none",
    paginationPadding: "10px 16px",
    paginationJustifyContent: "flex-start",
    paginationToolbarMarginLeft: "0",
    sortIndicatorColor: "#002561",
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=6305-222433&t=tqOyzQnwJakGTFif-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/uZX8k1fv1MfzGTEBXuvjeV/MFA---Main-Design-2.0?node-id=6305-222433&t=tqOyzQnwJakGTFif-4",
      },
    ],
  },
};
