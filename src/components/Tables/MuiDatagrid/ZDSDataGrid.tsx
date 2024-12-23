/** @jsxImportSource @emotion/react */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import GridProps from "./interface";

// DataGrid component with custom styles and props
export default function ZDSDataGrid({
  arialabel,
  arialabelledby,
  hideFooter,
  autoHeight,
  autoPageSize,
  autosizeOnMount,
  checkboxSelection = false,
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
  disableRowSelectionOnClick = false,
  ...otherProps
}: Readonly<GridProps>) {
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
            fontSize:
              customStyles.columnHeaderTitleFontSize ??
              headerFontSize ??
              "14px",
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
