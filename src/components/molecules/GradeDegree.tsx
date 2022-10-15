import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  grade: number;
};

const colors = ["blue.500", "blue.300", "blue.200"];

const GradeDegree = ({ grade }: Props) => {
  return (
    <Grid
      as="span"
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
            bg={grade >= 3 - el ? colors[el] : "gray.50"}
          />
        );
      })}
    </Grid>
  );
};

export default GradeDegree;
