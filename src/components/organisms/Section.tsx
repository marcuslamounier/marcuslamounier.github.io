import { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  title: String;
};

export const Section = ({ children, title }: Props) => {
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
