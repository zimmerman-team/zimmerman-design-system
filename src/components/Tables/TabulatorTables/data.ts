import { financialFormatter } from "./const";
import { cellBGColorFormatter } from "./const";
import { CellComponent } from "tabulator-tables";
import { ColumnDefinition } from "tabulator-tables";
import { TabulatorFull as Tabulator } from "tabulator-tables";

export const TABLE_VARIATION_1_COLUMNS: ColumnDefinition[] = [
  { title: "Name", field: "name", width: "20%" },
  {
    title: "Years",
    columns: [
      { title: "2002", field: "2002" },
      { title: "2003", field: "2003" },
      { title: "2004", field: "2004" },
      { title: "2005", field: "2005" },
    ],
    width: "5%",
  },
  {
    title: "Components",
    columns: [
      { title: "HIV", field: "HIV" },
      { title: "Tuberculosis", field: "Tuberculosis" },
      { title: "Malaria", field: "Malaria" },
      { title: "Others", field: "Others" },
    ],
  },
];

export const TABLE_VARIATION_2_COLUMNS: ColumnDefinition[] = [
  {
    title: "Components",
    field: "components",
    formatter: cellBGColorFormatter,
    minWidth: 180,
  },
  {
    title: "Submission Date",
    field: "submissionDate",
    formatter: cellBGColorFormatter,
  },
  { title: "Approach", field: "approach", formatter: cellBGColorFormatter },
  { title: "TRP Window", field: "trpWindow", formatter: cellBGColorFormatter },
  {
    title: "TRP Outcome",
    field: "trpOutcome",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Portfolio Categorization",
    field: "portfolioCategorization",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Board Approval",
    field: "boardApproval",
    formatter: cellBGColorFormatter,
  },
  {
    title: "GAC Meeting",
    field: "gacMeeting",
    formatter: cellBGColorFormatter,
  },
  { title: "Grant", field: "grant", formatter: cellBGColorFormatter },
  {
    title: "Starting date",
    field: "startingDate",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Ending date",
    field: "endingDate",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Principal Recipient",
    field: "principalRecipient",
    formatter: cellBGColorFormatter,
  },
];

export const TABLE_VARIATION_3_COLUMNS: ColumnDefinition[] = [
  { title: "Location", field: "name", formatter: cellBGColorFormatter },
  { title: "2023", field: "2023", formatter: cellBGColorFormatter },
  { title: "2022", field: "2022", formatter: cellBGColorFormatter },
  { title: "2021", field: "2021", formatter: cellBGColorFormatter },
  { title: "2020", field: "2020", formatter: cellBGColorFormatter },
  { title: "2019", field: "2019", formatter: cellBGColorFormatter },
];

export const TABLE_VARIATION_4_COLUMNS: ColumnDefinition[] = [
  {
    title: "Modules & Coverage Indicators",
    field: "name",
    formatter: cellBGColorFormatter,
    width: "35%",
  },
  {
    title: "Reversed",
    columns: [
      {
        title: "Value",
        field: "reversed",
        formatter: cellBGColorFormatter,
      },
    ],
  },
  {
    title: "Geo. coverage",
    columns: [
      { title: "Value", field: "geoCoverage", formatter: cellBGColorFormatter },
    ],
  },
  {
    title: "Cumulation",
    columns: [
      { title: "Period", field: "cumulation", formatter: cellBGColorFormatter },
    ],
  },
  {
    title: "Baseline",
    columns: [
      {
        title: "Value",
        field: "baselineValue",
        formatter: cellBGColorFormatter,
      },
      {
        title: "Year",
        field: "baselineYear",
        formatter: cellBGColorFormatter,
      },
      {
        title: "Source",
        field: "baselineSource",
        formatter: cellBGColorFormatter,
      },
    ],
  },
  {
    title: "2020",
    field: "2020",
    formatter: (cell: CellComponent) => {
      const tableEl = document.createElement("div");
      cell.getElement().appendChild(tableEl);
      const data = cell.getValue();

      if (!cell.getValue()) {
        return "";
      }

      new Tabulator(tableEl, {
        data,
        layout: "fitDataTable",
        height: "fit-content",
        columns: [
          { title: "Target", field: "target" },
          { title: "Result", field: "result" },
          { title: "Achievement", field: "achievement" },
        ],
      });

      // cell.getElement().style.height = "max-content";
      cell.getElement().style.padding = "0";

      return tableEl;
    },
  },
  {
    title: "2021",
    field: "2021",
    formatter: (cell: CellComponent) => {
      const tableEl = document.createElement("div");
      cell.getElement().appendChild(tableEl);
      const data = cell.getValue();

      if (!cell.getValue()) {
        return "";
      }

      new Tabulator(tableEl, {
        data,
        layout: "fitDataTable",
        height: "fit-content",
        columns: [
          { title: "Target", field: "target" },
          { title: "Result", field: "result" },
          { title: "Achievement", field: "achievement" },
        ],
      });

      // cell.getElement().style.height = "max-content";
      cell.getElement().style.padding = "0";

      return tableEl;
    },
  },
];

