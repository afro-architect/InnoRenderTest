import React from 'react'

import { Helmet } from 'react-helmet'

import './inno-render-index.css'

const InnoRenderIndex = (props) => {
  return (
    <div className="inno-render-index-container">
      <Helmet>
        <title>Gray Cautious Dugong</title>
        <meta property="og:title" content="Gray Cautious Dugong" />
      </Helmet>
      <div className="inno-render-index-container1">
        <div className="inno-render-index-container2">
          <div className="inno-render-index-container3">
            <h1 className="inno-render-index-text">Welcome!</h1>
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="inno-render-index-image"
            />
          </div>
          <div className="inno-render-index-container4">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="inno-render-index-image1"
            />
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="inno-render-index-image2"
            />
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="inno-render-index-image3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnoRenderIndex
