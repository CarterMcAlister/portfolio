import React from 'react'
import PropTypes from 'prop-types'
import logo from '../img/feather-sprite.svg'

const Icon = ({name}) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <use href={logo+"#"+name}/>
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
