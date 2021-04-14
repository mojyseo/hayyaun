module.exports = {
  siteMetadata: {
    title: 'Hayyaun',
    siteUrl: 'https://hayyaun.com',
    description: 'Hayyaun is a front-end developer who builds cool sites.',
    author: '@hayyaun',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-flow',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: `Hayyaun`,
        short_name: `Hayyaun`,
        description: `Hayyaun is a front-end developer who builds cool sites.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#4f81f3`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
