/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  DataGridProps,
  useGridApiContext,
  GridSlotsComponent,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  BaseCheckboxPropsOverrides,
  BaseTextFieldPropsOverrides,
} from "@mui/x-data-grid";
import { SxProps } from '@mui/system';

interface CustomStyles {
  boxWidth?: string;
  minHeight?: string;
  borderStyle?: string;
  columnHeaderTitleFontSize?: string;
  columnHeaderTitleFontWeight?: string | number;
  columnHeaderTitleColor?: string;
  rowHoverBackground?: string;
  cellFontSize?: string;
  cellFocusOutline?: string;
  cellActiveOutline?: string;
}

interface GridProps extends DataGridProps {
  arialabel?: string;
  arialabelledby?: string;
  hideFooter?: boolean;
  autoHeight?: boolean;
  autoPageSize?: boolean;
  autosizeOnMount?: boolean;
  checkboxSelection?: boolean;
  columnHeaderHeight?: number;
  rowHeight?: number;
  rows?: any[];
  rowSelection?: boolean;
  columns: readonly any[];
  headerFontSize?: string;
  sx?: SxProps;
  customStyles?: CustomStyles;
  slots?: Partial<GridSlotsComponent> | undefined;
  slotProps?:object;
  disableRowSelectionOnClick?: boolean;
}

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