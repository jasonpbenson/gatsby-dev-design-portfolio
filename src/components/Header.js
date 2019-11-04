import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import ThemeIcon from "./ThemeIcon"
const HeaderSyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  max-height: 120px;
  position: fixed
  width: 100%;
  z-index: 100;
  a {
    color: inherit;
    text-decoration: none;
  }
  h1 {
    font-size: 30px;
    text-transform: capitalize;
  }
  h2 {
    font-size: 22px;
    font-weight: normal;
  }
  h1,
  h2 {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }
`
const Header = () => {
  return (
    <HeaderSyles>
      <h1>
        <Link to="/">jason paul benson</Link>
      </h1>
      <h2>
        <Link to="/information">information</Link>
      </h2>
      <ThemeIcon />
    </HeaderSyles>
  )
}

export default Header
