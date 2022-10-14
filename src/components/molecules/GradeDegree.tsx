import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  grade: number;
};

// const colors = ["green.500", "yellow.300", "red.200"];
const colors = ["green.300", "teal.200", "yellow.200"];

const GradeDegree = ({ grade }: Props) => {
  return (
    <Grid
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
            bg={grade >= 3 - el ? colors[el] : "none"}
          />
        );
      })}
    </Grid>
  );
};

export default GradeDegree;
