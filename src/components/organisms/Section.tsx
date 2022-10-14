import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: String;
};

const Section = ({ children, title }: Props) => {
  return (
    <Box
      as="section"
      __css={{
        p: {
          textAlign: "justify",
          //   "&:last-of-type": {
          //     mb: 0,
          //   },
        },
        ">*": {
          "&:last-child": {
            mb: 0,
          },
        },
      }}
    >
      <Heading as="h2">{title}</Heading>
      {children}
    </Box>
  );
};

export default Section;
