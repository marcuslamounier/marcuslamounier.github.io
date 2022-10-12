import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: "#49bf9d",
    borderBottom: "dotted 1px",
    "-moz-transition": "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    "-webkit-transition":
      "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    "-ms-transition": "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    transition: "color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    textDecoration: "none",
    _hover: {
      borderBottomColor: "transparent",
      color: "gray.100 !important",
      textDecoration: "none",
    },
  },
};
