import React from "react"
import { Link } from "gatsby"
import "typeface-carme"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children, subtitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
      <h3
        style={{
          ...scale(0.9),
          marginBottom: rhythm(0.5),
          fontFamily: `Carme, Noto Sans`,
          fontWeight: `bold`,
          marginTop: rhythm(25.5),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#dcdcdc`,
            fontStyle: `bold`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      <div style={{
        color: `#dcdcdc`,
        fontWeight: `normal`,
        fontFamily: `Carme, Noto Sans`,
        ...scale(0.02),
        marginLeft: rhythm(3.0),
      }}>{subtitle}</div>
      </div>
    )
  } else {
    header = (
      <h5
        style={{
          fontFamily: `Noto Sans, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h5>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
