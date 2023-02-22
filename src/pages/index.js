import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";
import Header from "../components/Header";
// ...

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header siteTitle={t("siteTitle")} />
      <h1>{t("Hello")}</h1>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
