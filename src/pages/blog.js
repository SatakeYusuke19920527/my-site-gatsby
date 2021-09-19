import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Seo from '../components/seo';

export default function Blog() {
  const query = useStaticQuery(
    graphql`
      query {
        allContentfulPost {
          edges {
            node {
              title
              image {
                title
                file {
                  url
                }
              }
              description {
                description
              }
              slug
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Seo title="ProAca Blog" description="ProAca Blog" />
      {query.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}