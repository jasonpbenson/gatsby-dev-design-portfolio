import React from "react"
import styled from "styled-components"

const ThemeIcon = props => {
  const ThemeIconSyles = styled.div`
    left: 8%;
    position: fixed;
    top: -0.5rem;
    width: auto;
    z-index: 300;
    svg {
      overflow: visible;
      transform: scale(0.6);
    }
    path {
      cursor: pointer;
    }
    @media (max-width: 980px) {
      left: 10%;
      top: 0.5rem;
    }
    @media (max-width: 650px) {
      left: 75%;
      top: 84%;
      svg {
        transform: scale(0.8);
      }
    }
    @media (max-width: 375px) {
      left: 65%;
      top: 82%;
      svg {
        transform: scale(0.9);
      }
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
            stroke="#777"
            strokeWidth="2"
            onClick={props.darkMode}
          />
          <path
            id="shapeGrey"
            d="M139.109,129.9c-2.172,8.734,21.762,11.723,43.257,17.079s39.829,6.091,42.005-2.643,4-23.167-17.5-28.523S141.285,121.173,139.109,129.9Z"
            transform="translate(-72.644 -84.421)"
            fill="#777"
            stroke="#e5e5e5"
            strokeWidth="2"
            onClick={props.greyMode}
          />
          <path
            id="shapeLight"
            d="M144.575,232.729s-14.686-2.05-23.447,6.222-16.4,22.636-13.238,28.081c3.182,5.526,11.981,10.654,35.043,8.941s57.206-6.81,57.206-15.79a2.824,2.824,0,0,0-.274-1.131C194.919,244.852,144.575,232.729,144.575,232.729Z"
            transform="translate(-71.405 -170.782)"
            fill="#e5e5e5"
            stroke="#000"
            strokeWidth="2"
            onClick={props.lightMode}
          />
        </g>
      </svg>
    </ThemeIconSyles>
  )
}

export default ThemeIcon
