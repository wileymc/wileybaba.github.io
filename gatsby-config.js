module.exports = {
  siteMetadata: {
    title: `wileys.website`,
    description: `images, art, and writings by wiley mckay conte`,
    author: `Wiley McKay Conte <wileymckayconte@gmail.com>`,
  },
  pathPrefix: `/wileys-website`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wileys website`,
        short_name: `wileys website`,
        start_url: `/`,
        background_color: `dodgerblue`,
        theme_color: `dodgerblue`,
        display: `minimal-ui`,
        icon: `src/images/icons/Robobrand.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Merriweather',
              variants: ['300', '400', '500'],
              // subsets: ['latin']
              // text: 'Hello'
              // fontDisplay: 'swap',
              // strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family: 'Oswald',
              variants: ['500', '700'],
            },
          ],
        },
        // formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        // usePreconnect: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
