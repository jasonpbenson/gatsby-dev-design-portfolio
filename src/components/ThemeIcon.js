import React, { useEffect } from "react"
import styled from "styled-components"

import { useLocalState } from "../hooks/hooks"

const ThemeIcon = () => {
  const [theme, setTheme] = useLocalState("theme" || "themeLight")

  useEffect(() => {
    console.log("ThemeIcon: ", theme)
  })

  const ThemeIconSyles = styled.div`
    width: fit-content;
    svg {
      overflow: visible;
      padding-right: 1rem;
      transform: scale(0.7);
    }
    path {
      cursor: pointer;
    }
  `
  return (
    <ThemeIconSyles>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="118.751"
        height="110.03"
        viewBox="0 0 118.751 110.03"
      >
        <g id="themeShapes" transform="translate(-34.218 3)">
          <path
            id="shapeDark"
            d="M170.419,31.372c17.847-5.264,31.322-12.937,28.889-21.169S165.423-3.12,147.57,2.147,132.228,21.04,134.656,29.272,152.562,36.643,170.419,31.372Z"
            transform="translate(-84.194 -3)"
            fill="#000"
            stroke="#000"
            strokeWidth="2"
            onClick={() => setTheme("themeDark")}
          />
          <path
            id="shapeGrey"
            d="M139.109,129.9c-2.172,8.734,21.762,11.723,43.257,17.079s39.829,6.091,42.005-2.643,4-23.167-17.5-28.523S141.285,121.173,139.109,129.9Z"
            transform="translate(-72.644 -84.421)"
            fill="#777"
            stroke="#777"
            strokeWidth="2"
            onClick={() => setTheme("themeGrey")}
          />
          <path
            id="shapeLight"
            d="M144.575,232.729s-14.686-2.05-23.447,6.222-16.4,22.636-13.238,28.081c3.182,5.526,11.981,10.654,35.043,8.941s57.206-6.81,57.206-15.79a2.824,2.824,0,0,0-.274-1.131C194.919,244.852,144.575,232.729,144.575,232.729Z"
            transform="translate(-71.405 -170.782)"
            fill="#e5e5e5"
            stroke="#000"
            strokeWidth="2"
            onClick={() => setTheme("themeLight")}
          />
        </g>
      </svg>
    </ThemeIconSyles>
  )
}

export default ThemeIcon