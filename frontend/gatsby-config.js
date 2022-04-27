/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    pathPrefix: '/simple-car-website',
    siteMetadata: {
        title: `Car Site`,
        siteUrl: `https://pablosan99.github.io/simple-car-website/`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": `${__dirname}/src/images`
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "cars",
                "path": `${__dirname}/src/cars`
            },
            __key: "cars"
        },
        {
          resolve: 'gatsby-plugin-page-creator',
          options: {
            path: `./src/cars`,
          }  
        },
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [{
                  resolve: "gatsby-remark-images",
                  options: {
                      maxWidth: 1200
                  }  
                }],
                defaultLayouts: {
                    cars: require.resolve("./src/components/Layout.tsx")
                },
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};