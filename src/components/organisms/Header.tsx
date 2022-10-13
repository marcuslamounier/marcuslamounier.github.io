import { Box, Image, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      backgroundImage={`url("../../images/bg.jpg")`}
      backgroundPosition={{ base: "center center", lg: "top center" }}
      backgroundSize={{ md: "130%", base: "cover" }}
      backgroundRepeat="no-repeat"
      backgroundBlendMode="difference"
      backgroundColor="gray.900"
      width={{ base: "100%", lg: "30%" }}
      display={{ base: "block", lg: "flex" }}
      flex={{ base: "0 1 auto", lg: "inherit" }}
      padding={{ base: "1.5em 1.5em", "2xl": "8em 4em" }}
      marginTop={{ base: "auto", lg: "35px" }}
      paddingTop="4em"
      flexDir="column"
      alignItems="flex-end"
      justifyContent="space-between"
      height={{ base: "auto", lg: "calc(100vh - 35px)" }}
      maxHeight="100vh"
      textAlign={{ lg: "right", base: "center" }}
      zIndex={{ base: "auto", lg: 1 }}
      __css={{
        ">*": {
          flexShrink: 0,
          width: "100%",
        },
      }}
    >
      <Box as="div" flexGrow={1} margin={"0 0 2em 0"}>
        <Link
          href="/"
          margin="0 0 1em 0"
          width="6.25em"
          display="inline-block"
          border="none"
          position="relative"
        >
          <Image
            borderRadius={"100%"}
            src="images/avatar.jpg"
            alt=""
          />
        </Link>
        <Box
          as="div"
          backgroundColor="rgba(0, 0, 0, 0.55)"
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
            <Text mb={0}>
              Software Engineer and Product Owner.
            </Text>
            <Text mb={0}>Pleased to meet you.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
