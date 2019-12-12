import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';

const ProcDetail = ({
    title,
    location
}) => {
  return (
    <TemplateWrapper2 location={location}>
        <section
          id="proc-detail" 
          className="container-fluid d-flex flex-column flex-md-row justify-content-between px-0 position-relative">
            <div
                className="proc-detail__content order-2 order-md-1 px-md-3 px-lg-5 mx-md-3 mx-lg-5">
                <Feature2 
                    title={title} />
                <div
                    className="proc-detail__content-text mt-0 mt-sm-2 mt-md-5 text-muted">
                    <p className="mb-3 mb-md-5">
                        Para mejorar la apariencia estética de la nariz y su funcionalidad, se han descrito diversos tipos de  cirugías que aportan resultados según sea el caso,  como la septoplastía o  cirugía de septum nasal, la cual es la cirugía correctiva de tabique desviado, rinoplastia abierta o cerrada, que busca mejorar la forma y estructura de la nariz, turbinoplastia, para mejorar la  obstrucción en la respiración causada por el crecimiento de los cornetes , y finalmente la septorrinoplastia, que engloba rinoplastia y septoplastía según sea el caso.  
                    </p>
                    <p className="mb-3 mb-md-5">
                        Mi objetivo: siempre será lograr un resultado natural y estético en la rinoplastia para lo cual siempre realizo un análisis facial en la cara de cada paciente ya que la nariz es un componente importante que se relaciona con la proporción de todos los ángulos faciales.
                    </p>
                </div>
            </div>
            <img 
                className="proc-detail__img img-fluid order-1 order-md-2"
                src="/img/cover-proc-detail.png"
                alt="cover" />
        </section>
    </TemplateWrapper2>
  )
}

ProcDetail.defaultProps = {
    title: "CIRUGÍAS DE NARIZ",
    networks: [{
        image: "/img/wathsapp.svg",
        name: "wathsapp",
        alt: "wathsapp web",
        url: "/"
    },{
        image: "/img/instagram.svg",
        name: "instagram",
        alt: "instagram",
        url: "/"
    },{
        image: "/img/youtube.svg",
        name: "youtube",
        alt: "youtube web",
        url: "/"
    },{
        image: "/img/facebook.svg",
        name: "facebook",
        alt: "facebook web",
        url: "/"
    }],
    ProcDetailPicture: {
        image: "/img/carolina.png",
        alt: "perfil de carolina"
    }
}

export default ProcDetail