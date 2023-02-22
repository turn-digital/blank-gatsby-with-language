/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = "https://turn-digital.github.io";

const { languages, defaultLanguage } = require("./languages");
module.exports = {
  siteMetadata: {
    title: `gatsby-check`,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
