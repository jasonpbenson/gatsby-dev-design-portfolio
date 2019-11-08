import React from "react"
import styled from "styled-components"
import resume from "../assets/files/benson-resume-2019-grey.pdf"

const InfoSyles = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: 0 auto;
  margin-top: 8rem;
  width: 100vw;
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    border: 2px dashed #000000;
    border-right: 0;
    padding: 1rem;
    width: 15rem;
  }
  @media (max-width: 650px) {
    align-items: center;
    p {
      border: 2px dashed #000000;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    margin-top: 5rem;
    p {
      padding: 0.7rem;
    }
  }
`

const information = () => {
  return (
    <InfoSyles>
      <p>designer/developer, atlanta ga</p>
      <p>jasonbenson3rd@gmail.com</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <p>resume</p>
      </a>
      <a
        href="https://github.com/jasonpbenson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/jason-paul-benson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>linkedin</p>
      </a>
    </InfoSyles>
  )
}

export default information
