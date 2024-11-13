/** @jsxImportSource @emotion/react */

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"
import { TableProps as MuiTableProps } from "@mui/material/Table";
import { fn } from "@storybook/test";
import orderBy from 'lodash/orderBy';

interface Header {
  id:string;
  label:string;
}

interface ContainerProps {
  componentWidth?: string;
  componentOverflow?: string;
  componentPadding?: string;
  componentBorderRadius?: string;
  componentBackground?: string;
  componentBoxShadow?: string;
}

interface TableHeadProps {
  headCursor?: string;
  headFontWeight?: string;
  headTextWrap?: string;
  headBorderStyle?: string;
  headPosition?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  headColor?: string;
}

interface TableBodyProps {
  bodyColor?: string;
}

interface PaginationProps{
  
pagination?: boolean;
page?: number;
rowsPerPage?: number;
onPageChange?: (page: number) => void;
sortable?: boolean;
sortKey?: string;
sortDirection?: 'asc' | 'desc';
onSortChange?: (columnId: string, direction: 'asc' | 'desc') => void;
expandableRows?: boolean;
onRowExpand?: (rowIndex: number) => void;
paginationDisplay?: string;
paginationBorderStyle?: string;
paginationPadding?: string;
paginationJustifyContent?: string;
paginationToolbarMarginLeft?: string;

}



interface TableProps extends MuiTableProps,ContainerProps,PaginationProps,TableHeadProps,TableBodyProps {
    data: Array<{ [key: string]: string | number }>;
    headers: Header[];
    rowHeight?: number;
    borderColor?: string;
    hover?: boolean;
    hoverColor?:string;
    sortIndicatorColor?:string,
    minWidth?:string
}

export default function MyTable({
    data,
    headers,
    rowHeight = 50,
    borderColor = "#ddd",
    hover = true,
    hoverColor = 'rgba(0, 0, 0, 0.1)', 
    sortIndicatorColor = 'black',
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
    sortable=false,
    sortKey,
    sortDirection,
    onSortChange,
    expandableRows,
    onRowExpand,
    headCursor = 'pointer',
    headFontWeight = '700',
    headTextWrap = 'nowrap',
    headBorderStyle = 'none',
    headPosition = 'relative',
    headColor,
    bodyColor,
    paginationDisplay = 'flex',
    paginationBorderStyle = 'none',
    paginationPadding = '10px 16px',
    paginationJustifyContent = 'flex-start',
    paginationToolbarMarginLeft = '0',
    minWidth='1500px',
    ...otherProps
  }: Readonly<TableProps>) {
    const [currentPage,setCurrentPage]=React.useState(page||0);
    const [currentRowsPerPage,setCurrentRowsPerPage]=React.useState(rowsPerPage||10);
    const [currentSortKey, setCurrentSortKey] = React.useState<string | undefined>(sortKey);
    const [currentSortDirection, setCurrentSortDirection] = React.useState<'asc' | 'desc' | undefined>(sortDirection);


    const handlePageChange=(event:unknown,newPage:number)=>{
       setCurrentPage(newPage);
       if (onPageChange) onPageChange(newPage);
     };

     const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(0);
    };
  
    const handleSortChange = (columnId: string) => {
      const isAsc = currentSortKey === columnId && currentSortDirection === 'asc';
      const direction = isAsc ? 'desc' : 'asc';
      setCurrentSortKey(columnId);
      setCurrentSortDirection(direction);
      if (onSortChange) onSortChange(columnId, direction);
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
       <Box sx={{ overflowX: 'auto' }}>
      <TableContainer>
      <Table {...otherProps} sx={{minWidth:minWidth}}>
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
                      {currentSortDirection === 'asc' ? ' ▲' : ' ▼'}
                    </span>
                  )}
              </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.slice(currentPage * currentRowsPerPage, currentPage * currentRowsPerPage + currentRowsPerPage).map((row, rowIndex) => (
              <TableRow
              key={rowIndex}
              hover={hover}
              sx={{
                '&:hover': hover ? { backgroundColor: hoverColor } : {},
              }}
            >
                {headers.map((header) => (
                  <TableCell key={header.id} style={{ borderColor,color: bodyColor}}>
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
            '& .MuiTablePagination-toolbar': {
              marginLeft: paginationToolbarMarginLeft,
            },
          }}
        />
      )}
    </Paper>
    
  );
}