export const TABLE_VARIATION_5_COLUMNS: ColumnDefinition[] = [
  {
    title: "Grant ID",
    field: "grantId",
    formatter: (cell: CellComponent) =>
      `<a href="/grant/${cell.getValue()}">${cell.getValue()}</a>`,
    width: "10%",
    minWidth: 150,
  },
  {
    title: "Start/End date",
    field: "startEndDate",
    formatter: cellBGColorFormatter,
    width: "15%",
    minWidth: 150,
  },
  {
    title: "Geography",
    field: "geography",
    formatter: cellBGColorFormatter,
    width: "10%",
    minWidth: 100,
  },
  {
    title: "Component",
    field: "component",
    formatter: cellBGColorFormatter,
    width: "10%",
    minWidth: 100,
  },
  {
    title: "Principal Recipient",
    field: "principalRecipient",
    formatter: cellBGColorFormatter,
    width: "25%",
    minWidth: 250,
  },
  {
    title: "Status",
    field: "status",
    formatter: cellBGColorFormatter,
    width: "10%",
    minWidth: 150,
  },
  {
    title: "Signed (US$)",
    field: "signed",
    formatter: financialFormatter,
    width: "10%",
    minWidth: 150,
  },
  {
    title: "Disbursed (US$)",
    field: "disbursed",
    formatter: financialFormatter,
    width: "10%",
    minWidth: 150,
  },
];

export const TABLE_VARIATION_6_COLUMNS: ColumnDefinition[] = [
  {
    title: "Geography",
    field: "name",
    width: "78%",
    formatter: cellBGColorFormatter,
  },
  {
    width: "20%",
    title: "Documents",
    field: "documents",
    formatter: (cell: CellComponent) => {
      if (typeof cell.getValue() === "string") {
        cell.getElement().style.textAlign = "right";
        return `<a href="${cell.getValue()}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1656 6.7063C10.2326 6.63597 10.3128 6.58 10.4013 6.54169C10.4899 6.50339 10.5851 6.48351 10.6813 6.48324C10.7775 6.48296 10.8728 6.50229 10.9615 6.54009C11.0503 6.5779 11.1308 6.6334 11.1982 6.70335C11.2656 6.7733 11.3186 6.85627 11.354 6.9474C11.3895 7.03852 11.4067 7.13595 11.4047 7.23395C11.4026 7.33195 11.3814 7.42855 11.3422 7.51807C11.303 7.60758 11.2466 7.6882 11.1763 7.75518L8.43516 10.509C8.30006 10.6442 8.11825 10.72 7.92886 10.72C7.73947 10.72 7.55766 10.6442 7.42255 10.509L4.7207 7.79046C4.58418 7.65377 4.50655 7.46743 4.50488 7.27242C4.50322 7.07742 4.57765 6.88973 4.71181 6.75064C4.84596 6.61155 5.02885 6.53245 5.22025 6.53075C5.41164 6.52906 5.59586 6.60489 5.73237 6.74158L7.21947 8.24338L7.23444 2.95417C7.24257 2.76358 7.323 2.58364 7.45879 2.45229C7.59457 2.32093 7.77511 2.24842 7.96234 2.25003C8.14957 2.25163 8.32888 2.32724 8.46248 2.4609C8.59607 2.59457 8.67352 2.77586 8.67849 2.96657L8.66445 8.21096L10.1656 6.7063ZM2.25 13.0453L2.25936 10.1676C2.25686 10.0688 2.27391 9.97051 2.3095 9.87858C2.34508 9.78664 2.39848 9.70295 2.46649 9.63248C2.5345 9.56202 2.61574 9.50624 2.70537 9.46845C2.795 9.43066 2.89117 9.41165 2.98817 9.41255C3.08516 9.41345 3.18098 9.43423 3.26992 9.47367C3.35886 9.51311 3.43909 9.57039 3.50584 9.64209C3.57259 9.7138 3.62448 9.79847 3.65842 9.89105C3.69236 9.98362 3.70766 10.0822 3.70341 10.181L3.69685 12.2787C6.56686 12.2844 9.43405 12.2844 12.2984 12.2787L12.305 10.1695C12.3067 9.97428 12.3845 9.78774 12.5212 9.65095C12.658 9.51415 12.8424 9.43829 13.034 9.44006C13.2256 9.44183 13.4087 9.52108 13.543 9.66039C13.6773 9.79969 13.7517 9.98763 13.75 10.1829L13.7406 13.0434H13.7322C13.7238 13.2314 13.645 13.409 13.512 13.5395C13.379 13.6701 13.2019 13.7437 13.0172 13.7452C9.6649 13.7516 6.31511 13.7516 2.96781 13.7452C2.78287 13.7447 2.60521 13.6718 2.4716 13.5415C2.33799 13.4112 2.25865 13.2336 2.25 13.0453Z" fill="#373D43"/>
        </svg>
        </a>`;
      }
      return cell.getValue();
    },
  },
];

