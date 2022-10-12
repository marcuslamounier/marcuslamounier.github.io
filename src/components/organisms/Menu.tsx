import { Box, HStack, StackDivider } from "@chakra-ui/react";
import { RoutesInfo } from "../../routes";
import CustomLink from "../atoms/CustomLink";

type Props = {
  path: String;
};

const Menu = ({ path }: Props) => {
  return (
    <Box
      as="nav"
      backgroundColor="rgba(0, 0, 0, 0.75)"
      h="35px"
      position="fixed"
      zIndex={1}
      top={0}
      left={0}
      width="100vw"
      display="block"
      paddingRight={{ base: "auto", lg: "6em" }}
    >
      <HStack
        h="35px"
        as="div"
        spacing={3}
        justifyContent={{ base: "center", lg: "flex-end" }}
        divider={<StackDivider borderColor="link" h="1em" alignSelf="center" />}
      >
        {RoutesInfo.map((menuItem, index) => (
          <CustomLink
            key={index}
            label={`${menuItem.title}`}
            url={`${menuItem.path}`}
            isCurrent={menuItem.title === path}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Menu;
