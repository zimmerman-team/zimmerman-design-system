/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type ButtonProps = {
  filled: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  icon?: {
    component: React.ReactNode;
    position: "left" | "right";
  };
  color?: string;
  radius: "rounded" | "sharp" | "circle";
};

export default function Button(props: ButtonProps) {
  const { filled, backgroundColor, size, label, onClick, icon, color, radius } =
    props;
  const radiusSize = {
    rounded: "30px",
    sharp: "5px",
    circle: "50%",
  };
  return (
    <button
      css={css`
        padding: 7px 24px;
        background-color: ${filled ? backgroundColor : "transparent"};
        font-size: 14px;
        font-family: "Inter", sans-serif;
        border-radius: ${radiusSize[radius]};
        border: ${!filled ? `1px solid ${backgroundColor}` : "none"};
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${icon?.position === "left" ? "row" : "row-reverse"};
        cursor: pointer;
        color: ${color};
        gap: 5px;
        &:hover {
          color: ${color};
        }
      `}
      onClick={onClick}
    >
      {icon && icon.component} {label}
    </button>
  );
}
