module.exports = {
    siteMetadata: {
        title: `SayVU`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `Adriano`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-antd',
        `gatsby-plugin-sass`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: 'G-LLGTD9EVCW', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-analytics', // default
                    anonymize: true, // default
                    allowAdFeatures: false // default
                },
                googleTagManager: {
                    trackingId: '', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-tagmanager', // default
                    dataLayerName: 'dataLayer', // default
                },
                facebookPixel: {
                    pixelId: '', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-facebook-pixel', // default
                },
                // defines the environments where the tracking should be available  - default is ["production"]
                environments: ['production', 'development']
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site. 
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}