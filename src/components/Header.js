import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderSyles = styled.div`
  align-items: baseline;
  background-color: inherit;
  display: flex;
  flex-direction: row-reverse;
  height: 10%;
  justify-content: space-between;
  padding: 2rem 10% 0 40%;
  position: fixed;
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
  }
  }
  @media (max-width: 980px) {
    align-items: flex-end;
    flex-flow: column;
    justify-content: end;
    padding-left: 0;
    h1{
      margin: 0;
    }
    h2{
      margin-top: .2rem;
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const Header = () => {
  return (
    <HeaderSyles>
      <h1>
        <Link to="/">jason paul benson</Link>
      </h1>
      <h2>
        <Link to="/Information">information</Link>
      </h2>
    </HeaderSyles>
  )
}

export default Header
