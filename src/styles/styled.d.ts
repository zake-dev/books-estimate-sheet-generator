import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      main: string;
      light: string;
      dark: string;
      grey: string;
      black: string;
      white: string;
    };
  }
}