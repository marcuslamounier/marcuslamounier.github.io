import { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  url: String;
  isCurrent?: boolean;
};

const CustomLink = ({
  children,
  url,
  isCurrent = false,
}: Props) => {
  return (
    <ChakraLink
      as="span"
      color={isCurrent ? "white" : "inherit"}
      borderBottomStyle={isCurrent ? "none" : "inherit"}
    >
      <RouterLink to={`${url}`}>{children}</RouterLink>
    </ChakraLink>
  );
};

export default CustomLink;
