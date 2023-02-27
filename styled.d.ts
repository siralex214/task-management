import "styled-components";
import { MainTheme, Theme } from "src/types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}
