import { ArrowRight } from "@mui/icons-material";
import { Box, SxProps, TableCellProps, Typography } from "@mui/material";
import { ReactComponent as ListIcon } from "../../../assets/AIDA/vectors/GenericListIcon.svg";
import { CircleFlag } from "react-circle-flags";
import { TableHeadProps } from "./interface";

export const SAMPLE_LOCATION_COLUMNS: TableHeadProps[] = [
  {
    headerId: "code",
    label: "Code",
    headerWidth: 50,
  },
  {
    headerId: "location",
    label: "Location",
    headerWidth: 200,
    headerAlign: "left",
    renderCell: (params: any) => (
      <Box display={"flex"} alignItems={"center"} columnGap={"8px"}>
        <CircleFlag
          width={20}
          height={20}
          countryCode={params.row.code.toLowerCase()}
        />

        <Typography variant="body2" fontSize={"12px"}>
          {params.value}
        </Typography>
      </Box>
    ),
  },
  {
    headerId: "relatedContent",
    label: "Related Content",
    headerWidth: 726,
    renderCell: (params: any) => (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} columnGap={"10px"}>
          <ListIcon />
          <Typography variant="body2" fontSize={"12px"}>
            {params.value}
          </Typography>
        </Box>
        <ArrowRight />
      </Box>
    ),
  },
];
