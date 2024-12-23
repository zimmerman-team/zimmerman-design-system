import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";

// Custom toolbar component for the DataGrid
export const CustomToolbar = () => (
  <GridToolbarContainer>
    <GridToolbarQuickFilter />
    <button>Custom Filter</button>
    <button>Custom Add File</button>
    <button>Custom Columns</button>
    <button>Custom Sort</button>
  </GridToolbarContainer>
);
