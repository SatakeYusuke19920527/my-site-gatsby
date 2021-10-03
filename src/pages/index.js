import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <Seo title="ProAca.Inc" description="大阪市北区のプログラミングスクール" />
      <Hero />
      <section className="wrapper">
        <h1 className="page-title">
          Services
        </h1>
        <div className="page-body">
          <h3 className="page-second-title">
            モダン開発に特化したプログラミングスクール
          </h3>
          <p className="hero-author-text">
            ProAcaはモダン開発に特化したプログラミングスクールです。<br />
            完全未経験からWEBサイト制作やSNSアプリ開発まで実装できるようになります。<br />
            プログラミングを通して成長し、進化した自分に感動してください。
          </p>
          <h3 className="page-second-title">
            初心者でも安心のカリキュラム
          </h3>
          <p className="hero-author-text">
            今までの受講生は初心者の方が多く、プログラミングが初めての方でも安心して受講できるカリキュラムとなっております。<br />
            プログラミング初学者にありがちな環境構築での挫折や意味不明なエラーでの挫折は担当する現役のエンジニアが丁寧に解説しながら解決していきます。
          </p>
          <h3 className="page-second-title">
            現在受講できるコース
          </h3>
          <p className="hero-author-text">
            Coming soon!!
          </p>
        </div>
      </section>
    </Layout>
  )
}