import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: "#49bf9d",
    borderBottom: "dotted 1px",
    MozTransition:
      "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    WebkitTransition:
      "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    msTransition:
      "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    transition:
      "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    textDecoration: "none",
    _hover: {
      borderBottomColor: "transparent",
      color: "gray.100 !important",
      textDecoration: "none",
    },
  },
};
