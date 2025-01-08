import { SxProps } from "@mui/system";
import { TableDataItem } from "./types";
import { RowComponent } from "tabulator-tables";
import { ColumnDefinition } from "tabulator-tables";
import { TabulatorFull as Tabulator } from "tabulator-tables";

export interface TableProps extends TabularStyling {
  id: string;
  data: {
    [key: string]: TableDataItem;
  }[];
  columns: ColumnDefinition[];
  dataTree?: boolean;
  search?: boolean;
  setTable?: (table: Tabulator) => void;
  dataTreeBranchElement?: boolean;
  dataTreeStartExpanded?:
    | boolean
    | boolean[]
    | ((row: RowComponent, level: number) => boolean);
  extraColumns?: ColumnDefinition[];
  dataTreeStartExpandedFn?: (row: RowComponent, level: number) => boolean;
  sx?: SxProps;
}

interface TabularStyling {
  columnBackground?: string;
  firstColumnBackground?: string;
  firstCellBackground?: string;
  rowHoverBorderColor?: string;
  boxWidth?: string;
  minHeight?: string;
  borderStyle?: string;
  borderColor?: string;
  columnHeaderTitleFontSize?: string;
  columnHeaderTitleFontWeight?: string | number;
  columnHeaderTitleColor?: string;
  rowHoverBackground?: string;
  cellFontSize?: string;
  cellFocusOutline?: string;
  cellActiveOutline?: string;
}
