import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    bg: "brand.secondary",
    color: "brand.primary",
    p: "1rem",
    fontSize: "2rem",
    borderRadius: "0.25rem",
    transition: "all 0.25s ease",
    _hover: {
      opacity: 0.8,
      filter: "saturate(2)",
    },
  },
  variants: {
    ghost: {
      bg: "transparent",
      color: "inherit",
      padding: "initial",
      border: "transparent",
    },
  },
});
