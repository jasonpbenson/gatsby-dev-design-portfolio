const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages ` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___id, order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              hex
            }
          }
        }
      }
    }
  `).then(result => {
    const dataSort = result.data.allMarkdownRemark.edges

    dataSort.forEach(({ node }, index) => {
      pathName = node.fields.slug
      component = path.resolve(`src/templates/projectTemplate.js`)
      context = {
        slug: node.fields.slug,
        previous: index === 0 ? null : dataSort[index - 1].node,
        next: index === dataSort.length - 1 ? null : dataSort[index + 1].node,
      }

      createPage({
        path: pathName,
        component: component,
        context: context,
      })
    })
  })
}
