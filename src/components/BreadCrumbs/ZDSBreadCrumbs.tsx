/** @jsxImportSource @emotion/react */
import React from "react";
import { colors } from "theme";
import Link from "@mui/material/Link";
import { BreadCrumbsProps } from "./interface";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function ZDSBreadCrumbs(props: Readonly<BreadCrumbsProps>) {
  const {
    sx,
    items,
    separator = "/",
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    expandText = "Show more",
  } = props;

  return (
    <Breadcrumbs
      sx={sx}
      separator={separator}
      maxItems={maxItems}
      itemsBeforeCollapse={itemsBeforeCollapse}
      itemsAfterCollapse={itemsAfterCollapse}
      expandText={expandText}
      aria-label="breadcrumb"
    >
      {items.map((item, index) =>
        item.link ? (
          <Link
            key={index}
            href={item.link}
            onClick={item.onClick}
            {...item.linkProps}
          >
            <Typography
              key={index}
              variant="h6"
              fontSize="12px"
              fontWeight="400"
              component="span"
              textDecoration="none"
              {...item.typographyProps}
            >
              {item.icon}
              {item.title}
            </Typography>
          </Link>
        ) : (
          <Typography
            key={index}
            variant="h6"
            fontSize="12px"
            fontWeight="400"
            component="span"
            textDecoration="none"
            {...item.typographyProps}
          >
            {item.icon}
            {item.title}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
