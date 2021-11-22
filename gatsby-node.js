const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query MyQuery {
        allContentfulPages {
          nodes {
            slug
          }
        }
      }
    `)
    result.data.allContentfulPages.nodes.forEach((node) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/subPage.js`),
            context: {
                slug: node.slug,
            },
        })
    })
}
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true
    }
  })
}