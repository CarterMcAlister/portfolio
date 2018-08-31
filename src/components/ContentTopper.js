import React from 'react'
import ContentTopperStyles from './contentTopper.module.css'

const ContentTopper = () => (
  <div className={ContentTopperStyles.contentTop}>
    <div className={ContentTopperStyles.cornerLeft}></div>
    <div className={ContentTopperStyles.cornerRight}></div>
  </div>
)

export default ContentTopper
