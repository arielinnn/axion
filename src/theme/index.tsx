import { createGlobalStyle } from "styled-components";
import { Colors } from "./styled";

// Utility function to convert hex to RGBA
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const lineClamp = (lines: number) =>
  `
display: -webkit-box;
-webkit-line-clamp: ${lines};
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

export const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key as keyof typeof sizes] = (style: TemplateStringsArray | string) =>
    `@media (max-width: ${sizes[key as keyof typeof sizes]}px) { ${style} }`;
  return acc;
}, {} as Record<keyof typeof sizes, (style: TemplateStringsArray) => string>);

function colors(): Colors {
  return {
    black: "#000000",
    white: "#ffffff",

    primary: "#3EA2FF",
    shadow: "#1CC1FF",
    secondary: "#1A202C",
    background: "#FCFCFC",

    lightText: "#D7DBE7",
    secondaryText: "#3C4254",

    //grays
    lightGray: "#FDFDFD",

    //blues
    b1: "#91E4FD",
  };
}
// Define the theme object including the utility function
export const theme = {
  ...colors(),
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto Slab, serif",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  hexToRgba,
  lineClamp,
  media,
};

export type Theme = typeof theme;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
  height: 100%; 
  }
  body {
  background:${({ theme }) => theme.background}
  }
  .container {
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.media.xl`
    max-width: 1024px;
  `}

  ${({ theme }) => theme.media.lg`
    max-width: 992px;
  `}

  ${({ theme }) => theme.media.md`
    max-width: 100%;
    margin: 0 32px;
  `}
  }
`;
