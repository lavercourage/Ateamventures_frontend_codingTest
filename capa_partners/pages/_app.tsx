import "../styles/globals.css";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/globalStyles";
import Layout from "../src/components/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
