/** @jsxImportSource @emotion/react */

import React from "react";
import get from "lodash/get";
import Box from "@mui/material/Box";
import orderBy from "lodash/orderBy";
import TableProps from "./interface";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import { TablePagination, Typography } from "@mui/material";

// Table component
export default function MyTable({
  data,
  tableId,
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
  maxHeight,
  headerTextStyle,
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
        <TableContainer id={tableId} sx={{ maxHeight: maxHeight }}>
          <Table {...otherProps} sx={{ minWidth: minWidth }}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={header.headerId}
                    onClick={() => handleSortChange(header.headerId)}
                    align={header.headerAlign ?? "left"}
                    width={header.headerWidth}
                    style={{
                      cursor: headCursor,
                      fontWeight: headFontWeight,
                      whiteSpace: headTextWrap,
                      borderStyle: headBorderStyle,
                      position: headPosition,
                      color: headColor || sortIndicatorColor,
                    }}
                  >
                    <Typography
                      sx={{
                        ...headerTextStyle,
                      }}
                    >
                      {header.label}
                      {sortable && currentSortKey === header.headerId && (
                        <span style={{ color: sortIndicatorColor }}>
                          {currentSortDirection === "asc" ? " ▲" : " ▼"}
                        </span>
                      )}
                    </Typography>
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
                        key={header.headerId}
                        style={{ borderColor, color: bodyColor }}
                      >
                        {header.renderCell ? (
                          header.renderCell({
                            row,
                            value: get(row, header.headerId),
                          })
                        ) : (
                          <Typography variant="body2" fontSize={"12px"}>
                            {get(row, header.headerId)}
                          </Typography>
                        )}
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
