import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from '../components/seo';

const About = () => {
  return (
    <Layout>
      <Hero />
      <Seo title="ABOUT" description="ProAca.inc about" />
    </Layout>
  )
}

export default About
