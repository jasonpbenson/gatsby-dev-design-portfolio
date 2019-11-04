import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Nav from "../components/Nav"

const ProjectTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
  const project = data.markdownRemark
  const PageHeader = styled.div`
    border-top: 2px solid #000;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: .5rem auto;
    max-height: 125px;
    padding-top: .5rem
    text-transform: uppercase;
    width: 76vw;
    h1{
        font-size: 30px;
        margin-bottom: .5rem;
    }
  `
  const HeaderLinks = styled.div`
    align-items: flex-end;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    width: 20%;
    a {
      color: inherit;
      text-decoration: none;
      width: 48%;
    }
    h4 {
      background-color: ${project.frontmatter.hex};
      border-radius: 0 0 0 20%;
      border: 2px solid #000;
      border-top: none;
      padding: 0.5rem 1rem;
      text-align: right;
      transition: filter 1s;
    }
    h4:hover {
      filter: hue-rotate(360deg);
    }
    .demo-null {
      visibility: hidden;
    }
  `
  const PageMain = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
    margin: 0 auto;
    width: 76vw;
    .desktop {
      height: auto;
      width: 60%;
    }
    .mobile {
      margin-right: 1rem;
      margin-top: -3rem;
      max-height: 480px;
      width: 28%;
    }
    img {
      margin-bottom: 0;
    }
    p {
      top: 83vh;
      position: fixed;
    }
  `

  return (
    <div>
      <PageHeader>
        <h1>{project.frontmatter.title}</h1>
        <h3>{project.frontmatter.subtitle}</h3>
        <HeaderLinks>
          {project.frontmatter.demo != null ? (
            <a
              href={project.frontmatter.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>demo</h4>
            </a>
          ) : (
            <div className="demo-null"></div>
          )}
          <a
            href={project.frontmatter.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>repo</h4>
          </a>
        </HeaderLinks>
      </PageHeader>
      <PageMain>
        <img
          src={project.frontmatter.desktopImage}
          alt={project.frontmatter.imageAltDesktop}
          className="desktop"
        />
        <img
          src={project.frontmatter.mobileImage}
          alt={project.frontmatter.imageAltMobile}
          className="mobile"
        />
        <p>{project.frontmatter.description}</p>
        <Nav pageContext={pageContext} />
      </PageMain>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/projects/" }
      fields: { slug: { eq: $slug } }
    ) {
      frontmatter {
        demo
        description
        desktopImage
        hex
        id
        imageAltDesktop
        imageAltMobile
        logo
        logoAlt
        mobileImage
        repository
        subtitle
        title
      }
    }
  }
`

export default ProjectTemplate
