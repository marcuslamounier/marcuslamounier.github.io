import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  grade: number;
};

const GradeDegree = ({ grade }: Props) => {
  return (
    <Grid
      pr={3}
      placeItems="flex-end"
      w="100%"
      templateRows="repeat(3, 1fr)"
      gap={1}
    >
      {Array.from([0, 1, 2]).map((el) => {
        return (
          <GridItem
            key={el}
            w={`${100 - el * 25}%`}
            h="10px"
            borderRadius="5px"
            bg={grade >= 3 - el ? "blue.500" : "gray.200"}
          />
        );
      })}
    </Grid>
  );
};

export default GradeDegree;
