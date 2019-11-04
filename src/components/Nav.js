import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = props => {
  const data = props.pageContext

  function LinkToNextPage() {
    if (data.next === null) {
      return (
        <>
          <g
            className="next-selector"
            id="Rectangle_9"
            data-name="Rectangle 9"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5"
          >
            <rect width="64" height="64" stroke="none" />
            <rect x="1" y="1" width="62" height="62" fill="none" />
          </g>
          <g
            className="next-selector"
            id="Forward_arrow"
            data-name="Forward arrow"
            transform="translate(14.267 13.873)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M18.069,0,14.784,3.285,27.221,15.722H0v4.693H27.221L14.784,32.852l3.285,3.285L36.138,18.069Z"
            />
          </g>
        </>
      )
    } else {
      return (
        <Link to={data.next.fields.slug}>
          <g
            className="next-selector"
            id="Rectangle_9"
            data-name="Rectangle 9"
            fill={data.next.frontmatter.hex}
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5"
          >
            <rect width="64" height="64" stroke="none" />
            <rect x="1" y="1" width="62" height="62" fill="none" />
          </g>
          <g
            className="next-selector"
            id="Forward_arrow"
            data-name="Forward arrow"
            transform="translate(14.267 13.873)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M18.069,0,14.784,3.285,27.221,15.722H0v4.693H27.221L14.784,32.852l3.285,3.285L36.138,18.069Z"
            />
          </g>
        </Link>
      )
    }
  }

  function LinkToPreviousPage() {
    if (data.previous === null) {
      return (
        <>
          <g
            className="prev-selector"
            id="Rectangle_9-3"
            data-name="Rectangle 9"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5"
          >
            <rect width="64" height="64" stroke="none" />
            <rect x="1" y="1" width="62" height="62" fill="none" />
          </g>
          <g
            className="prev-selector"
            id="Forward_arrow-2"
            data-name="Forward arrow"
            transform="translate(13.596 13.873)"
          >
            <path
              id="Path_10-2"
              data-name="Path 10"
              d="M18.069,0l3.285,3.285L8.917,15.722H36.138v4.693H8.917L21.354,32.852l-3.285,3.285L0,18.069Z"
            />
          </g>
        </>
      )
    } else {
      return (
        <Link to={data.previous.fields.slug}>
          <g
            className="prev-selector"
            id="Rectangle_9-3"
            data-name="Rectangle 9"
            fill={data.previous.frontmatter.hex}
            stroke="#333"
            strokeWidth="2"
            strokeDasharray="5"
          >
            <rect width="64" height="64" stroke="none" />
            <rect x="1" y="1" width="62" height="62" fill="none" />
          </g>
          <g
            className="prev-selector"
            id="Forward_arrow-2"
            data-name="Forward arrow"
            transform="translate(13.596 13.873)"
          >
            <path
              id="Path_10-2"
              data-name="Path 10"
              d="M18.069,0l3.285,3.285L8.917,15.722H36.138v4.693H8.917L21.354,32.852l-3.285,3.285L0,18.069Z"
            />
          </g>
        </Link>
      )
    }
  }

  const NavStyles = styled.div`
    left: -3vh;
    position: fixed;
    top: 90vh;
    .next-selector {
      display: ${props.pageContext.next === null ? "none" : "inline-block"};
    }
    .prev-selector {
      display: ${props.pageContext.previous === null ? "none" : "inline-block"};
    }
    svg {
      transform: scale(0.6);
    }
  `

  return (
    <NavStyles>
      <svg
        id="nav-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="232"
        height="64"
        viewBox="0 0 232 64"
      >
        <g
          className="next-selector"
          id="Group_48"
          data-name="Group 48"
          transform="translate(168)"
        >
          <LinkToNextPage />
        </g>
        <Link to="/">
          <g
            className="home-selector"
            id="Group_47"
            data-name="Group 47"
            transform="translate(-14 -988)"
          >
            <g
              className="home-selector"
              id="Rectangle_9-2"
              data-name="Rectangle 9"
              transform="translate(98 988)"
              fill="#e5e5e5"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="5"
            >
              <rect width="64" height="64" stroke="none" />
              <rect x="1" y="1" width="62" height="62" fill="none" />
            </g>
            <text
              className="home-selector"
              id="h"
              transform="translate(130 1037)"
              fontSize="48"
              fontFamily="RedHatText-Bold, Red Hat Text"
              fontWeight="700"
            >
              <tspan x="-14.832" y="0">
                h
              </tspan>
            </text>
          </g>
        </Link>
        <g className="prev-selector" id="Group_49" data-name="Group 49"></g>
        <LinkToPreviousPage />
      </svg>
    </NavStyles>
  )
}

export default Nav
