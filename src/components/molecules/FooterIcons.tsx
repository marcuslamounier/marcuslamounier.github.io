import { HStack, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type IconProps = {
  icon: IconType;
  url: String;
};

const icons: IconProps[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/marcuslamounier",
  },
  {
    icon: FaGithubSquare,
    url: "https://github.com/marcuslamounier",
  },
];

const FooterIcons = () => {
  return (
    <HStack justifyContent="flex-end">
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={`${icon.url}`} color="gray.500">
            <Icon boxSize={"2em"} as={icon.icon} />
          </Link>
        );
      })}
    </HStack>
  );
};

export default FooterIcons;
