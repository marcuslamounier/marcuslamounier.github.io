import { Grid } from "@chakra-ui/react";
import { highlightedJobs } from "../data/jobs";
import CustomLink from "./atoms/CustomLink";
import PortfolioCard from "./organisms/PortfolioCard";
import Section from "./organisms/Section";

const PortfolioBrief = () => {
  return (
    <Section title="Recent Work">
      {/* <Grid templateColumns="repeat(5, 1fr)" gap={6}> */}
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
      <CustomLink
        url="/portfolio"
        label="View complete portfolio..."
      />
    </Section>
  );
};

export default PortfolioBrief;
