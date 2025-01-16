import "styled-components";

interface Colors {
  black: string;
  white: string;

  primary: string;
  secondary: string;
  shadow: string;
  background: string;

  lightText: string;
  secondaryText: string;

  lightGray: string;

  b1: string;
}

interface Fonts {
  body: string;
  heading: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends Colors {
    fonts: Fonts;
    spacing: (factor: number) => string;
    hexToRgba: (hex: string, alpha: number) => string; // Add the hexToRgba function type
    lineClamp: (lines: number) => string;
    media: Record<
      "xs" | "sm" | "md" | "lg" | "xl",
      (style: TemplateStringsArray) => string
    >;
  }
}
