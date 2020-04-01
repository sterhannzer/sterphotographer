import React from "react"
import { Link } from "gatsby"
import "typeface-carme"

import "../styles/global.css"
import styles from "../styles/style.module.css"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children, subtitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header


  if (location.pathname === rootPath) {
    header = (
      <div>
        <div className={[styles.Aligneritem ].join(' ')}>
          <h3 
            style={{
              ...scale(0.3),
              marginBottom: 0,
              fontFamily: `Carme, Noto Sans`,
              fontWeight: `bold`
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
        </div>

        <div className={[styles.Aligneritem2 ].join(' ')}>
          {subtitle}
        </div>
      </div>
    )
  } else {
    header = (
      <h5
        style={{
          fontFamily: `Noto Sans, sans-serif`,
          // marginTop: 0,
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
    <div  className={styles.mysection}
      style={{
        // marginLeft: `auto`,
        // marginRight: `auto`,
        // maxWidth: rhythm(24),
        
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header >
        {header}
      </header>
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
