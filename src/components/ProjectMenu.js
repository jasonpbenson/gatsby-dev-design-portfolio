import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ProjectMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___id, order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              id
              logo
              logoAlt
              hex
            }
          }
        }
      }
    }
  `)

  const projectData = data.allMarkdownRemark.edges
  console.log(projectData)

  const ProjectMenuStyles = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 6.5rem;
    width: 100vw;
    @media (max-width: 980px) {
      margin-top: 7.5rem;
    }
    @media (max-width: 700px) {
      flex-flow: column;
    }
    @media (max-width: 500px) {
      margin-top: 6rem;
    }
    @media (max-width: 375px) {
      flex-flow: row;
      flex-wrap: wrap;
    }
  `
  const ProjectCard = styled.div`
    border: 2px dashed #000;
    height: 0;
    margin: 0.5rem;
    padding-top: 20%;
    position: relative;
    transition: filter 1s;
    width: 40%;
    :hover {
      filter: hue-rotate(180deg);
    }
    img {
      left: 50%;
      max-height: 50%;
      max-width: 80%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 700px) {
      margin: 0.2rem;
      padding-top: 18%;
      width: 50%;
      img {
        max-height: 65%;
        max-width: 75%;
      }
    }
    @media (max-width: 500px) {
      padding-top: 25%;
    }
    @media (max-width: 375px) {
      border: 1px solid #000;
      padding-top: 50%;
      width: 45%;
      img {
        max-height: 40%;
        max-width: 85%;
      }
    }
  `

  return (
    <ProjectMenuStyles>
      {projectData.map(({ node }) => {
        return (
          <ProjectCard
            key={node.frontmatter.id}
            style={{ backgroundColor: node.frontmatter.hex }}
          >
            <Link to={node.fields.slug}>
              <img src={node.frontmatter.logo} alt={node.frontmatter.logoAlt} />
            </Link>
          </ProjectCard>
        )
      })}
    </ProjectMenuStyles>
  )
}

export default ProjectMenu
