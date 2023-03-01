import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Image404 from "../images/404.svg";

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
    <div className="notfound">
      <HeadMeta
        title={`${t("Meta_Title")} | ${t("Meta_Title")}`}
        description={t("Meta_Desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="notfound__box">
          <div className="notfound__content">
            <p className="notfound__label">{t("LABEL")}</p>
            <div className="notfound__image">
              <img src={Image404} alt={t("ALT")} />
            </div>
            <h1 className="notfound__title">{t("TITLE")}</h1>
            <p className="notfound__desc">{t("DESC")}</p>
            <p>
              {" "}
              <Link className="notfound__link" to={`/`}>
                {t("LINK")}
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </div>
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
