import {
  Badge,
  Box,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { JobType } from "../../types/JobType";
import TechIcon from "../atoms/TechIcon";

type Props = {
  job: JobType;
  isBrief?: Boolean;
};

const PortfolioCard = ({ job, isBrief = true }: Props) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={`${job.imageUrl}`} alt={`${job.name}`} />
      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {job.sector}
            {job.private && (
              <Badge
                borderRadius="full"
                ml={2}
                px={2}
                colorScheme="red"
              >
                Private
              </Badge>
            )}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {job.name}
        </Box>
        <Text as="p" lineHeight="tight" my={2}>
          {isBrief
            ? job.descriptionBrief || job.description
            : job.description}
        </Text>

        {job.techs.length > 0 && (
          <>
            <Text as="p" mb={2} fontSize="sm">
              Skills used:
            </Text>
            <Box display="contents" alignItems="center">
              {job.techs.map((tech, index) => {
                return (
                  <Box
                    as="div"
                    display="inline-flex"
                    alignItems="center"
                    pr={2}
                  >
                    <Icon key={index} as={TechIcon(tech)} />
                    {!isBrief && (
                      <Text as="span" fontSize="sm" px={1}>
                        {tech}
                      </Text>
                    )}
                  </Box>
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioCard;
