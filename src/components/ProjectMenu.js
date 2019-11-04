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
            }
          }
        }
      }
    }
  `)

  const allProjects = data.allMarkdownRemark.edges

  const ProjectMenuStyles = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 6rem auto;
    width: 60vw;
  `
  const ProjectCard = styled.div``
  return (
    <ProjectMenuStyles>
      {allProjects.map(({ node }) => {
        return (
          <ProjectCard key={node.frontmatter.id}>
            <Link to={node.fields.slug}>
              <img
                src={node.frontmatter.logo}
                alt={node.frontmatter.logoAlt}
                style={{ maxWidth: "250px" }}
              />
            </Link>
          </ProjectCard>
        )
      })}
    </ProjectMenuStyles>
  )
}

export default ProjectMenu
