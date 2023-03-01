import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const NotFoundPage = (props) => {
  const { t } = useTranslation();
  const footerInfo = {
    title: t("Footer_Title_Index"),
    phone: t("Footer_Phone_Index"),
    email: t("Footer_Email_Index"),
    fbLink: t("Footer_FbLink_Index"),
    fbInLink: t("Footer_InLink_Index"),
  };

  return (
    <>
      <HeadMeta
        title={`${t("Meta_Title")} | ${t("Meta_Title")}`}
        description={t("Meta_Desc")}
      />
      <Layout footerInfo={footerInfo}>
        <h1>{t("404:NOT_FOUND")}</h1>
        <p>{t("404:ERROR_TEXT")}</p>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "index", "404"] }
        language: { eq: $language }
      }
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
