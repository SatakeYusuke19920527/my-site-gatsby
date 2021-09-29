import React from 'react'
import Layout from "../components/layout"
import Seo from '../components/seo';
import {Link} from 'gatsby'
import "../styles/style.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

const About = () => {
  return (
    <Layout>
      <Seo title="ABOUT" description="ProAca.inc about" />
      <section className="wrapper">
        <h1 className="page-title">
          About
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
          <div className="classes">
            <Link to="/contact" className="post-link-anchor">
              <div className="classes-card">
                <div>
                  <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
                </div>
              </div>
            </Link>
            <Link to="/contact" className="post-link-anchor">
              <div className="classes-card">
                <div>
                  <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
                </div>
              </div>
            </Link>
            <Link to="/contact" className="post-link-anchor">
              <div className="classes-card">
                <div>
                  <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About
