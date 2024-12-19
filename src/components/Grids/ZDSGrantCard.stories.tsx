import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { withRouter } from "storybook-addon-remix-react-router";
import { ZDSGrantCard } from "./ZDSGrantCard";

const meta = {
  title: "Example/Grid",
  component: ZDSGrantCard,
  // decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ZDSGrantCard>;

export default meta;
type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {
  args: {
    status: "Active",
    location: "Afghanistan",
    rating: "B1",
    component: "HIV",
    number: "AZE-M-MOH",
    principalRecipient: "Ministry of Health Ghana",
    startDate: "12.02.2021",
    endDate: "12.02.2023",
    title:
      "Scaling up the response to the HIV epidemic through strengthening national capacities",
    signed: 1000000,
    disbursed: 1000000,
    percentage: 80.5,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=1889-47467&t=o2z1XhZ3yrBk16Ym-4",
      },
      {
        type: "link",
        url: "https://www.figma.com/design/U3wokyt1snyPxQyHWytR0v/GLOBAL-FUND---V3?node-id=1889-47467&t=o2z1XhZ3yrBk16Ym-4",
      },
    ],
  },
};
