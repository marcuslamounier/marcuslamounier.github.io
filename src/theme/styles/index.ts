import { cssObjects } from "./cssObjects";
import { text } from "./text";
import { tagElements } from "./tagElements";

export const styles = {
  global: {
    ...tagElements,
    ...cssObjects,
    ...text,
  },
};
