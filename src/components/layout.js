/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import "../styles/styles.scss"

const Layout = ({ children }) => {

  return (
    <>
      <div>
      <nav>
          <div className="nav_container">
            <div className="logo">
              <Link to="/" >
                logo
              </Link>
            </div>
            <div className="links">
              <Link to="/eat">Eat</Link>
              <Link to="/drink">Drink</Link>
              <Link to="/#about">About</Link>
            </div>
          </div>
        </nav>
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <section className="footer">
            <div className="text_container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, doloribus ipsa.</p>
                <p>Open 9h00 - 23h30</p>
                <div className="links">
                    <a href="https://fr-fr.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://www.tripadvisor.fr/">Trip Advisor</a>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
