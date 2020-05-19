module.exports = {
  siteMetadata: {
    siteTitle: 'Alex Vlad',
    siteDescription: 'Alex Vlad, personal page',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://mrnovado.github.io/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Alex Vlad', // for example - 'Ivan Ganev'
    authorDescription: 'Functions, components, apps, agents!', // short text about the author
    avatar: '/profile-cat.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:novado@ymail.com`
      },
      // {
      //   icon: `twitter`,
      //   url: `https://twitter.com/`
      // },
      {
        icon: `github`,
        url: `https://github.com/MrNovado`
      },
      // {
      //   icon: `node-js`,
      //   url: `https://www.npmjs.com/`
      // }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Vlad`,
        short_name: `Alex Vlad`,
        start_url: `/`,
        background_color: `#0e0f17`,
        theme_color: `#0e0f17`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
  ]
};
