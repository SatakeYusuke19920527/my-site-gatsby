import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Seo title="ProAca.Inc" description="Gatsbyを使って作ったブログです" />
    </Layout>
  )
}