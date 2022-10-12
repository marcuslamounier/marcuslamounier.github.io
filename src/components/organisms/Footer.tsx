import { Box } from "@chakra-ui/react";
import FooterCopyright from "../atoms/FooterCopyright";
import FooterIcons from "../molecules/FooterIcons";

// background-attachment: scroll;
// background-color: #1f1815;
// background-image: url(images/overlay.png), url(../../images/bg.jpg);
// background-position: top left, bottom center;
// background-position-x: left, center;
// background-position-y: top, bottom;
// background-repeat: repeat, no-repeat;
// background-size: auto, cover;
// bottom: auto;
// left: auto;
// padding: 4em 4em 6em 4em;
// position: relative;
// text-align: center;
// width: 100%;

const Footer = () => {
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

export default Footer;
