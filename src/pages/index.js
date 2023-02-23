import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";

// import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import Activities from "../components/activities/Activities";
import Clients from "../components/clients/Clients";
import Overview from "../components/overview/Overview";
import Hero from "../components/hero/Hero";
import Head from "../components/HeadMeta";

export default function Home(props) {
  const { t } = useTranslation();

  const heroInfo = {
    subtitle: t("Home_Hero_Subtitle"),
    title: t("Home_Hero_Title"),
    content: t("Home_Hero_Content"),
    heroTitle: t("Hero_title"),
    heroPhone: t("Hero_Phone"),
    heroEmail: t("Hero_Emai"),
    heroMessengerPageUrl: t("Hero_Messenger_Page_Url"),
    arrowTitle: t("Arrow_Title"),
    anchorName: t("Anchor_Name"),
  };

  const footerInfo = {
    title: t("Footer_Title_Index"),
    phone: t("Footer_Phone_Index"),
    email: t("Footer_Email_Index"),
    fbLink: t("Footer_FbLink_Index"),
    fbInLink: t("Footer_InLink_Index"),
  };

  const activitiesContent = {
    organiser: t("Organiser_title"),
    moderator: t("Moderator_title"),
    radio: t("Radio_title"),
  };

  const activitiesAlt = {
    event: t("Event_Image_Alt"),
    moderator: t("Moderator_Image_Alt"),
    radio: t("Radio_Image_Alt"),
  };

  return (
    <>
      <Head
        title={`${t("Meta_Title")} | ${t("Page_Name_For_Title_Home")}`}
        description={t("Meta_Desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--home">
          <Hero type="home" info={heroInfo} />
          <Overview activitiesAlt={activitiesAlt} />
          <Clients title={t("Home_Clients_Title")} />
          <Activities
            title={t("Home_Activieties_Title")}
            content={activitiesContent}
            activitiesAlt={activitiesAlt}
            anchorName={t("Anchor_Name")}
          />
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
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
