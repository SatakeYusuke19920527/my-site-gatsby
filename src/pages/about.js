import React from 'react'
import Layout from "../components/layout"
import Seo from '../components/seo';
import "../styles/style.css"

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
            Our Mission
          </h3>
          <p className="hero-author-text">
            Mission作成予定<br />
          </p>
          <h3 className="page-second-title">
            Our Vision
          </h3>
          <p className="hero-author-text">
            Vision作成予定<br />
          </p>
          <h3 className="page-second-title">
            Our Team
          </h3>
          <p className="hero-author-text">
            Yusuke Satake<br />
            Takumi Nishimura<br />
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default About
