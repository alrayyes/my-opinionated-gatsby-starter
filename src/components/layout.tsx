/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {
  LayoutDataInterface,
  LayoutInterface,
} from "../@types/components/layout"
import styled from "@emotion/styled"

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const data: LayoutDataInterface = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 0 1.0875rem 1.45rem;
  `

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
