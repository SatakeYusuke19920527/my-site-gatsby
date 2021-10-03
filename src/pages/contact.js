import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo';

const Contact = () => {
  const linePush = () => {
    navigate('https://line.me/ti/p/tN_hBvdvRI')
  }
  return (
    <Layout>
      <Seo title="Contact" description="ProAca.inc contact" />
      <section className="wrapper">
        <h1 className="page-title">
          Contact
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
          <button
            onClick={linePush}
          >
            button
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Contact

