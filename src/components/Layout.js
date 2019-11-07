import React, { useEffect } from "react"
import styled from "styled-components"

import useLocalState from "../hooks/hooks"

import Header from "./Header"
import MobileHeader from "./MobileHeader"
import ThemeIcon from "./ThemeIcon"

const initialTheme = "themeLight"

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalState(localStorage.theme || initialTheme)
  useEffect(() => {
    console.log("theme updated: ", theme)
  }, [theme, setTheme])

  console.log(theme)

  const lightMode = () => {
    setTheme("themeLight")
  }
  const greyMode = () => {
    setTheme("themeGrey")
  }
  const darkMode = () => {
    setTheme("themeDark")
  }

  const currentTheme = theme
  console.log("current theme: ", currentTheme)

  const LayoutContainer = styled.div`
    background-color: ${currentTheme === "themeLight"
      ? "#e5e5e5"
      : currentTheme === "themeGrey"
      ? "#777777"
      : "#000000"};
    color: ${currentTheme === "themeLight"
      ? "#000"
      : currentTheme === "themeGrey"
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
