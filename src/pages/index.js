import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <Seo title="ProAca.Inc" description="大阪市北区のプログラミングスクール" />
      <Hero />
    </Layout>
  )
}