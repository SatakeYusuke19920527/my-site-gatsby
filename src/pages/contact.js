import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo';
import Button from '@mui/material/Button';

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
            お電話番号もしくはLINEよりお申し込みください。
          </h3>
          <p className="hero-author-text">
            LINE連絡時に以下項目をご記載の上、ご連絡をよろしくお願いします。<br />
            氏名<br />
            電話番号<br />
            目的: 面談・無料体験授業の受講・その他<br />
          </p>
          <Button
                    variant="outlined"
                    color="error"
                    onClick={linePush}
                >
                    LINEでのお問い合わせはこちら
          </Button>
          <br />
          <Button
                    variant="outlined"
                    color="error"
                    href="tel:08084939461"
                >
                    お電話番号でのお問い合わせはこちら
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default Contact

