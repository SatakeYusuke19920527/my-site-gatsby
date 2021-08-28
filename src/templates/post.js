// src/templates/post.js
import React from "react"
import "../styles/style.css"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { title, updatedAt, image } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}