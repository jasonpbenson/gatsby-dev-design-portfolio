module.exports = {
  siteMetadata: {
    title: "Jason Paul Benson",
    description: "Dev/Design Portfolio",
    author: "Jason Paul Benson",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/projects`,
        name: "projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "image-uploads",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/assets/images`,
    //     name: "image-assets",
    //   },
    // },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",

      options: {
        name: "Jason Paul Benson",
        short_name: "JPB",
        start_url: "/",
        background_color: "#E5E5E5",
        theme_color: "#E5E5E5",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
