import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import ErrorPageNotFound from "../components/molecules/ErrorPageNotFound";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import SkillsPage from "../pages/SkillsPage";

type RoutePageProps = {
  path: String;
  title: String;
  id?: String;
  element?: JSX.Element;
};

const routes: RoutePageProps[] = [
  {
    path: "/",
    title: "Home",
    element: <HomePage />,
  },
  {
    path: "/skills",
    title: "Skills",
    element: <SkillsPage />,
  },
  {
    path: "/portfolio",
    title: "Jobs",
    element: <PortfolioPage />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <ContactPage />,
  },
];

const errorMessageNotFound =
  "I'm sorry. This page does not exist.";
const errorMessageInConstruction =
  "I'm sorry! This page is not done yet. Please wait for next updates.";

const pages: RouteObject[] = routes.map((route) => {
  return Object({
    path: route.path,
    element: (
      <MainTemplate title={route.title}>
        {route.element || (
          <ErrorPageNotFound
            label={errorMessageInConstruction}
          />
        )}
      </MainTemplate>
    ),
    errorElement: (
      <MainTemplate title="Error">
        <ErrorPageNotFound label={errorMessageNotFound} />
      </MainTemplate>
    ),
  });
});

export const AppRouter = createBrowserRouter(pages);
export const RoutesInfo: Omit<RoutePageProps, "element">[] =
  routes.map((route) => {
    const { element, ...routeInfoProps } = route;
    return routeInfoProps;
  });
