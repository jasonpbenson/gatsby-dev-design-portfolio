import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Nav from "../components/Nav"

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.markdownRemark

  const ProjectWrapper = styled.div`
    height: 100%;
    overflow: scroll;
    padding-top: 5rem;
    width: 100vw;
    @media (max-width: 980px) {
      padding-top: 6.5rem;
    }
    @media (max-width: 375px) {
      padding-top: 5.5rem;
    }
  `

  const PageHeader = styled.div`
    border-top: 2px solid #000;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.2rem 10vw;
    max-height: 125px;
    position: fixed;
    text-transform: uppercase;
    width: 76vw;
    z-index: 200;
    h1 {
      font-size: 28px;
      margin: 0.5rem 0;
    }
    h3 {
      font-size: 18px;
    }
    @media (max-width: 980px) {
      width: 80vw;
      h1 {
        font-size: 24px;
      }
    }
    @media (max-width: 375px) {
      h1 {
        font-size: 18px;
      }
      h3 {
        font-size: 16px;
        margin-bottom: 0;
      }
    }
  `
  const HeaderLinks = styled.div`
    align-items: flex-end;
    align-self: flex-end;
    color: #000;
    display: flex;
    justify-content: space-between;
    min-width: 190px;
    text-transform: capitalize;
    width: 20%;
    a {
      color: inherit;
      text-decoration: none;
    }
    h4 {
      background-color: ${project.frontmatter.hex};
      border-radius: 0 0 0 40%;
      border: 2px solid #000;
      border-top: none;
      padding: 0.5rem 1rem;
      text-align: right;
      transition: filter 1s;
    }
    h4:hover {
      filter: hue-rotate(180deg);
    }
    .demo-null {
      display: hidden;
    }
    @media (max-width: 700px) {
      width: 15%;
      }
      h4 {
        font-size: 16px;
      }
    }
    @media (max-width: 650px) {
      bottom: 65px;
      flex-flow: row-reverse;
      left: 0px;
      position: absolute;
      h4 {
        border-bottom: none;
        border-top: 2px solid #000;
        border-radius: 0 40% 0% 0%;
        font-size: 16px;
        max-height: 32px;
        text-align: left;
        width: 90px;
      }
    }
    @media (max-width: 375px) {
      bottom: 34px;
      justify-content: flex-end;
      h4 {
        font-size: 14px;
        margin-right: .5rem;
        padding: 0.2rem 0.5rem;
        width: 65px;
      }
    }
  `
  const PageMain = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
    margin: 5rem auto 0 auto;
    position: relative;
    width: 85%;
    .desktop-image {
      height: auto;
      margin-left: 1rem;
      width: 60%;
    }
    .mobile-image {
      margin-right: 3rem;
      margin-top: -2rem;
      width: 28%;
    }
    img {
      margin-bottom: 0;
    }
    p {
      font-size: 18px;
      left: 8%;
      position: absolute;
      text-align: left;
      top: 75%;
      width: 44%;
    }
    @media (max-width: 980px) {
      width: 95%;
      p {
        left: 7%;
      }
    }
    @media (max-width: 800px) {
      p {
        top: 80%;
      }
    }
    @media (max-width: 650px) {
      align-items: center;
      flex-flow: column;
      .desktop-image {
        margin: 0;
        width: 88%;
      }
      p {
        align-self: flex-start;
        margin-left: 10%;
        margin-top: 1%;
        position: static;
        text-align: center;
        width: 70%;
      }
      .mobile-image {
        display: none;
      }
    }
    @media (max-width: 375px) {
      margin-top: 4rem;
      .desktop-image {
        width: 80%;
      }
      .mobile-image {
        align-self: flex-end;
        display: inline-block;
        margin: 0 1.5rem 0 0;
        width: 33%;
      }
      p {
        font-size: 15px;
        left: 10%;
        position: absolute;
        text-align: left;
        top: 43%;
        width: 45%;
      }
    }
  `

  return (
    <ProjectWrapper>
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
          className="desktop-image"
        />
        <p>{project.frontmatter.description}</p>
        <img
          src={project.frontmatter.mobileImage}
          alt={project.frontmatter.imageAltMobile}
          className="mobile-image"
        />
        <Nav pageContext={pageContext} />
      </PageMain>
    </ProjectWrapper>
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
