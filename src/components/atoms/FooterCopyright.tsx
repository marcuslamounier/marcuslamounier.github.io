import packageInfo from "../../../package.json";
import { Flex } from "@chakra-ui/react";

const version = packageInfo.version;

export const FooterCopyright = () => {
  return (
    <Flex
      as="div"
      justifyContent="flex-end"
      padding="10px 0"
      fontSize="0.8em"
    >
      Copyright &copy; {new Date().getFullYear()} | Marcus V |
      v{version}
    </Flex>
  );
};
