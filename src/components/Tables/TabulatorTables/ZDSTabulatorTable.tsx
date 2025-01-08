/** @jsxImportSource @emotion/react */
import * as React from "react";
import Box from "@mui/material/Box";
import { ExpandElement } from "./const";
import { TableProps } from "./interface";
import { CollapseElement } from "./const";
import { RowComponent } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import { TabulatorFull as Tabulator } from "tabulator-tables";

export default function ZDSTabulatorTable({
  id,
  data,
  columns,
  dataTree,
  search,
  setTable,
  dataTreeBranchElement,
  dataTreeStartExpanded = false,
  extraColumns,
  dataTreeStartExpandedFn,
  columnBackground,
  firstColumnBackground,
  firstCellBackground,
  rowHoverBorderColor,
  boxWidth,
  minHeight,
  borderStyle,
  borderColor,
  columnHeaderTitleFontSize,
  columnHeaderTitleFontWeight,
  columnHeaderTitleColor,
  rowHoverBackground,
  cellFontSize,
  cellFocusOutline,
  cellActiveOutline,
  sx,
  ...otherProps
}: Readonly<TableProps>) {
  const tableBuiltRef = React.useRef(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [expandedCount, setExpandedCount] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      if (dataTreeStartExpanded) {
        dataTreeStartExpanded = Boolean(dataTreeStartExpanded);
      } else if (dataTreeStartExpandedFn) {
        dataTreeStartExpanded = dataTreeStartExpandedFn;
      }
      const table = new Tabulator(ref.current, {
        height: data.length > 20 ? "500px" : "auto",
        data,
        selectable: false,
        reactiveData: true,
        layout: "fitDataFill",
        columns,
        dataTreeChildIndent: 10,
        dataTree,
        renderVertical: "virtual",
        renderVerticalBuffer: 100,
        dataTreeExpandElement: ExpandElement,
        dataTreeCollapseElement: CollapseElement,
        dataTreeBranchElement,
        dataTreeStartExpanded,
        ...otherProps,
      });

      table.on("dataTreeRowExpanded", (_: RowComponent, level: number) => {
        if (level === 0) {
          setExpandedCount((prev) => prev + 1);
        }
      });
      table.on("dataTreeRowCollapsed", (_: RowComponent, level: number) => {
        if (level === 0) {
          setExpandedCount((prev) => prev - 1);
        }
      });
      table.on("tableBuilt", () => {
        tableBuiltRef.current = true;
      });

      if (dataTreeStartExpanded || dataTreeStartExpandedFn) {
        setTimeout(() => {
          table.redraw();
        }, 500);
      }

      if (setTable) {
        setTable(table);
      }
    }
  }, []);

  React.useEffect(() => {
    if (ref.current && tableBuiltRef.current) {
      const tables = Tabulator.findTable(`#${id}`);
      if (tables.length > 0 && tables[0]) {
        tables[0].replaceData(data);
      }
    }
  }, [data, tableBuiltRef.current]);

  React.useEffect(() => {
    if (ref.current) {
      const tables = Tabulator.findTable(`#${id}`);
      if (tables.length > 0 && tables[0]) {
        if (expandedCount > 0 && extraColumns && extraColumns.length > 0) {
          tables[0].setColumns(columns.concat(extraColumns));
        } else {
          setTimeout(() => {
            tables[0].setColumns(columns);
          }, 1);
        }
      }
    }
  }, [expandedCount, columns, extraColumns]);

  return (
    <Box
      ref={ref}
      id={id}
      border="1px solid #CFD4DA"
      data-cy="table"
      sx={{
        ".tabulator-col-title, .tabulator-cell": {
          color: columnHeaderTitleColor ?? "#373D43",
          fontSize: cellFontSize ?? "12px",
        },
        ".tabulator-col-content, .tabulator-cell": {
          // background: tabularStyling.cellBackground ?? "#F1F3F5",
        },
        ".tabulator-col-title": {
          fontWeight: columnHeaderTitleFontWeight ?? "bold",
        },
        ".tabulator-header": {
          borderColor: borderColor ?? "#CFD4DA",
        },
        ".tabulator-col": {
          background: columnBackground ?? "#F1F3F5 !important",
          "&:first-of-type": {
            background: firstColumnBackground ?? "#DFE3E5 !important",
          },
        },
        ".tabulator-row": {
          "> .tabulator-cell:first-of-type": {
            background: firstCellBackground ?? "#F1F3F5 !important",
          },
          "&:hover": {
            background: rowHoverBackground ?? "#F1F3F5",
            borderColor: rowHoverBorderColor ?? "#CFD4DA",
          },
        },
        ...sx,
      }}
    />
  );
}
