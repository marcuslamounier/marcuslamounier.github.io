import { Grid } from "@chakra-ui/react";
import { jobHistory } from "../data/jobs";
import PortfolioCard from "./organisms/PortfolioCard";
import Section from "./organisms/Section";

const Portfolio = () => {
  return (
    <Section title="Portfolio">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        mb={4}
        gap={6}
      >
        {jobHistory.map((job, index) => (
          <PortfolioCard isBrief={false} key={index} job={job} />
        ))}
      </Grid>
    </Section>
  );
};

export default Portfolio;
