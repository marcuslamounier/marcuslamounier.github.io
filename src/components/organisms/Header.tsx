import { Box, Image, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      width={{ base: "100%", lg: "30%" }}
      display={{ base: "block", lg: "flex" }}
      flex={{ base: "0 1 auto", lg: "inherit" }}
      padding={{ base: "1.5em 1.5em", "2xl": "8em 4em" }}
      paddingTop={{ base: "4em", lg: "6em" }}
      backgroundAttachment={{
        lg: "scroll, scroll",
        base: "scroll",
      }}
      backgroundPosition={{
        lg: "0 0, 0 0 !important",
        base: "0 0, center center !important",
      }}
      left={{ base: 0, lg: "auto" }}
      flexDir="column"
      alignItems="flex-end"
      justifyContent="space-between"
      backgroundColor="gray.900"
      backgroundImage={`url("images/css/overlay.png"), url("../../images/bg.jpg")`}
      backgroundRepeat="no-repeat, no-repeat"
      backgroundSize={{ md: "100%, 130%", base: "cover, cover" }}
      color="rgba(255, 255, 255, 0.5)"
      height={{ base: "auto", lg: "calc(100vh - 35px)" }}
      maxHeight="100vh"
      position={{ lg: "inherit", base: "relative" }}
      textAlign={{ lg: "right", base: "center" }}
      zIndex={{ base: "auto", lg: 1 }}
      top={0}
      __css={{
        ">*": {
          flexShrink: 0,
          width: "100%",
        },
      }}
    >
      {/* <Menu /> */}
      <Box as="div" flexGrow={1} margin={"0 0 2em 0"}>
        <Link
          href="/"
          margin="0 0 1em 0"
          width="6.25em"
          display="inline-block"
          border="none"
          position="relative"
        >
          <Image borderRadius={"100%"} src="images/avatar.jpg" alt="" />
        </Link>
        <Box
          as="div"
          backgroundColor="rgba(0, 0, 0, 0.35)"
          borderRadius="7px"
          padding="10px 20px"
          __css={{
            ">*": {
              lineHeight: "1.75em",
            },
          }}
        >
          <Text fontSize="1.35em" lineHeight="2.5em" mb={0}>
            {`Hello, I'm `}
            <Text as="span" color="white">
              Marcus
            </Text>
            {`!`}
          </Text>
          <Box as="div" fontSize="1.15em">
            <Text mb={0}>Software Engineer and Product Owner.</Text>
            <Text mb={0}>Pleased to meet you.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
