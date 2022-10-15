import { Box } from "@chakra-ui/react";
import {FooterCopyright} from "../atoms/FooterCopyright";
import {FooterIcons} from "../molecules/FooterIcons";

export const Footer = () => {
  return (
    <Box
      as="footer"
      display={{ base: "block", lg: "flex" }}
      color="rgba(255, 255, 255, 0.5)"
      width={{ base: "100vw", lg: "30%" }}
      maxW="100%"
      position={{ base: "relative", lg: "fixed" }}
      bottom={{ base: "auto", lg: "0" }}
      padding="2em"
      flex={{ base: "0 1 auto", lg: "inherit" }}
      backgroundColor="gray.900"
      zIndex={{ base: "auto", lg: 1 }}
    >
      <Box as="div" flex="auto">
        <FooterIcons />
        <FooterCopyright />
      </Box>
    </Box>
  );
};
