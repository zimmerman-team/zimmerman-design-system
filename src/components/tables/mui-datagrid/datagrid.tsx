/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  DataGridProps,
  GridSlotsComponent,
} from "@mui/x-data-grid";
import { SxProps } from '@mui/system';

//Css props that can be manipulated
interface CustomStyles {
  boxWidth?: string; // Width of the DataGrid container
  minHeight?: string; // Minimum height of the DataGrid container
  borderStyle?: string; // Border style of the DataGrid
  columnHeaderTitleFontSize?: string; // Font size of the column header titles
  columnHeaderTitleFontWeight?: string | number; // Font weight of the column header titles
  columnHeaderTitleColor?: string; // Color of the column header titles
  rowHoverBackground?: string; // Background color of rows on hover
  cellFontSize?: string; // Font size of the cell content
  cellFocusOutline?: string; // Outline style of the cell when focused
  cellActiveOutline?: string; // Outline style of the cell when active
}

// Interface for the props that can be passed to the DataGrid component
interface GridProps extends DataGridProps {
  arialabel?: string; // ARIA label for accessibility
  arialabelledby?: string; // ARIA labelledby for accessibility
  hideFooter?: boolean; // Whether to hide the footer
  autoHeight?: boolean; // Whether to automatically adjust the height
  autoPageSize?: boolean; // Whether to automatically adjust the page size
  autosizeOnMount?: boolean; // Whether to autosize the DataGrid on mount
  checkboxSelection?: boolean; // Whether to enable checkbox selection
  columnHeaderHeight?: number; // Height of the column headers
  rowHeight?: number; // Height of the rows
  rows?: any[]; // Data rows for the DataGrid
  rowSelection?: boolean; // Whether to enable row selection
  columns: readonly any[]; // Column definitions for the DataGrid
  headerFontSize?: string; // Font size of the header
  sx?: SxProps; // Custom styles for the DataGrid
  customStyles?: CustomStyles; // Custom styles for the DataGrid
  slots?: Partial<GridSlotsComponent> | undefined; // Custom slots for the DataGrid
  slotProps?: object; // Custom slot props for the DataGrid
  disableRowSelectionOnClick?: boolean; // Whether to disable row selection on click
}

// DataGrid component with custom styles and props
export default function myDataGrid({
  arialabel,
  arialabelledby,
  hideFooter,
  autoHeight,
  autoPageSize,
  autosizeOnMount,
  checkboxSelection=false,
  columnHeaderHeight,
  rowHeight,
  rowSelection,
  rows,
  columns,
  headerFontSize,
  customStyles = {},
  sx,
  slots,
  slotProps,
  disableRowSelectionOnClick=false,
  ...otherProps
}: Readonly <GridProps>) {
  return (
    <Box
      sx={{
        width: customStyles.boxWidth ?? "100%",
        minHeight: customStyles.minHeight ?? "250px",
      }}
    >
      <DataGrid
        aria-label={arialabel}
        aria-labelledby={arialabelledby}
        hideFooter={hideFooter}
        autoHeight={autoHeight}
        rowHeight={rowHeight ?? 46}
        rows={rows}
        rowSelection={rowSelection}
        columnHeaderHeight={columnHeaderHeight ?? 46}
        columns={columns}
        columnVisibilityModel={{
          id: false,
        }}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        sx={{
          borderStyle: customStyles.borderStyle ?? "none",
          ".MuiDataGrid-columnHeaderTitle": {
            fontSize: customStyles.columnHeaderTitleFontSize ?? headerFontSize ?? "14px",
            fontWeight: customStyles.columnHeaderTitleFontWeight ?? "700",
            color: customStyles.columnHeaderTitleColor ?? "#0C162A",
          },
          ".MuiDataGrid-row": {
            ":hover": {
              background: customStyles.rowHoverBackground ?? "transparent",
            },
          },
          ".MuiDataGrid-cell": {
            fontSize: customStyles.cellFontSize ?? "12px",
            ":focus": {
              outline: customStyles.cellFocusOutline ?? "none",
            },
            ":active": {
              outline: customStyles.cellActiveOutline ?? "none",
            },
          },
          ...sx,
        }}
        slots={slots}
        slotProps={slotProps}
        {...otherProps}
      />
    </Box>
  );
}