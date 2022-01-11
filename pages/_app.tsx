import { BackgroundProvider } from "context/background-context";
import Layout from "components/layout";

import "../styles/globals.css";

const defaultColors = {
  backgroundColor: "#2B2D39",
  fontColor: "#DFBBFE",
};

function MyApp({ Component, pageProps }) {
  return (
    <BackgroundProvider defaultColors={defaultColors}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BackgroundProvider>
  );
}

export default MyApp;
