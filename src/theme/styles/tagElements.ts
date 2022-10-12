import { JSXElementStyles } from '@chakra-ui/theme-tools'

const allParts = {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
};

const tagElements: Partial<JSXElementStyles> = {
  body: {
    width: "100vw",
    display: "flex",
    color: 'gray.400',
    fontWeight: 100
  },
  header: { ...allParts },
  footer: { ...allParts, display: "block" },
  section: { ...allParts },
};

export default tagElements;