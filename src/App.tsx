import React from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "./components/templates/PageTemplate";
import "@fontsource/source-sans-pro";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";

const title: String = "Marcus V | Software Engineer";

function App() {
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

export default App;
