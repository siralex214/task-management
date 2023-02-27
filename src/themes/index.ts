import main from "./main";
import dark from "./dark";
import light from "./light";
import { Theme } from "src/types/theme";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { dark: complete(dark), light: complete(light) };

export default themes;
