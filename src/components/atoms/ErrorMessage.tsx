import { Text } from "@chakra-ui/react";

type Props = {
  label: String;
};

export const ErrorMessage = ({ label }: Props) => {
  return (
    <Text as="p" fontWeight={600} color="danger" fontSize="lg">
      {label}
    </Text>
  );
};