export const TABLE_VARIATION_7_COLUMNS: ColumnDefinition[] = [
  {
    title: "Description",
    field: "description",
    formatter: cellBGColorFormatter,
  },
  { title: "Component", field: "component", formatter: cellBGColorFormatter },
  { title: "Result", field: "result", formatter: financialFormatter },
];

export const TABLE_VARIATION_8_COLUMNS: ColumnDefinition[] = [
  {
    title: "Donors Types & Donors",
    field: "name",
    formatter: cellBGColorFormatter,
    width: "50%",
  },
  {
    title: "Pledge (US$)",
    field: "pledge",
    formatter: financialFormatter,
    width: "25%",
  },
  {
    title: "Contribution (US$)",
    field: "contribution",
    formatter: financialFormatter,
  },
];

export const TABLE_VARIATION_9_COLUMNS: ColumnDefinition[] = [
  {
    title: "Years",
    field: "name",
    formatter: cellBGColorFormatter,
    width: "70%",
  },
  {
    title: "Total Number",
    field: "value",
    formatter: financialFormatter,
    width: "30%",
  },
];

export const TABLE_VARIATION_10_COLUMNS: ColumnDefinition[] = [
  {
    title: "Geography",
    field: "name",
    formatter: cellBGColorFormatter,
    minWidth: 250,
    frozen: true,
  },
  {
    title: "2023",
    field: "2023",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2022",
    field: "2022",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2021",
    field: "2021",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2020",
    field: "2020",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2019",
    field: "2019",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2018",
    field: "2018",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2017",
    field: "2017",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2016",
    field: "2016",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2015",
    field: "2015",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2014",
    field: "2014",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2013",
    field: "2013",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2012",
    field: "2012",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2011",
    field: "2011",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2010",
    field: "2010",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2009",
    field: "2009",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2008",
    field: "2008",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2007",
    field: "2007",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2006",
    field: "2006",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2005",
    field: "2005",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2004",
    field: "2004",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
  {
    title: "2003",
    field: "2003",
    formatter: cellBGColorFormatter,
    maxWidth: 70,
  },
];

export const TABLE_VARIATION_11_COLUMNS: ColumnDefinition[] = [
  {
    title: "Geography",
    field: "name",
    formatter: cellBGColorFormatter,
    width: "25%",
  },
  {
    title: "2017 - 2019 (US$)",
    field: "2017-2019",
    formatter: financialFormatter,
    width: "20%",
  },
  {
    title: "2020 - 2022 (US$)",
    field: "2020-2022",
    formatter: financialFormatter,
    width: "20%",
  },
  {
    title: "2023 - 2025 (US$)",
    field: "2023-2025",
    formatter: financialFormatter,
    width: "20%",
  },
];

export const TABLE_VARIATION_12_COLUMNS: ColumnDefinition[] = [
  {
    title: "Components",
    field: "components",
    formatter: cellBGColorFormatter,
    width: "20%",
  },
  {
    title: "Submission Date",
    field: "submissionDate",
    formatter: cellBGColorFormatter,
  },
  { title: "Approach", field: "approach", formatter: cellBGColorFormatter },
  { title: "TRP Window", field: "trpWindow", formatter: cellBGColorFormatter },
  {
    title: "TRP Outcome",
    field: "trpOutcome",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Portfolio Categorization",
    field: "portfolioCategorization",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Board Approval",
    field: "boardApproval",
    formatter: cellBGColorFormatter,
  },
  {
    title: "GAC Meeting",
    field: "gacMeeting",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Starting date",
    field: "startingDate",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Ending date",
    field: "endingDate",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Principal Recipient",
    field: "principalRecipient",
    formatter: cellBGColorFormatter,
  },
];

export const TABLE_VARIATION_13_COLUMNS: ColumnDefinition[] = [
  {
    title: "Components",
    field: "component",
    width: "25%",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Signed (US$)",
    field: "signed",
    width: "25%",
    formatter: financialFormatter,
  },
  {
    title: "Committed (US$)",
    field: "committed",
    width: "25%",
    formatter: financialFormatter,
  },
  {
    title: "Disbursed (US$)",
    field: "disbursed",
    width: "25%",
    formatter: financialFormatter,
  },
];

export const TABLE_VARIATION_14_COLUMNS: ColumnDefinition[] = [
  {
    title: "Investment Landscapes & Cost Category",
    field: "name",
    width: "70%",
    formatter: cellBGColorFormatter,
  },
  // {
  //   title: "Grants",
  //   field: "grants",
  //   width: "30%",
  //   formatter: financialFormatter,
  // },
  {
    title: "Budget Amount (US$)",
    field: "amount",
    width: "30%",
    formatter: financialFormatter,
  },
];

export const TABLE_VARIATION_15_COLUMNS: ColumnDefinition[] = [
  {
    title: "Modules & Interventions",
    field: "name",
    width: "40%",
    formatter: cellBGColorFormatter,
  },
  {
    title: "Cumulative Expenditure",
    field: "cumulativeExpenditure",
    width: "30%",
    formatter: financialFormatter,
  },
  {
    title: "Expenditure For Reported Period",
    field: "periodExpenditure",
    width: "30%",
    formatter: financialFormatter,
  },
];
