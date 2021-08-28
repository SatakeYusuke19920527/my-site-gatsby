// // gatsby-node.js
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/templates/post.js')
  const result = await graphql(`
    query{
      allContentfulPost{
        edges{
          node{
            title
            image{
              file{
                url
              }
            }
            body{
              childMarkdownRemark{
                html
              }
            }
            updatedAt
            description{
              description
            }
            slug
          }
        }
      }
    }
    `
  )
  
  if (result.errors) {
    console.log(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulPost
  edges.forEach((edge) => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: pageTemplate,
      context: { post: edge.node }
    })
  });
}
