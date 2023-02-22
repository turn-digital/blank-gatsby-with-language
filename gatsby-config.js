/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { languages, defaultLanguage } = require("./languages");
const siteUrl = process.env.URL || `https://fallback.net`;

module.exports = {
  siteMetadata: {
    title: `gatsby-check`,
    siteUrl: `https://www.yourdomain.tld`,
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
