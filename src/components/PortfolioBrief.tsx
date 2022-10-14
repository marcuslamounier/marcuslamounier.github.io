import { Grid, Text } from "@chakra-ui/react";
import { highlightedJobs } from "../data/jobs";
import PortfolioCard from "./organisms/PortfolioCard";

const PortfolioBrief = () => {
  return (
    <>
      <Text as="p">
        Recent projects I worked...
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        mb={4}
        gap={6}
      >
        {highlightedJobs.map((job, index) => (
          <PortfolioCard isBrief key={index} job={job} />
        ))}
      </Grid>
    </>
  );
};

export default PortfolioBrief;
