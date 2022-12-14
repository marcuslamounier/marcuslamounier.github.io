import React from "react";
import { Helmet } from "react-helmet";
import { PageTemplate } from "./components/templates/PageTemplate";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";
import "@fontsource/source-sans-pro";

const title: String = "Marcus V | Software Engineer";

export function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ChakraProvider theme={defaultTheme}>
        <PageTemplate>
          <RouterProvider router={AppRouter} />
        </PageTemplate>
      </ChakraProvider>
    </React.Fragment>
  );
}
