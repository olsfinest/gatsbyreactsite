const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPage {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPage.nodes.forEach(node => {

      if(node.slug != "") {

      createPage({
        path: node.slug,
        component: path.resolve("./src/layouts/PageLayout.js"),
        context: {
          slug: node.slug,
        },
      })

      }

    })
  })
}
