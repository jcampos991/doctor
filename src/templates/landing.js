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
        <section className="jumbotron jumbotron-fluid p-0 m-0">
            <img 
                className="img-fluid"
                src="/img/cover.png"
                alt="cover" />
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