import React from "react"
import "../styles/style.css"

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-text">
                ProAca Inc.
            </h1>
            <div className="hero-author">
                <p className="hero-author-text">
                    ProAcaはモダン開発に特化したプログラミングスクールです。<br />
                    完全未経験からWEBサイト制作やSNSアプリ開発まで実装できるようになります。<br />
                    プログラミングを通して成長し、進化した自分に感動してください。
                </p>
            </div>
        </section>
    )
}