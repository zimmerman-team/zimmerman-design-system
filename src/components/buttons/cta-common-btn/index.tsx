import React from "react";
import colors from '../../../theme/colors';
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import {
  CtaCommonBtnProps,
  CtaCommonBtnVariantStyles,
} from "./data";
import { Color } from "@mui/material";

export const CtaCommonBtn: React.FC<CtaCommonBtnProps> = (
  props: CtaCommonBtnProps
) => {
  const navigate = useNavigate();

  const variantStyles = React.useMemo(() => {
    return CtaCommonBtnVariantStyles[props.variant];
  }, [props.variant]);

  const handleClick = React.useCallback(() => {
    if (props.link) {
      navigate(props.link);
    }
  }, [props.link]);

  return (
    <ButtonBase
      sx={{
        ...variantStyles,
        gap: "15px",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "flex-start",
        background: colors.primary[props.bgColor ?? "blue"],
        ":hover": {
          background: colors.shades[props.bgColor as keyof typeof colors.shades ?? "blue"][400],
          "> svg": {
            background: colors.shades[props.bgColor as keyof typeof colors.shades?? "blue"][500],
          },
          "> div > svg": {
            path: {
              fill: colors.shades[props.bgColor as keyof typeof colors.shades ?? "blue"][500],
            },
          },
        },
      }}
      onClick={handleClick}
    >
      <Typography
        zIndex={1}
        fontWeight="700"
        textAlign="start"
        maxWidth="calc(100% - 60px)"
        color={colors.primary.white}
        fontSize={variantStyles.fontSize}
      >
        {props.label}
      </Typography>
      {props.text && (
        <Typography
          zIndex={1}
          fontSize="12px"
          fontWeight="700"
          textAlign="start"
          color={colors.primary.white}
        >
          {props.text}
        </Typography>
      )}
      {props.bgIcon && (
        <Box
          sx={{
            ...variantStyles.icon,
            zIndex: 0,
            position: "absolute",
            color: colors.primary.white,
          }}
        >
          {props.bgIcon}
        </Box>
      )}
      <ArrowOutward
        htmlColor={colors.primary.white}
        fontSize="small"
        sx={{
          ...variantStyles.arrowIconButton,
          zIndex: 1,
          padding: 0,
          borderRadius: "50%",
          position: "absolute",
          background: colors.shades[props.bgColor as keyof typeof colors.shades ?? "blue"][200],
          ":hover": {
            background: colors.shades[props.bgColor  as keyof typeof colors.shades ?? "blue"][500],
          },
        }}
      />
    </ButtonBase>
  );
};
