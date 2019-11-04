import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ProjectMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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
    margin: 3rem auto;
    width: 70vw;
  `
  const ProjectCard = styled.div`
    align-items: center;
    border: 2px dashed #000;
    display: flex;
    height: 12rem;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 40%;
    img {
      max-height: 100px;
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
