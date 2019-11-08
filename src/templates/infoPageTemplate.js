import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const informationPageTemplate = ({ data }) => {
  const { markdownRemark: informationPageTemplate } = data
  return (
    <div
      dangerouslySetInnerHTML={{ __html: informationPageTemplate.html }}
    ></div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/non-project-pages/" }
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default informationPageTemplate
