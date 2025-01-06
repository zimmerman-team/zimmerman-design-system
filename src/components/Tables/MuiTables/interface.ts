import { SxProps } from "@mui/material";
import { TableProps as MuiTableProps } from "@mui/material/Table";

// Interface for container props
interface PaperProps {
  componentWidth?: string; // Width of the table container
  componentOverflow?: string; // Overflow property of the table container
  componentPadding?: string; // Padding of the table container
  componentBorderRadius?: string; // Border radius of the table container
  componentBackground?: string; // Background color of the table container
  componentBoxShadow?: string; // Box shadow of the table container
}
interface TableContainerProps {
  maxHeight?: string; // Max height of the table container
}
// Interface for Table Header props
export interface TableHeadProps {
  headerId: string; // Unique identifier for the header
  label?: string; // Display label for the header
  headerWidth?: number;
  headerAlign?: "left" | "right" | "center";
  renderCell?: (params: any) => JSX.Element;
  headCursor?: string;
  headFontWeight?: string;
  headTextWrap?: string;
  headBorderStyle?: string;
  headPosition?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  headColor?: string;
}
// Interface for Table Body props
interface TableBodyProps {
  bodyColor?: string; // Body color of the table body
}
// Interface for Pagination props
interface PaginationProps {
  pagination?: boolean;
  page?: number;
  rowsPerPage?: number;
  onPageChange?: (page: number) => void;
  sortable?: boolean;
  sortKey?: string;
  sortDirection?: "asc" | "desc";
  onSortChange?: (columnId: string, direction: "asc" | "desc") => void;
  onRowExpand?: (rowIndex: number) => void;
  paginationDisplay?: string;
  paginationBorderStyle?: string;
  paginationPadding?: string;
  paginationJustifyContent?: string;
  paginationToolbarMarginLeft?: string;
}

// Interface for Table props
export default interface TableProps
  extends MuiTableProps,
    PaperProps,
    PaginationProps,
    TableHeadProps,
    TableBodyProps,
    TableContainerProps {
  tableId: string; // Unique identifier for the table
  data: Array<{ [key: string]: string | number }>; // Array of table data
  headers: TableHeadProps[]; // Array of table headers
  rowHeight?: number; // Height of the table rows
  borderColor?: string; // Border color of the table
  hover?: boolean; // Whether to enable row hover effect
  sortIndicatorColor?: string; // Color of the sort indicator
  minWidth?: string; // Min width of the table
  headerTextStyle?: SxProps; // Style for the header text
}
