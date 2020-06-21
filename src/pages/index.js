import React from "react"
import '../index.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Caleb Henderson</h1>
    <div className="img-wrapper">
      <Image />
    </div>
  </Layout>
)

export default IndexPage
