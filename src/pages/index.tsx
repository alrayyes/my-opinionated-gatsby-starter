import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const IndexPage: React.FC = () => {
  const ImageContainer = styled.div`
    max-width: 300px;
    margin-bottom: 1.45rem;
  `
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </Layout>
  )
}

export default IndexPage
