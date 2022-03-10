import "../styles/globals.css";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/globalStyles";
import Layout from "../src/components/layout";

interface IMyAppProps {
  Component?: any;
  pageProps?: any;
}

const MyApp = ({ Component, pageProps }: IMyAppProps) => {
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
