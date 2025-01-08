import { appColors } from "theme";
import { formatLocale } from "app/utils/formatLocale";
import { CellComponent } from "tabulator-tables";

export const ExpandElement = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:0
 4px -4px 0;position:absolute;right:0;"><path d="M3.88754 5L2.75 6.13754L8.43766 11.8252L14.1253 6.13756L12.9878 5.00002L8.43768 9.55015L3.88754 5Z" fill="#373D43"/></svg>`;
export const CollapseElement = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:0 4px -4px 
0;position:absolute;right:0;"><path d="M13.348 11.3986L14.4144 10.3322L9.08223 5L3.75 10.3322L4.81644 11.3987L9.08223 7.13287L13.348 11.3986Z" fill="#373D43"/></svg>`;

/**
 * Used in Tabulator Column Variants
 * @param cell  The cell component to format.
 * @returns The text content of the cell.
 */
export const cellBGColorFormatter = (cell: CellComponent) => {
  const cellValue = cell.getValue();
  let text = "";
  let backgroundColor = "#FFFFFF";
  if (!cellValue) {
    backgroundColor = "#DFE3E5";
  } else {
    switch (cellValue) {
      case "Eligible":
        backgroundColor = "#013E77";
        break;
      case "Transition Funding":
        backgroundColor = "#00B5AE";
        break;
      case "Not Eligible":
        backgroundColor = "#D9D9D9";
        break;
      case "Extreme":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[0];
        break;
      case "Severe":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[1];
        break;
      case "High":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[2];
        break;
      case "Not High":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[3];
        break;
      case "Moderate":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[4];
        break;
      case "Low":
        backgroundColor = appColors.ELIGIBILITY.DISEASE_BURDEN_COLORS[5];
        break;
      case "NA":
        break;
      default:
        text = cellValue.toString();
        break;
    }
  }
  if (cell.getRow().getTreeChildren().length > 0) {
    cell.getElement().style.fontWeight = "bold";
    backgroundColor = "#FFFFFF";
  }
  cell.getElement().style.backgroundColor = backgroundColor;
  cell.getElement().style.whiteSpace = "pre-wrap";
  return text;
};

/**
 * Used in Tabulator Column Variants
 * @param cell  The cell component to format.
 * @returns Either the formatted cell value or the cellBGColorFormatter.
 */
export const financialFormatter = (cell: CellComponent) => {
  if (!cell.getValue()) {
    return cellBGColorFormatter(cell);
  }
  cell.getElement().style.backgroundColor = "#FFFFFF";
  return formatLocale(cell.getValue()).replace("US$", "");
};
