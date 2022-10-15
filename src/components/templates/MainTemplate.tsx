import { ReactNode } from "react";
import { CustomBreadcrumb } from "../organisms/CustomBreadcrumb";
import { Menu } from "../organisms/Menu";

type Props = {
  children: ReactNode;
  title: String;
};

export const MainTemplate = ({ children, title }: Props) => {
  return (
    <>
      <Menu path={title} />
      <CustomBreadcrumb path={title} />
      {children}
    </>
  );
};
