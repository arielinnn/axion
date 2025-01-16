import Layout from "@/components/layout";
import { GlobalStyles, theme } from "@/theme";
import { AppProps } from "next/app";
import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";
// import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ImageContent
          width={1440}
          height={7937}
          layout="responsive"
          src={"/images/BG.png"}
          alt={"alt"}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

const ImageContent = styled(Image)`
  position: absolute;
  top: 0;
  z-index: -1;
`;
