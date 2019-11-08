import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MobileButton from "../assets/icons/mobile-info-icon.svg"

const MobileHeaderSyles = styled.div`
  display: none;
  @media (max-width: 500px) {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    height: fit-content;
    justify-content: space-between;
    padding: 1rem 2rem 0 1rem;
    position: fixed;
    width: 100vw;
    a {
      color: inherit;
      display: inline-block;
      text-decoration: none;
    }
    h1 {
      font-size: 26px;
      margin: 0;
      text-transform: capitalize;
    }
    img {
      margin: 0;
      width: 50px;
    }
  }
  @media (max-width: 375px) {
    text-align: right;
    h1 {
      font-size: 24px;
    }
    img {
      width: 40px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 20px;
    }
    img {
      width: 30px;
    }
  }
`

const MobileHeader = () => {
  return (
    <MobileHeaderSyles>
      <Link to="/">
        <h1>jason paul benson</h1>
      </Link>
      <Link to="/information">
        <img src={MobileButton} alt="mobile info button" />
      </Link>
    </MobileHeaderSyles>
  )
}

export default MobileHeader
