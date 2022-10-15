import {
  Breadcrumb,
  BreadcrumbItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  path: String;
};

export const CustomBreadcrumb = ({ path }: Props) => {
  return (
    <Breadcrumb fontStyle="italic" mb={4}>
      <BreadcrumbItem isCurrentPage={path === "Home"}>
        {path === "Home" ? (
          <Text as="span">Home</Text>
        ) : (
          <Link to="/">Home</Link>
        )}
      </BreadcrumbItem>

      {path !== "Home" && (
        <BreadcrumbItem isCurrentPage>
          <Text as="span">{path}</Text>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
