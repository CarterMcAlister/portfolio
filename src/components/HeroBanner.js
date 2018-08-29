import React from 'react'
import PropTypes from 'prop-types'
import heroBannerStyles from "./heroBanner.module.css"

const HeroBanner = ({ background, title, subText, secondaryImage }) => (
  <section className={heroBannerStyles.banner} style={{backgroundImage: `url(${background.image})`}} alt={background.alt}>
    <div className={heroBannerStyles.container}>
        <div className={heroBannerStyles.bannerText}>
            <h1>{title}</h1>
            <p>{subText}</p>
        </div>
        <img src={secondaryImage.image} alt={secondaryImage.alt} className={heroBannerStyles.secondaryImage}></img>
    </div>
  </section>
)

HeroBanner.propTypes = {
    title: PropTypes.string, 
    subText: PropTypes.string, 
    background: PropTypes.object, 
    secondaryImage: PropTypes.object
}

export default HeroBanner
