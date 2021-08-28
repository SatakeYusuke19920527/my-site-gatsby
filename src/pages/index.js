// src/pages/index.js
import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"

export default function Home() {
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
  console.log(query)
  return (
    <Layout>
      <Hero />
      {query.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}