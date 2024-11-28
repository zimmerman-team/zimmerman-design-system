import colors from "../../../theme/colors";
export interface CtaCommonBtnProps {
  label: string;
  text?: string;
  link?: string;
  onClick?: () => void;
  bgIcon?: React.ReactNode;
  bgColor?: keyof typeof colors.primary;
  variant: "footer" | "small" | "medium" | "large";
}

export const CtaCommonBtnVariantStyles = {
  footer: {
    width: "205px",
    height: "68px",
    fontSize: "14px",
    padding: "0 14px",
    icon: {
      top: "13px",
      right: "14px",
    },
    arrowIconButton: {
      top: "6px",
      right: "7px",
    },
  },
  small: {
    width: "180px",
    height: "120px",
    fontSize: "18px",
    padding: "0 20px",
    icon: {
      top: "24px",
      right: "25px",
    },
    arrowIconButton: {
      top: "20px",
      right: "20px",
    },
  },
  medium: {
    width: "245px",
    height: "120px",
    fontSize: "18px",
    padding: "0 20px",
    icon: {
      top: "25px",
      right: "25px",
    },
    arrowIconButton: {
      top: "20px",
      right: "25px",
    },
  },
  large: {
    width: "645px",
    height: "129px",
    fontSize: "30px",
    padding: "0 20px",
    icon: {
      top: "25px",
      right: "24px",
    },
    arrowIconButton: {
      top: "20px",
      right: "19px",
    },
  },
};
