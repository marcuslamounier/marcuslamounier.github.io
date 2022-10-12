import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { Link } from "./components/Link";
import styles from "./styles";

// Global style overrides

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

export const defaultTheme = extendTheme({
  fonts: {
    body: `"Source Sans Pro", "sans-serif"`,
    heading: `"Source Sans Pro", "sans-serif"`,
  },
  colors: colors,
  styles: { ...styles },
  // borders,
  // Other foundational style overrides go here
  components: {
    Link: { ...Link },
    // Button,
    // Other components go here
  },
});
