import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  return (
    <ContactPageTemplate
      email={entry.getIn(['data', 'email'])}
      formTitle={entry.getIn(['data', 'formTitle'])}
      banner={{
        background: getAsset(entry.getIn(['data', 'banner', 'background'])),
        title: entry.getIn(['data', 'banner', 'title']),
        subText: entry.getIn(['data', 'banner', 'subText']),
        image: getAsset(entry.getIn(['data', 'banner', 'image'])),
      }}
      paragraph={{
        title: entry.getIn(['data', 'paragraph', 'title']),
        text: entry.getIn(['data', 'paragraph', 'text']),
      }}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
