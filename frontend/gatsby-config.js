/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: `Car Configurator`,
        siteUrl: `https://www.car-configurator.sii.pl`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-mdx",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": `${__dirname}/src/images`
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};