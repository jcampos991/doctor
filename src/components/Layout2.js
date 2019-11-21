import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Header from './Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './all.sass'
import './css/utilities.css';
import './css/object.css';

const TemplateWrapper2 = ({ children }) => {
  const { title, description } = useSiteMetadata()

  useEffect(() => {
    const popper = typeof window !== `undefined` ? require("../../node_modules/popper.js/dist/popper.min.js") : null
    const bootstrap = typeof window !== `undefined` ? require("../../node_modules/bootstrap/dist/js/bootstrap.min.js") : null
  }, []);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper2