// i18next-extract-mark-ns-start index
import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import Hero from "../components/hero/Hero";
import ArticleCard from "../components/article-card/ArticleCard";
import Reviews from "../components/reviews/Reviews";
import Button from "../components/button/Button";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import heroImage from "../images/pasakuma-vaditajs-hero-2021.jpg";
import firstArticleImage from "../images/event-naba.jpg";
import secondArticleImage from "../images/eventIgnition.jpg";
import thirdArticleImage from "../images/event-inovuss.jpg";

import firstReviewImage from "../images/elita-apine.jpg";
import secondReviewImage from "../images/santa-zunda.jpg";

const EwentOrganiser = ({ data }) => {
  const { t } = useTranslation();
  const heroInfo = {
    subtitle: t("Organiser_Hero_Subtitle"),
    title: t("Organiser_Hero_Title"),
    content: t("Organiser_Hero_Content"),
    heroTitle: t("Hero_title"),
    heroPhone: t("Hero_Phone"),
    heroEmail: t("Hero_Emai"),
    heroMessengerPageUrl: t("Hero_Messenger_Page_Url"),
    background: t("Background_Image_Alt"),
    arrowTitle: t("Arrow_Title"),
    anchorName: t("Anchor_Name"),
  };
  const articles = [
    {
      item: firstArticleImage,
      type: "image",
      title: t("Article_1_Title"),
      content: t("Article_1_Content"),
    },
    {
      item: secondArticleImage,
      type: "image",
      title: t("Article_2_Title"),
      content: t("Article_2_Content"),
    },
    {
      item: thirdArticleImage,
      type: "image",
      title: t("Article_3_Title"),
      content: t("Article_3_Content"),
    },
  ];

  const reviews = [
    {
      name: t("Review_1_Title"),
      position: t("Review_1_Position"),
      event: t("Review_1_Event"),
      content: t("Review_1_Content"),
      image: firstReviewImage,
    },
    {
      name: t("Review_2_Title"),
      position: t("Review_2_Position"),
      event: t("Review_2_Event"),
      content: t("Review_2_Content"),
      image: secondReviewImage,
    },
  ];

  const footerInfo = {
    title: t("Footer_Title_Index"),
    phone: t("Footer_Phone_Index"),
    email: t("Footer_Email_Index"),
    fbLink: t("Footer_FbLink_Index"),
    fbInLink: t("Footer_InLink_Index"),
  };

  const reviewFbBtn = {
    title: t("Review_FaceBook_Button_Title"),
    target: "_blank",
    link: "https://www.facebook.com/artis.ozolins/friends?lst=100000075771612%3A1421011988%3A1560273788&source_ref=pb_friends_tl",
    class: "button--fb",
    icon: "fb-icon",
  };

  const articlesImagesAlt = [
    t("Article_1_Image_Alt"),
    t("Article_2_Image_Alt"),
    t("Article_3_Image_Alt"),
  ];

  const reviewesImagesAlt = [t("Review_1_Image_Alt"), t("Review_2_Image_Alt")];

  return (
    <>
      <HeadMeta
        title={`${t("Meta_Title")} | ${t("Page_Name_For_Title")}`}
        description={t("Meta_desc")}
      />
      <Layout footerInfo={footerInfo}>
        <div className="page page--wedding">
          <Hero type="wedding" info={heroInfo} image={heroImage} />
          <div className="page__articles">
            <ArticleCard article={articles} imagesAlt={articlesImagesAlt} />
          </div>
          <div className="page__reviews">
            <Reviews reviews={reviews} imagesAlt={reviewesImagesAlt} />
            <div className="page__reviews-btn">
              <div className="wrapper">
                <Button
                  title={reviewFbBtn.title}
                  link={reviewFbBtn.link}
                  target={reviewFbBtn.target}
                  btnClass={reviewFbBtn.class}
                  icon={reviewFbBtn.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EwentOrganiser;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "index", "pasakumu_vaditajs"] }
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
