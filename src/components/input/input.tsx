/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function Input({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  return (
    <div>
      <input
        type="text"
        css={css`
          display: flex;
          width: 236px;
          height: 32px;
          padding: 4px 8px;
          align-items: center;
          align-content: center;
          gap: 8px;
          flex-wrap: wrap;
          border-radius: 5px;
          background: ${backgroundColor ?? "#ebebeb"};
          border: none;
        `}
      />
    </div>
  );
}
