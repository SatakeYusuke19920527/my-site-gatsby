// src/components/post-link.js
import React from "react"
import "../styles/style.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

export default function PostLink() {
    return (
        <div className="post-link">
            <div>
                <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>Gatsbyでブログを作成</h2>
                <p className="post-link-body">先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
                <p className="post-link-date">2021年XX月XX日</p>
            </div>
        </div>
    )
}