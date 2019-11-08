import React, { useEffect } from "react"
import styled from "styled-components"

import useLocalState from "../hooks/hooks"

import Header from "./Header"
import MobileHeader from "./MobileHeader"
import ThemeIcon from "./ThemeIcon"

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalState("theme")
  useEffect(() => {
    console.log("Layout...theme updated: ", theme)
  }, [theme, setTheme])

  console.log("Layout...theme: ", theme)

  const lightMode = () => {
    setTheme("themeLight")
  }
  const greyMode = () => {
    setTheme("themeGrey")
  }
  const darkMode = () => {
    setTheme("themeDark")
  }

  const currentTheme =
    typeof window !== "undefined" && window ? localStorage.theme : theme

  const LayoutContainer = styled.div`
    background-color: ${currentTheme === "themeLight"
      ? "#e5e5e5"
      : currentTheme === "themeGrey"
      ? "#777777"
      : currentTheme === "themeDark"
      ? "#333333"
      : "#e5e5e5"};
    color: ${theme === "themeLight"
      ? "#000"
      : theme === "themeGrey"
      ? "#333333"
      : currentTheme === "themeDark"
      ? "#E5E5E5"
      : "e5e5e5"};
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
