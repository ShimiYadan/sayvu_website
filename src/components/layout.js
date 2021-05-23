import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {createGlobalStyle} from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieConsent from 'react-cookie-consent';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import {Link} from "gatsby"


import Header from "./header"
import Footer from "./footer/footer"
import "../css/layout.css"
import "../css/typography.css"

const Global = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
    <Global />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0`
        }}
      >
        <main>{children}</main>
        <CookieConsent
          enableDeclineButton
          onDecline={() => {
            alert("All cookies declined"); // your stuff here
          }} 
          onAccept={() => {
              initializeAndTrack(window.location)
          }}
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          buttonClasses='cookies-accept-button'
          declineButtonClasses='cookies-decline-button'
          contentClasses='cookies-content'
          >
            <div className='p-cookie-div'>
              <p>This website uses cookies to enhance user experience. <Link to='/privacy-policy'>Read more</Link></p> 
            </div>
        </CookieConsent>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
