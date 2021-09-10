import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { getGlobalData } from "../../helpers/api-utils";

const Layout = ({ children, data }) => {
  const [globalData, setGlobalData] = useState(null);

  useEffect(async () => {
    const globalData = await getGlobalData();
    setGlobalData(globalData);
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>{data?.title ? data?.title : globalData?.siteName}</title>
        <meta
          name="title"
          content={
            data?.metaTitle ? data?.metaTitle : globalData?.defaultSeo.metaTitle
          }
        />
        <meta
          name="description"
          content={
            data?.metaDescription
              ? data?.metaDescription
              : globalData?.defaultSeo.metaDescription
          }
        />
        <meta
          name="keywords"
          content={
            data?.metaTags ? data?.metaTags : globalData?.defaultSeo.metaTags
          }
        />
        {/* favicon */}
        <link rel="icon" type="image/png" href={globalData?.favicon.url} />
      </Head>

      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
