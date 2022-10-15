import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactNode;
};

export const PageTemplate = ({ children }: Props) => {
  return (
    <Flex
      as="div"
      maxW="100%"
      minH="100vh"
      w="100vw"
      flexFlow={{ base: "column", lg: "inherit" }}
    >
      <Header />
      <Box
        id="main"
        as="div"
        position={{ base: "inherit", lg: "fixed" }}
        pl={{ base: "inherit", lg: "30vw" }}
        pt={{ base: "inherit", lg: "35px" }}
        w="100vw"
        h={{ base: "auto", lg: "100vh" }}
        flex={{ base: "1 1 auto", lg: "inherit" }}
        overflow="auto"
      >
        <Box
          as="div"
          px={{ base: 4, md: 8, lg: 16 }}
          py={{ base: 6, md: 14 }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
