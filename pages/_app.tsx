import { BackgroundProvider } from "context/background-context";
import Layout from "components/layout";
import { ParallaxProvider } from 'react-scroll-parallax';

import "../styles/globals.css";

const defaultColors = {
  backgroundColor: "#2B2D39",
  fontColor: "#DFBBFE",
};

function MyApp({ Component, pageProps }) {
  return (
    <BackgroundProvider defaultColors={defaultColors}>
      <ParallaxProvider scrollAxis="vertical">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ParallaxProvider>
    </BackgroundProvider>
  );
}

export default MyApp;
