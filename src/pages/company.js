import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from '../components/seo';

const Company = () => {
  return (
    <Layout>
      <Hero />
      <Seo title="Company" description="ProAca.inc Company" />
    </Layout>
  )
}

export default Company
