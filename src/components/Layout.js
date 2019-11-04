import React from "react"
import styled from "styled-components"

import Header from "./Header"

const Layout = ({ children }) => {
  const LayoutContainer = styled.div`
    background-color: #e5e5e5;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    width: 100vw;
  `

  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout

// background-color: ${
//   localTheme === "themeLight" || null
//     ? "#e5e5e5"
//     : localTheme === "themeGrey"
//     ? "#777777"
//     : "#000000"
// }

// .lightTheme {
//   background-color: #e5e5e5;
//   color: #000;
// }
// .greyTheme {
//   background-color: #777777;
//   color: #333333;
// }
// darkTheme {
//   background-color: #000000;
//   color: #ffffffff;
// }
