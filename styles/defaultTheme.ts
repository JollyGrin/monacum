import { extendBaseTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import { buttonTheme } from "./components/Button";

export const fonts = {
  header: "var(--header)",
  body: "var(--body)",
};

export const colors = {
  brand: {
    primary: "#FFF8F3",
    highlight: "#F7E7DC",
    secondary: "#405D72",
    shadow: "#758694",
  },
  pure: {
    white: "#FFF",
    black: "#0C0C0C",
  },
};

export const defaultTheme = extendBaseTheme({
  styles: {
    global: {
      body: {
        bg: "brand.primary",
        color: "pure.black",
        fontFamily: "body",
      },
      h1: {
        fontFamily: "header",
        fontWeight: 700,
        fontSize: { base: "3rem", md: "5rem", lg: "7rem" },
      },
      h3: {
        fontSize: { base: "1.5rem", md: "2.5rem", lg: "3rem" },
        fontWeight: 600,
      },
    },
  },
  colors,
  fonts,
  components: {
    ...theme.components,
    Button: buttonTheme,
  },
});
