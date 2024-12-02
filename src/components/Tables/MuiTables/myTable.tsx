/** @jsxImportSource @emotion/react */

import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table, { TableProps as MuiTableProps } from "@mui/material/Table";
import orderBy from "lodash/orderBy";

// Table header props
interface Header {
  id: string; // Unique identifier for the header
  label: string; // Display label for the header
}

// Interface for container props
interface ContainerProps {
  componentWidth?: string; // Width of the table container
  componentOverflow?: string; // Overflow property of the table container
  componentPadding?: string; // Padding of the table container
  componentBorderRadius?: string; // Border radius of the table container
  componentBackground?: string; // Background color of the table container
  componentBoxShadow?: string; // Box shadow of the table container
}

// Interface for Table Header props
interface TableHeadProps {
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
interface TableProps
  extends MuiTableProps,
    ContainerProps,
    PaginationProps,
    TableHeadProps,
    TableBodyProps {
  data: Array<{ [key: string]: string | number }>; // Array of table data
  headers: Header[]; // Array of table headers
  rowHeight?: number; // Height of the table rows
  borderColor?: string; // Border color of the table
  hover?: boolean; // Whether to enable row hover effect
  sortIndicatorColor?: string; // Color of the sort indicator
  minWidth?: string; // Min width of the table
}

// Table component
export default function myTable({
  data,
  headers,
  rowHeight = 50,
  borderColor = "#ddd",
  hover = true,
  sortIndicatorColor = "black",
  componentWidth,
  componentOverflow,
  componentPadding,
  componentBorderRadius,
  componentBackground,
  componentBoxShadow,
  pagination,
  page,
  rowsPerPage,
  onPageChange,
  sortable = false,
  sortKey,
  sortDirection,
  onSortChange,
  onRowExpand,
  headCursor = "pointer",
  headFontWeight = "700",
  headTextWrap = "nowrap",
  headBorderStyle = "none",
  headPosition = "relative",
  headColor,
  bodyColor,
  paginationDisplay = "flex",
  paginationBorderStyle = "none",
  paginationPadding = "10px 16px",
  paginationJustifyContent = "flex-start",
  paginationToolbarMarginLeft = "0",
  minWidth = "1500px",
  ...otherProps
}: Readonly<TableProps>) {
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(page || 0);
  // State for the current number of rows per page
  const [currentRowsPerPage, setCurrentRowsPerPage] = React.useState(
    rowsPerPage || 10
  );
  // State for the current sort key
  const [currentSortKey, setCurrentSortKey] = React.useState<
    string | undefined
  >(sortKey);
  // State for the current sort direction
  const [currentSortDirection, setCurrentSortDirection] = React.useState<
    "asc" | "desc" | undefined
  >(sortDirection);

  // Handle page change
  const handlePageChange = (event: unknown, newPage: number) => {
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  // Handle rows per page change
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  // Handle sort change
  const handleSortChange = (columnId: string) => {
    const isAsc = currentSortKey === columnId && currentSortDirection === "asc";
    const direction = isAsc ? "desc" : "asc";
    setCurrentSortKey(columnId);
    setCurrentSortDirection(direction);
    if (onSortChange) {
      onSortChange(columnId, direction);
    }
  };

  const sortedData = React.useMemo(() => {
    return sortable && currentSortKey && currentSortDirection
      ? orderBy(data, [currentSortKey], [currentSortDirection])
      : data;
  }, [data, sortable, currentSortKey, currentSortDirection]);

  return (
    <Paper
      style={{
        width: componentWidth,
        overflow: componentOverflow,
        padding: componentPadding,
        borderRadius: componentBorderRadius,
        background: componentBackground,
        boxShadow: componentBoxShadow,
      }}
    >
      <Box sx={{ overflowX: "auto" }}>
        <TableContainer>
          <Table {...otherProps} sx={{ minWidth: minWidth }}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={header.id}
                    onClick={() => handleSortChange(header.id)}
                    style={{
                      cursor: headCursor,
                      fontWeight: headFontWeight,
                      whiteSpace: headTextWrap,
                      borderStyle: headBorderStyle,
                      position: headPosition,
                      color: headColor || sortIndicatorColor,
                    }}
                  >
                    {header.label}
                    {sortable && currentSortKey === header.id && (
                      <span style={{ color: sortIndicatorColor }}>
                        {currentSortDirection === "asc" ? " ▲" : " ▼"}
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                .slice(
                  currentPage * currentRowsPerPage,
                  currentPage * currentRowsPerPage + currentRowsPerPage
                )
                .map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    hover={hover}
                    sx={{
                      height: rowHeight,
                    }}
                  >
                    {headers.map((header) => (
                      <TableCell
                        key={header.id}
                        style={{ borderColor, color: bodyColor }}
                      >
                        {row[header.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {pagination && (
        <TablePagination
          component="div"
          count={data.length}
          page={currentPage}
          onPageChange={handlePageChange}
          rowsPerPage={currentRowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          sx={{
            display: paginationDisplay,
            borderStyle: paginationBorderStyle,
            padding: paginationPadding,
            justifyContent: paginationJustifyContent,
            "& .MuiTablePagination-toolbar": {
              marginLeft: paginationToolbarMarginLeft,
            },
          }}
        />
      )}
    </Paper>
  );
}
