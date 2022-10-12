import cssObjects from "./cssObjects";
import text from "./text";
import tagElements from "./tagElements";

const styles = {
  global: {
    ...tagElements,
    ...cssObjects,
    ...text,
  },
};

export default styles;
