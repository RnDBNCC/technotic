import { css } from "@emotion/css";
import ColorSystem from "../ColorSystem/index";

const BTN_PADDING = {
  SMALL: "0.25rem 0.5rem",
  MEDIUM: "0.5rem 1rem",
  LARGE: "1.5rem 2rem",
}

export const styButton = css({
  display: "flex",
  alignItems: "center",
  "&.small": {
    padding: BTN_PADDING.SMALL,
  },
  "&.medium": {
    padding: BTN_PADDING.MEDIUM,
  },
  "&.large": {
    padding: BTN_PADDING.LARGE,
  },
});

export const styPrimaryButton = css({
  border: "none",
  backgroundColor: ColorSystem.BLUE500,
  borderRadius: "0.8rem",
  outline: "none",
  color: "#F0FEFF",
  gap: "0.5rem",
  "&:hover": {
    backgroundColor: "#296675",
    cursor: "pointer",
  },
});

export const stySecondaryButton = css({
  border: "none",
  backgroundColor: "#FF0000",
  "&:hover": {
    backgroundColor: "#296675",
    cursor: "pointer",
  },
});

export const styLinkButton = css({
  border: "none",
  backgroundColor: "transparent",
  "&:hover": {
    cursor: "pointer",
  },
});
