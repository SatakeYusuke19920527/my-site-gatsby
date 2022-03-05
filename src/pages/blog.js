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
      <section className="wrapper">
        <h1 className="page-title">
          Blog
        </h1>
        <div className="page-body">
          <h3 className="page-second-title">
            dev ...
          </h3>
        </div>
      </section>
      {query.allContentfulPost.edges.reverse().map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}