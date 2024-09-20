import type { GatsbyConfig } from "gatsby";
import "dotenv/config.js";

const config: GatsbyConfig = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Avidity Lab`,
    siteUrl: `https://aviditylab.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PHLD74NH",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-08L4ZWXSKJ"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    `gatsby-plugin-image`,
  ],
};

export default config;
