import React, { useEffect } from "react"
import styled from "styled-components"

import useLocalState from "../hooks/hooks"

import Header from "./Header"
import MobileHeader from "./MobileHeader"
import ThemeIcon from "./ThemeIcon"

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalState("theme")
  useEffect(() => {
    console.log("theme updated: ", theme)
  }, [theme, setTheme])

  // console.log("localStorage: ", localStorage)

  const lightMode = () => {
    setTheme("themeLight")
  }
  const greyMode = () => {
    setTheme("themeGrey")
  }
  const darkMode = () => {
    setTheme("themeDark")
  }

  const LayoutContainer = styled.div`
    background-color: ${theme === "themeLight" || null
      ? "#e5e5e5"
      : theme === "themeGrey"
      ? "#777777"
      : "#000000"};
    color: ${theme === "themeLight"
      ? "#000"
      : theme === "themeGrey"
      ? "#333333"
      : "#E5E5E5"};
    height: 100vh;
    margin: 0;
    overflow: hidden;
    transition: background-color 2s easein;
    width: 100vw;
  `
  return (
    <LayoutContainer>
      <Header />
      <MobileHeader />
      <ThemeIcon
        lightMode={lightMode}
        greyMode={greyMode}
        darkMode={darkMode}
      />
      {children}
    </LayoutContainer>
  )
}

export default Layout
