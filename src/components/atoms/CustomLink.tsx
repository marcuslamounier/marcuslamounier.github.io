import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  label: String;
  url: String;
  isCurrent?: boolean;
};

const CustomLink = ({ label, url, isCurrent = false }: Props) => {
  return (
    <RouterLink to={`${url}`}>
      <ChakraLink
        color={isCurrent ? "white" : "inherit"}
        borderBottomStyle={isCurrent ? "none" : "inherit"}
      >
        {label}
      </ChakraLink>
    </RouterLink>
  );
};

export default CustomLink;
