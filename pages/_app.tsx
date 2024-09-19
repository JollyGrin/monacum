import { GdprDisclaimer } from "@/components/molecules/Disclaimer";
import { defaultTheme } from "@/styles/defaultTheme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Sora, EB_Garamond } from "next/font/google";

const fontBody = Sora({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const fontHeader = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Style />
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GdprDisclaimer />
      </ChakraProvider>
    </>
  );
}

const Style = () => (
  <style jsx global>
    {`
      html {
        --header: ${fontHeader.style.fontFamily};
        --body: ${fontBody.style.fontFamily};
      }
    `}
  </style>
);
