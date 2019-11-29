import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import Presentation from '../components/Presentation'
import Procedures from '../components/Procedures'
import Comments from '../components/Comments'
import Products from '../components/Products'
import BlogSection from '../components/BlogSection';

const Landing = () => {
  return (
    <TemplateWrapper2>
        <section
          id="jumbo" 
          className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
          <img 
              // style={{zIndex: "-100"}}
              className="jumbo__cover w-100 h-100"
              src="/img/cover.svg"
              alt="cover" />
            {/* <div
              className="jumbo__desc text-white font-weight-bold text-uppercase position-absolute">
              Logra tu mejor version
            </div>
            <img 
                className="jumbo__logo position-absolute"
                src="/img/logo.svg"
                alt="logo" /> */}
        </section>

        {/* Info doctor */}
        <Presentation />

        {/* Procedures */}
        <Procedures />

        {/* Testimonials */}
        <Comments />

        {/* Products */}
        <Products />

        {/* Blog */}
        <BlogSection />
    </TemplateWrapper2>
  )
}

export default Landing