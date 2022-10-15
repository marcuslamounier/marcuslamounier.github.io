import { Link } from "react-router-dom";
import { ErrorMessage } from "../atoms/ErrorMessage";

type Props = {
  label: String;
};

export const ErrorPageNotFound = ({ label }: Props) => {
  return (
    <>
      <ErrorMessage label={label} />
      <Link to="/">Return to Home.</Link>
    </>
  );
};
